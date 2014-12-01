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

  	it('can give a total score from a single roll of 3', function(){
  		game.frames[0].playARoll(3)
  		expect(game.totalScore()).toEqual(3)
  	});

    it('can give a total score from a single roll of 6', function(){
      game.frames[0].playARoll(6)
      expect(game.totalScore()).toEqual(6)
    });

    it('can score 2 frames no bonus (roll 2,1 roll 4,2)', function() {
      game.frames[0].playARoll(2);
      game.frames[0].playARoll(1);     
      game.frames[1].playARoll(4);
      game.frames[1].playARoll(2);
      expect(game.totalScore()).toEqual(9);
    });

    it('can score a strike followed by second frame (roll 10, roll 5,1)', function() {
			game.frames[0].playARoll(10);     
      game.frames[1].playARoll(5);
      game.frames[1].playARoll(1);

      expect(game.totalScore()).toEqual(22);
    });

    it('can score from three strikes in a row', function() {
      game.frames[0].playARoll(10);     
      game.frames[1].playARoll(10);
      game.frames[2].playARoll(10);

      expect(game.totalScore()).toEqual(60);
    });


    it('can score from multiple frames', function(){
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
          game.frames[frame].playARoll(10)
       }
        game.frames[9].playARoll(10);
        game.frames[9].playARoll(10); // 3 balls last frame
        expect(game.totalScore()).toEqual(300);
    });

    it('can score a game of spares', function(){
       for(frame = 0; frame < 10; frame++){
          game.frames[frame].playARoll(5);
          game.frames[frame].playARoll(5);
       }
        game.frames[9].playARoll(5);
         // 3 balls last frame
        expect(game.totalScore()).toEqual(150);
    });

    it('can score from full example game', function(){
      game.frames[0].playARoll(1);  
      game.frames[0].playARoll(4);   
      game.frames[1].playARoll(4);
      game.frames[1].playARoll(5);
      game.frames[2].playARoll(6);
      game.frames[2].playARoll(4);
      game.frames[3].playARoll(5);
      game.frames[3].playARoll(5);
      game.frames[4].playARoll(10);

      game.frames[5].playARoll(0);
      game.frames[5].playARoll(1);
      game.frames[6].playARoll(7);
      game.frames[6].playARoll(3);
      game.frames[7].playARoll(6);
      game.frames[7].playARoll(4);
      game.frames[8].playARoll(10);

      game.frames[9].playARoll(2);
      game.frames[9].playARoll(8);
      game.frames[9].playARoll(6);
      expect(game.totalScore()).toEqual(133);
    });

  });    
    
});