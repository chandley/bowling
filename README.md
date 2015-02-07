# bowling

[![Test Coverage](https://codeclimate.com/github/chandley/bowling/badges/coverage.svg)](https://codeclimate.com/github/chandley/bowling)
[![Code Climate](https://codeclimate.com/github/chandley/bowling/badges/gpa.svg)](https://codeclimate.com/github/chandley/bowling)

## Summary

### Problem

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

* Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately. The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

* Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

* 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

### Languages/Platforms/Tools

| Languages | Technologies  | Testing Frameworks| Misc
| :-------------------------------------------- |:--------------|:-----------|:----|
| Javascript      |               | Jasmine            |               |
|           |               |                   |               |
|           |               |                   |  
|           |               |

### Solution

* Rolls know which is the next roll - this is set at game initialization
* Frames contain rolls
* Frames apply scoring rules for next played roll

### Setup

does not have a graphical frontend

### Tests

jasmine

### Images

### To do

* Create dependency injection of frame into game
* Give game a 'roll' function, so the tests do not address the individual rolls in frames. This will make refactoring easier and cleaner



### Learning points

* A good exercise for jasmine unit tests of javascript 
* Rewriting code several times makes it cleaner

Bowling Challenge
=================





Learning points
---------------


##To do

