describe('Roll',function(){
    
  var roll; 
  var anotherRoll;
  
  beforeEach(function(){
    anotherRoll = new Roll();
    roll = new Roll(anotherRoll);
  });
    
  describe('basic properties', function(){
    
    it('starts with undefined pins hit', function() {
    expect(roll.pinsHit).not.toBeDefined();
    });

    it('is not played when created', function(){
      expect(roll.isPlayed()).toBe(false);
    });

    it('is played when pins have been hit', function(){
      roll.hitPins(5);
      expect(roll.isPlayed()).toBe(true);
    });

    it('remembers how many pins have been hit', function() {
      roll.hitPins(5);
      expect(roll.pinsHit).toEqual(5);
    });

    it('knows which is the next roll', function() {
      expect(roll.nextRoll).toBe(anotherRoll);
    });

    it('has zero score if not played', function() {
      expect(roll.score()).toEqual(0);
    });

    it('has a score equal to pins hit', function() {
      roll.hitPins(5);
      expect(roll.score()).toEqual(5);
    });


        
  });    
    
});