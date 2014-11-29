function Game(){
	this.frames = [new Frame, new Frame, new Frame, new Frame, new Frame, new Frame, new Frame];
  //for(i = 0, i < 10, i++){this.frames[i] = new Frame()};
    debugger
};

Game.prototype.totalScore = function() {
  total = 0
  for(index in this.frames){
    if(this.frames[index].isPlayed === false){break}
    total = total + (this.frames[index].scoreIncludingBonus(this.frames[index++]) || 0);
    }
  return total;
};

