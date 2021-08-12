input.onButtonPressed(Button.A, function () {
    distance += -1
    basic.showString("" + (distance))
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (distance))
})
input.onButtonPressed(Button.B, function () {
    distance += 1
    basic.showString("" + (distance))
})
let distance = 0
distance = 20
basic.forever(function () {
    if (qbit.Ultrasonic() > distance) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . # . .
            `)
        music.stopAllSounds()
    } else if (qbit.Ultrasonic() < distance) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . . # . .
            . # . # .
            `)
        music.playMelody("C D E F G A B C5 ", 160)
    }
})
