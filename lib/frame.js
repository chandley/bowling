

function Frame(nextFrame){
	this.rolls = [third = new Roll(nextFrame === undefined? null: nextFrame.firstRoll()  )];
  this.rolls.unshift(second = new Roll(third))
  this.rolls.unshift(first = new Roll(second))
  this.nextFrame = nextFrame;
};

Frame.prototype.firstRoll = function() {
  return this.rolls[0];
};

  Frame.prototype.isPlayed = function() {
    return this.firstRoll().isPlayed();
  };

  Frame.prototype.playARoll = function(pins) {
    var roll = this.firstRoll();
    while (roll.isPlayed() === true){roll = roll.nextRoll}
    roll.hitPins(pins)
  };

  Frame.prototype.score = function(){
    // we don't get a score off the bonus balls in last round!
    if(this.isStrike()){return this.firstRoll.score()}
    return (this.firstRoll().score() + this.firstRoll().nextRoll.score());
  };

  Frame.prototype.scoreIncludingBonus = function(){
    if(this.isStrike()){return (this.firstRoll().score() + (this.nextTwoRollsScore(this.firstRoll()) || 0))};
    if(this.isSpare()){return (this.score()+ (this.nextRollScore(this.rolls[1]) || 0))};
    return this.score();  
  };

  Frame.prototype.isStrike = function(){
    if (this.firstRoll().score() === 10) {return true};
    return false;
  };

   Frame.prototype.isSpare = function(){
    if (this.firstRoll().score() !== 10 && (this.score()) === 10) {return true};
    return false;
  };

  // Frame.prototype.nextRollScore = function() {
  //   if(this.rolls[2].pinsHit !== undefined){return this.rolls[2].pinsHit};
  //   return this.nextFrame.rolls[0].pinsHit;
  // };

  // Frame.prototype.nextTwoRollsScore = function() {
  //   if(this.rolls[1].pinsHit !== undefined){return (this.rolls[1].pinsHit + (this.rolls[2].pinsHit || 0))};
  //   if(this.nextFrame.rolls[1].pinsHit !==undefined){return this.nextFrame.rolls[0].pinsHit + this.nextFrame.rolls[1].pinsHit};
  //   return(this.nextFrame.rolls[0].pinsHit + (this.nextFrame.nextFrame.rolls[0].pinsHit || 0));
  // };

  Frame.prototype.nextRollScore = function(currentRoll) {
    return currentRoll.nextPlayedRoll().score();
  };

  Frame.prototype.nextTwoRollsScore = function(currentRoll) {
    return (currentRoll.nextPlayedRoll().score() + currentRoll.nextPlayedRoll().nextPlayedRoll().score());
  };