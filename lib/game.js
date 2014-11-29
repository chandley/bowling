function Game(){
  this.frames = [new Frame()];
  for(i = 0; i < 9; i++){this.frames.unshift(new Frame(this.frames[0]))};
};

Game.prototype.totalScore = function() {
  total = 0;
  for(index = 0; index < this.frames.length; index++){
    if(this.frames[index].isPlayed() === false){break}
    total = total + (this.frames[index].scoreIncludingBonus());
    }
  return total;
};

