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

Roll.prototype.score = function() {
  return (this.pinsHit || 0);
};

Roll.prototype.nextPlayedRoll = function() {
  var returnRoll = this.nextRoll;
  while (returnRoll.isPlayed() === false ){
    {
      returnRoll = returnRoll.nextRoll
    }
  }
  return returnRoll;
};
