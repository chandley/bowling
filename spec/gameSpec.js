describe('Game',function(){
    
  var game;
  var frame;
  
  beforeEach(function(){
    game = new Game();
    frame = new Frame();
  });
    
  describe('on setup', function(){
    
    it('has a frame', function() {
      expect(game.frames.length).not.toEqual(0);
    });
        
  });

  describe('when scoring game', function(){

  	it('can give a total score from a frame without bonus', function(){
  		game.frames[0].playARoll(3)
  		expect(game.totalScore()).toEqual(3)
  	});

    it('can give another total score from a frame without bonus', function(){
      game.frames[0].playARoll(6)
      expect(game.totalScore()).toEqual(6)
    });

    it('can give a score from two games no bonus', function() {
      game.frames[0].playARoll(2);
      game.frames[0].playARoll(1);     
      game.frames[1].playARoll(4);
      game.frames[1].playARoll(2);
      expect(game.totalScore()).toEqual(9);
    });

    it('can give a score from two frames with a strike first frame', function() {
			game.frames[0].playARoll(10);     
      game.frames[1].playARoll(5);
      game.frames[1].playARoll(1);

      expect(game.totalScore()).toEqual(22);
    });

    it('can give a score from multiple frames', function(){
    	game.frames[0].playARoll(1);  
    	game.frames[0].playARoll(4);   
      game.frames[1].playARoll(4);
      game.frames[1].playARoll(5);
      game.frames[2].playARoll(6);
      game.frames[2].playARoll(4);
      game.frames[3].playARoll(5);
      game.frames[3].playARoll(5);
      expect(game.totalScore()).toEqual(39);
    });

    it('can score a gutter game', function(){
       for(frame = 0; frame < 10; frame++){
         for(ball = 0; ball < 2; ball++){
          game.frames[frame].playARoll(0)
         }
       }
        expect(game.totalScore()).toEqual(0);
    });

    it('can score a perfect game', function(){
       for(frame = 0; frame < 10; frame++){
         for(ball = 0; ball < 2; ball++){
          game.frames[frame].playARoll(10)
         }
       }
        game.frames[9].playARoll(10) // 3 balls last frame
        expect(game.totalScore()).toEqual(300);
    });

  });    
    
});