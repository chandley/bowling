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

  });

  describe('recording a roll', function(){

  	it('can have value after being played', function(){
  		frame.playARoll();
  		expect(frame.rolls[0]).toEqual(5);
  	});

  });

});