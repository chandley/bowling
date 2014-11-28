function Game(){
	this.frames = [frame = new Frame, nextframe = new Frame]
};

Game.prototype.totalScore = function() {
  total = this.frames[1].score() || 0;
  total = total + (this.frames[0].scoreIncludingBonus(this.frames[1]) || 0);
  return total;
};

