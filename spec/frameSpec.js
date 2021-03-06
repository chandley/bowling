describe('Frame', function() {

  var frame;

  beforeEach(function(){
    var third = new Roll(null);
    var second = new Roll(third);
    var first = new Roll(second);
    frame = new Frame([first,second,third],null);
  });

  describe('frame setup', function(){

    it('should contain at least one roll', function() {
      expect(frame.rolls.length).not.toEqual(0);
    });

    it('is not played when created', function() {
      expect(frame.isPlayed()).toEqual(false);
    });  

    it('should know what the first roll is', function() {
    expect(frame.firstRoll()).toEqual(frame.rolls[0]);
    });

  });

  describe('recording a roll', function(){

  	it('can have value after being played', function(){
  		frame.playARoll(5);
  		expect(frame.rolls[0].pinsHit).toEqual(5);
  	});

    it('knows when it has been played', function() {
      frame.playARoll(5);
      expect(frame.isPlayed()).toEqual(true);
    });

    it('can score a roll of 5 and 3', function(){
      frame.playARoll(5);
      frame.playARoll(3);
      expect(frame.rolls[0].pinsHit).toEqual(5);
      expect(frame.rolls[1].pinsHit).toEqual(3);
    });

  it('can score a roll of 3 and 7', function(){
      frame.playARoll(3);
      frame.playARoll(7);
      expect(frame.rolls[0].pinsHit).toEqual(3);
      expect(frame.rolls[1].pinsHit).toEqual(7);
    });

  });

  describe('scoring', function(){
    var nextFrame;
    var frame;

    beforeEach(function(){
      var athird = new Roll(null);
      var asecond = new Roll(athird);
      var afirst = new Roll(asecond);
      nextFrame = new Frame([afirst,asecond,athird],null);

      var third = new Roll(nextFrame.firstRoll());
      var second = new Roll(third);
      var first = new Roll(second);
      frame = new Frame([first,second,third],nextFrame);

      nextFrame.playARoll(5);
      nextFrame.playARoll(1);
    });

    it('it should know what the next frame is', function() {
      expect(frame.nextFrame.rolls.length).not.toEqual(0);
    });

    it('knows when it is a strike', function() {
      frame.playARoll(10);
      expect(frame.isStrike()).toBe(true);
    });

    it('knows when it is not a strike', function() {
      frame.playARoll(9);
      frame.playARoll(1);
      expect(frame.isStrike()).toBe(false);
    });

    it('knows when it is a spare', function() {
      frame.playARoll(9);
      frame.playARoll(1);
      expect(frame.isSpare()).toBe(true);
    });

    it('gives a score without bonus for the first frame', function() {
      frame.playARoll(1);
      frame.playARoll(5);
      expect(frame._score()).toEqual(6);
    });

    it('gives a score for an uncompleted frame', function(){
      frame.playARoll(1)
      expect(frame._score()).toEqual(1);
    });

    it('gives a score including bonus for a strike', function(){
      frame.playARoll(10);
      expect(frame.scoreIncludingBonus()).toEqual(16);
    })

    it('gives a score not including a bonus for a gutter frame', function(){
      frame.playARoll(0);
      frame.playARoll(0);
      expect(frame.scoreIncludingBonus()).toEqual(0);
    });

    it('gives a score including bonus first ball only for spare', function() {
      frame.playARoll(9);
      frame.playARoll(1);
      expect(frame.scoreIncludingBonus()).toEqual(15);
    });

  });

});