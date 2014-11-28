function Game(){
	this.frames = [frame0 = new Frame(), frame1 = new Frame(), frame2 = new Frame(), frame3 = new Frame(), frame4 = new Frame(), frame5 = new Frame()]
};

Game.prototype.totalScore = function() {
  total = 0
  for(index in this.frames){
    total = total + (this.frames[index].scoreIncludingBonus(this.frames[index+1]) || 0);
    }
  return total;
};

