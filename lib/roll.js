function Roll(roll){
  this.pinsHit = null;
  this.nextRoll = roll;
};

Roll.prototype.isPlayed = function() {
  if( this.pinsHit === null ){ return false };
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
  if( this.nextRoll === null ) { return null }
  while ( returnRoll.isPlayed() === false  && returnRoll.nextRoll !== null ) 
    { returnRoll = returnRoll.nextRoll }  
  return returnRoll;
};
