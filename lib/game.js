function Game(){
	this.frames = [new Frame, new Frame, new Frame, new Frame, new Frame, new Frame, new Frame];
  //for(i = 0, i < 10, i++){this.frames[i] = new Frame()};
};

Game.prototype.totalScore = function() {
  total = 0
  for(index in this.frames){
    if(this.frames[index].isPlayed() === false){break}
    total = total + (this.frames[index].scoreIncludingBonus(this.frames[(parseInt(index)+parseInt(1))]) || 0);
    }
    console.log(index);
    console.log(parseInt(index)+parseInt(1));
    console.log(this.frames[index].scoreIncludingBonus(this.frames[(index+1)]));
    console.log(total);
  return total;
};

