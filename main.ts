namespace SpriteKind {
    export const Goal = SpriteKind.create()
}
/**
 * Don't forget to comment your code as you work!
 */
function doGoalie () {
    goalie = sprites.create(img`
        ...........dddddddd.............
        ...........ffddddff.............
        ...........ffddddff.............
        ...........dddddddd.............
        ...........dddddddd.............
        ...9988..888888888888..8899.....
        ...9988..888888888888..8899.....
        99999888888888888888888889999...
        99999888888888888888888889999...
        ...9988..888888888888..8899.....
        ...9988..888888888888..8899.....
        .........888888888888...........
        .........888888888888...........
        .........999999999999...........
        .........999999999999...........
        .........999999999999...........
        .........999999999999...........
        .........9999....9999...........
        .........9999....9999...........
        .........1111....1111...........
        .........1111....1111...........
        .........1111....1111...........
        .........1111....1111...........
        .........1111....1111...........
        .........1111....1111...........
        .........1111....1111...........
        .........1111....1111...........
        .....ffffffff....ffffffff.......
        .....ffffffff....ffffffff.......
        ...ffffffffff....ffffffffff.....
        ...ffffffffff....ffffffffff.....
        ................................
        `, SpriteKind.Player)
    goalie.setPosition(74, 32)
}
function doSoccerPlayer () {
    soccerPlayer = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f f f f f f f f f f . . 
        . . f f f f 4 4 4 4 f f f f . . 
        . f f 4 f b f 4 4 f b f 4 f f . 
        . f 4 4 4 1 f 4 4 f 1 4 4 4 f . 
        . . f 4 4 4 4 4 4 4 4 4 4 f . . 
        . . . f 4 4 f f f f 4 4 f . . . 
        . . 4 4 8 9 9 9 9 9 9 8 4 4 . . 
        . . 4 4 8 9 8 9 9 9 9 8 4 4 . . 
        . . 4 4 8 9 9 9 9 9 9 8 4 4 . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . 1 1 . . 1 1 . . . . . 
        `, SpriteKind.Player)
    soccerPlayer.setPosition(74, 107)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    soccerBall.throwDart()
    goalie.setPosition(randint(20, 120), randint(25, 35))
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    soccerBall.destroy()
    game.splash("Saved!")
})
function doGoal () {
    goal = sprites.create(img`
        ......................................................................................................................................................
        ......................................................................................................................................................
        ......................................................................................................................................................
        ......................................................................................................................................................
        ......................................................................................................................................................
        ......................................................................................................................................................
        ................111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.......................
        ................111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.......................
        ................111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111.......................
        ................11111.....................................................................................................11111.......................
        ................11111.....................................................................................................11111.......................
        ................11111.....................................................................................................11111.......................
        ................11111.....................................................................................................11111.......................
        ................11111.....................................................................................................11111.......................
        ................11111.....................................................................................................11111.......................
        ................11111.....................................................................................................11111.......................
        ................11111.....................................................................................................11111.......................
        ................11111.....................................................................................................11111.......................
        ................11111.....................................................................................................11111.......................
        ................11111.....................................................................................................11111.......................
        ................11111.....................................................................................................11111.......................
        ................11111.....................................................................................................11111.......................
        ................11111.....................................................................................................11111.......................
        ................11111.....................................................................................................11111.......................
        ................11111.....................................................................................................11111.......................
        ................11111.....................................................................................................11111.......................
        ................11111.....................................................................................................11111.......................
        ................11111.....................................................................................................11111.......................
        ................11111.....................................................................................................11111.......................
        ................11111.....................................................................................................11111.......................
        ................11111.....................................................................................................11111.......................
        ................11111.....................................................................................................11111.......................
        ................11111.....................................................................................................11111.......................
        ................11111.....................................................................................................11111.......................
        ................11111.....................................................................................................11111.......................
        ................11111.....................................................................................................11111.......................
        ................11111.....................................................................................................11111.......................
        ................11111.....................................................................................................11111.......................
        ................11111.....................................................................................................11111.......................
        ................11111.....................................................................................................11111.......................
        ................11111.....................................................................................................11111.......................
        ................11111.....................................................................................................11111.......................
        ................11111.....................................................................................................11111.......................
        ................11111.....................................................................................................11111.......................
        ................11111.....................................................................................................11111.......................
        ................11111.....................................................................................................11111.......................
        ................11111.....................................................................................................11111.......................
        ................11111.....................................................................................................11111.......................
        ................11111.....................................................................................................11111.......................
        ................11111.....................................................................................................11111.......................
        ................11111.....................................................................................................11111.......................
        ................11111.....................................................................................................11111.......................
        ................11111.....................................................................................................11111.......................
        ................11111.....................................................................................................11111.......................
        ......................................................................................................................................................
        ......................................................................................................................................................
        ......................................................................................................................................................
        ......................................................................................................................................................
        ......................................................................................................................................................
        ......................................................................................................................................................
        `, SpriteKind.Goal)
    goal.setPosition(80, 25)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Goal, function (sprite, otherSprite) {
    soccerBall.destroy()
    info.changeScoreBy(1)
    game.splash("Score!")
})
function doSoccerBall () {
    soccerBall = darts.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 f f 1 1 . . . . . 
        . . . 1 1 1 1 f f 1 1 1 . . . . 
        . . 1 f f 1 1 1 1 1 1 1 1 . . . 
        . . 1 f f 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 f f 1 . . . 
        . . 1 1 1 1 f f 1 1 f f 1 . . . 
        . . 1 1 1 1 f f 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . f f 1 1 1 1 1 1 1 1 1 . . . 
        . . . f 1 1 1 f f 1 1 1 . . . . 
        . . . . 1 1 1 f f 1 1 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    soccerBall.setPosition(74, 91)
    soccerBall.setTrace()
    soccerBall.controlWithArrowKeys()
}
let goal: Sprite = null
let soccerBall: Dart = null
let soccerPlayer: Sprite = null
let goalie: Sprite = null
scene.setBackgroundColor(7)
doSoccerPlayer()
doSoccerBall()
doGoal()
doGoalie()
