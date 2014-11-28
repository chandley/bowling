function Frame(){
	this.rolls = [undefined, undefined]
};

  Frame.prototype.playARoll = function(pinsHit) {
    if(this.rolls[0] === undefined) {this.rolls[0] = pinsHit} else {this.rolls[1] = pinsHit}
  };

  Frame.prototype.score = function(){
    return this.rolls[0] + (this.rolls[1] || 0 ) ;
  };

  Frame.prototype.scoreIncludingBonus = function(nextframe){
    return this.score() + nextframe.score();
  };