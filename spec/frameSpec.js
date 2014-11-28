describe('Frame', function() {

  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  describe('frame setup', function(){

    it('should contain a pin', function() {
      expect(frame.pins.length).not.toEqual(0);
    })
  })

});