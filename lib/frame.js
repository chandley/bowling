function Frame(){
	this.rolls = [undefined, undefined]
};

  Frame.prototype.isPlayed = function() {
    if(this.rolls[0] === undefined){return false};
    return true;
  };

  Frame.prototype.playARoll = function(pinsHit) {
    if(this.rolls[0] === undefined) {this.rolls[0] = pinsHit} else {this.rolls[1] = pinsHit}
  };

  Frame.prototype.score = function(){
    return (this.rolls[0] || 0) + (this.rolls[1] || 0 ) ;
  };

  Frame.prototype.scoreIncludingBonus = function(nextframe){
    if(this.isStrike()){return (this.score() + (nextframe.score() || 0))}
    if(this.isSpare()){return (this.score()+ (nextframe.rolls[0] || 0))}
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