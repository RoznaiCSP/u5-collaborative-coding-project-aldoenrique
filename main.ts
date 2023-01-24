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
