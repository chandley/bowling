

function Frame(rolls,nextFrame){
  this.rolls = rolls; 
  this.nextFrame = nextFrame;
};

Frame.prototype.firstRoll = function() {
  return this.rolls[0];
};

Frame.prototype.isPlayed = function() {
  if(this.firstRoll() === null){return false}; //
  return this.firstRoll().isPlayed();
};

Frame.prototype.playARoll = function(pins) {
  var roll = this.firstRoll();
  while (roll.isPlayed() === true){roll = roll.nextRoll}
  roll.hitPins(pins)
};

Frame.prototype.scoreIncludingBonus = function(){
  if(this.isStrike()){return ( this.firstRoll().score() + this.nextTwoRollsScore( this.firstRoll() ) )};
  if(this.isSpare()){return (this._score()+ this.nextRollScore(this.rolls[1]))};
  return this._score();  
};

Frame.prototype.isStrike = function(){
  if (this.firstRoll().score() === 10) {return true};
  return false;
};

 Frame.prototype.isSpare = function(){
  if (this.firstRoll().score() !== 10 && (this._score()) === 10) {return true};
  return false;
};

Frame.prototype.nextRollScore = function(currentRoll) {
  if(currentRoll.nextPlayedRoll() === null){return 0};
  return currentRoll.nextPlayedRoll().score();
};

Frame.prototype.nextTwoRollsScore = function(currentRoll) {
  return (this.nextRollScore(currentRoll) + this.nextRollScore(currentRoll.nextPlayedRoll()));
};

Frame.prototype._score = function(){
  // we don't get a score off the bonus balls in last round!
  if(this.isStrike()){return this.firstRoll._score()}
  return (this.firstRoll().score() + this.firstRoll().nextRoll.score());
};