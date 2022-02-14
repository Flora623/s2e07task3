controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    dart = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 5 a a 2 . . . . . . . . . 
        . . 5 5 a 2 2 2 2 4 4 4 . . . . 
        . . . 5 a a 2 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, spacePlane, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.fire, 100)
    info.changeLifeBy(-1)
})
function Level_2 () {
    scene.setBackgroundColor(4)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, spacePlane, 0, 0)
    game.showLongText("Which of the following is not subject of STEM?     (Type the number)        1: Science                                        2: Techonology                                    3: Chinese", DialogLayout.Full)
    if (game.askForNumber("", 1) == 0) {
        game.over(true, effects.bubbles)
    } else {
        game.over(false)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let bogey: Sprite = null
let projectile: Sprite = null
let dart: Sprite = null
let spacePlane: Sprite = null
spacePlane = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ....82..........................
    ....111.....99999...............
    ....2222...9999999..............
    .444f866666699999666............
    444f6666666666666666666.........
    .44f68886666666666666666........
    ..44f88.....88886666666.........
    ...........8888882..............
    ...........888882...............
    ..........888882................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
spacePlane.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
controller.moveSprite(spacePlane, 0, 200)
info.setScore(0)
game.onUpdateInterval(500, function () {
    bogey = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 9 9 . . . . . 5 . . . . 
        . . . 9 9 9 9 . . . 5 5 . . . . 
        2 2 2 2 9 9 2 2 2 2 2 f 3 4 . . 
        . . 2 2 2 2 5 5 5 2 2 f 4 4 4 . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(180, randint(0, 120))
    if (info.score() >= 5) {
        bogey.destroy()
        spacePlane.destroy()
        Level_2()
    }
})
