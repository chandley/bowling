describe('Frame', function() {

  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  describe('frame setup', function(){

    it('should contain at least one roll', function() {
      expect(frame.rolls.length).not.toEqual(0);
    });

    it('the roll should not contain a value until played', function(){
    	expect(frame.rolls[0]).not.toBeDefined();
    	expect(frame.rolls[1]).not.toBeDefined();
    });

    it('is not played when created', function() {
      expect(frame.isPlayed()).toEqual(false);
    });

    it('it should know the next frame is', function() {
      frame = new Frame(nextFrame = new Frame());
      expect(frame.nextFrame.rolls.length).not.toEqual(0);
    });

  });

  describe('recording a roll', function(){

  	it('can have value after being played', function(){
  		frame.playARoll(5);
  		expect(frame.rolls[0]).toEqual(5);
  	});

    it('knows when it has been played', function() {
      frame.playARoll(5);
      expect(frame.isPlayed()).toEqual(true);
    });

    it('can record two rolls', function(){
      frame.playARoll(5);
      frame.playARoll(3);
      expect(frame.rolls[0]).toEqual(5);
      expect(frame.rolls[1]).toEqual(3);
    });

  it('can record another two rolls', function(){
      frame.playARoll(3);
      frame.playARoll(7);
      expect(frame.rolls[0]).toEqual(3);
      expect(frame.rolls[1]).toEqual(7);
    });

  });

  describe('scoring', function(){
    var nextFrame;

    beforeEach(function(){
      nextFrame = new Frame();
      frame = new Frame(nextFrame);
      nextFrame.playARoll(5);
      nextFrame.playARoll(1);
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
      expect(frame.score()).toEqual(6);
    });

    it('gives a score for an uncompleted frame', function(){
      frame.playARoll(1)
      expect(frame.score()).toEqual(1);
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