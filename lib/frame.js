function Frame(nextFrame){
	this.rolls = [undefined, undefined];
  this.nextFrame = nextFrame;
};

  Frame.prototype.isPlayed = function() {
    // returns true for part played
    if(this.rolls[0] === undefined){return false};
    return true;
  };

  Frame.prototype.playARoll = function(pinsHit) {
    if(this.rolls[0] === undefined) {this.rolls[0] = pinsHit} else {this.rolls[1] = pinsHit}
  };

  Frame.prototype.score = function(){
    return (this.rolls[0] || 0) + (this.rolls[1] || 0 ) ;
  };

  Frame.prototype.scoreIncludingBonus = function(){
    if(this.isStrike()){return (this.score() + (this.nextFrame.score() || 0))}
    if(this.isSpare()){return (this.score()+ (this.nextFrame.rolls[0] || 0))}
    return this.score()
  };

  Frame.prototype.isStrike = function(){
    if (this.rolls[0] === 10) {return true};
    return false;
  };

   Frame.prototype.isSpare = function(){
    if (this.rolls[0] !== 10 && this.score() === 10) {return true};
    return false;
  };