describe("Pin for bowling at", function(){
  var pin;

  beforeEach(function(){
    pin = new Pin();
  });

  describe('pin properties', function(){

    it('should start standing', function(){
      expect(pin.isStanding()).toBe(true);
    });

    it('can be knocked over', function(){
    	pin.knockDown();
    	expect(pin.isStanding()).toBe(false);
    });
    
  });

});