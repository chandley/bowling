describe('Game',function(){
    
  var game;
  
  beforeEach(function(){
    game = new Game();
  });
    
  describe('on setup', function(){
    
    it('has a frame', function() {
      expect(game.frames.length).not.toEqual(0);
    });
        
  });    
    
});