controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    soccerBall.throwDart()
})
// Don't forget to comment your code as you work!
let soccerBall: Dart = null
scene.setBackgroundColor(7)
let soccerPlayer = sprites.create(img`
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
soccerPlayer.setPosition(75, 103)
soccerBall = darts.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 1 1 1 . . . . . . 
    . . . 1 1 1 1 f f 1 1 1 1 . . . 
    . . 1 1 1 1 1 1 1 1 1 f 1 1 . . 
    . 1 f f f 1 f f f 1 1 1 1 1 . . 
    . 1 f f f f 1 f 1 1 1 f 1 1 1 1 
    . . 1 f f f f 1 f f f f 1 1 f 1 
    . . 1 1 f 1 1 1 1 f f f 1 f f 1 
    . . . 1 f f 1 f 1 1 f f 1 f f 1 
    . . . 1 1 1 1 f f 1 1 f 1 f 1 1 
    . . . . 1 1 1 1 1 1 1 1 1 1 . . 
    . . . . . 1 1 1 1 1 1 1 1 1 . . 
    . . . . . . . . 1 . . . . . . . 
    `, SpriteKind.Projectile)
soccerBall.setPosition(75, 78)
soccerBall.setTrace()
soccerBall.controlWithArrowKeys()
let mySprite = sprites.create(img`
    . . 2 2 b b b b b . . . . . . . 
    . 2 b 4 4 4 4 4 4 b . . . . . . 
    2 2 4 4 4 4 d d 4 4 b . . . . . 
    2 b 4 4 4 4 4 4 d 4 b . . . . . 
    2 b 4 4 4 4 4 4 4 d 4 b . . . . 
    2 b 4 4 4 4 4 4 4 4 4 b . . . . 
    2 b 4 4 4 4 4 4 4 4 4 e . . . . 
    2 2 b 4 4 4 4 4 4 4 b e . . . . 
    . 2 b b b 4 4 4 b b b e . . . . 
    . . e b b b b b b b e e . . . . 
    . . . e e b 4 4 b e e e b . . . 
    . . . . . e e e e e e b d b b . 
    . . . . . . . . . . . b 1 1 1 b 
    . . . . . . . . . . . c 1 d d b 
    . . . . . . . . . . . c 1 b c . 
    . . . . . . . . . . . . c c . . 
    `, SpriteKind.Player)
