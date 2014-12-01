function Frame(nextFrame){
	this.rolls = [new Roll, new Roll, new Roll];
  this.nextFrame = nextFrame;
};

  Frame.prototype.isPlayed = function() {
    // returns true for part played
    if(this.rolls[0].pinsHit === undefined){return false};
    return true;
  };

  Frame.prototype.playARoll = function(pinsHit) {

    // refactor with next roll
    if(this.rolls[0].pinsHit === undefined) {this.rolls[0].hitPins(pinsHit)} else 
      if(this.rolls[1].pinsHit === undefined) {this.rolls[1].hitPins(pinsHit)} else {this.rolls[2].pinsHit.hitPins(pinsHit)}
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