function Game(){
  this.frames = [new Frame()];
  for(i = 0; i < 9; i++){this.frames.unshift(new Frame(this.frames[0]))};
};

Game.prototype.totalScore = function() {
  frame_scores = this.frames.map(function(frame) {return frame.scoreIncludingBonus()})
  return frame_scores.reduce(function(a,b) {return a + b})
};

