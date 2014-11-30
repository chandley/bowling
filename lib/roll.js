function Roll(roll){
  this.pinsHit = undefined;
  this.nextRoll = roll;
};

Roll.prototype.isPlayed = function() {
  if(this.pinsHit === undefined){return false};
  return true
};

Roll.prototype.hitPins = function(pins) {
  this.pinsHit = pins;
};
