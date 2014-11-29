function Game(){
  this.frames = [];
  for(i = 0; i < 10; i++){this.frames.push(new Frame())};
};

Game.prototype.totalScore = function() {
  total = 0;
  for(index = 0; index < this.frames.length; index++){
    if(this.frames[index].isPlayed() === false){break}
    total = total + (this.frames[index].scoreIncludingBonus(this.frames[index + 1]) || 0);
    }
  return total;
};

