function Frame(){
	this.rolls = [undefined, undefined]
};

Frame.prototype.playARoll = function(pinsHit) {
  if(this.rolls[0] === undefined) {this.rolls[0] = pinsHit} else {this.rolls[1] = pinsHit}
};
