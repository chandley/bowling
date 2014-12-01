

function Game(){
  this.addLastFrame();
  for(i = 0; i < 9; i++){
    this.addAFrame();
  }; 
};

Game.prototype.addAFrame = function() {
  frameRolls = [new Roll(this.frames[0].firstRoll())];
  frameRolls.unshift(new Roll(frameRolls[0]));
  this.frames.unshift(new Frame(frameRolls,this.frames[0]))
};

Game.prototype.addLastFrame = function() {
  var frameRolls = [new Roll(null)];
  for(i = 0; i < 2; i++){frameRolls.unshift(new Roll(frameRolls[0]))};
  this.frames = [new Frame(frameRolls,null)]
};


Game.prototype.totalScore = function() {
  frame_scores = this.frames.map(function(frame) {return frame.scoreIncludingBonus()})
  return frame_scores.reduce(function(a,b) {return a + b})
};

