
Bowling Challenge
=================

Task: 
-----

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

## Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately. The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

## Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

## 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

Learning points
---------------

The challenge was completed in javascript, with full jasmine unit tests. The code was rewritten so it is fairly clean.

##To do
Create dependency injection of frame into game
Give game a 'roll' function, so the tests do not address the individual rolls in frames. This will make refactoring easier and cleaner
