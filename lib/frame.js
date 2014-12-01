

function Frame(nextFrame){
	this.rolls = [third = new Roll()];
  this.rolls.unshift(second = new Roll(third))
  this.rolls.unshift(first = new Roll(second))
  this.nextFrame = nextFrame;
};

Frame.prototype.firstRoll = function() {
  return this.rolls[0];
};

  Frame.prototype.isPlayed = function() {
    // returns true for part played
    if(this.firstRoll().pinsHit === undefined){return false};
    return true;
  };

  Frame.prototype.playARoll = function(pins) {

    // refactor with next roll
    var roll = this.firstRoll();
    while (roll.isPlayed() === true){roll = roll.nextRoll}
    roll.hitPins(pins)
  };

  Frame.prototype.score = function(){
    return (this.rolls[0].pinsHit || 0) + (this.rolls[1].pinsHit || 0 ) ;
  };

  Frame.prototype.scoreIncludingBonus = function(){
    if(this.isStrike()){return (this.rolls[0].pinsHit + (this.nextTwoRollsScore() || 0))};
    if(this.isSpare()){return (this.score()+ (this.nextRollScore() || 0))};
    return this.score();  
  };

  Frame.prototype.isStrike = function(){
    if (this.rolls[0].pinsHit === 10) {return true};
    return false;
  };

   Frame.prototype.isSpare = function(){
    if (this.rolls[0].pinsHit !== 10 && (this.rolls[0].pinsHit + this.rolls[1].pinsHit) === 10) {return true};
    return false;
  };

  Frame.prototype.nextRollScore = function() {
    if(this.rolls[2].pinsHit !== undefined){return this.rolls[2].pinsHit};
    return this.nextFrame.rolls[0].pinsHit;
  };

  Frame.prototype.nextTwoRollsScore = function() {
    if(this.rolls[1].pinsHit !== undefined){return (this.rolls[1].pinsHit + (this.rolls[2].pinsHit || 0))};
    if(this.nextFrame.rolls[1].pinsHit !==undefined){return this.nextFrame.rolls[0].pinsHit + this.nextFrame.rolls[1].pinsHit};
    return(this.nextFrame.rolls[0].pinsHit + (this.nextFrame.nextFrame.rolls[0].pinsHit || 0));
  };