input.onPinPressed(TouchPin.P0, function () {
    if (player == a) {
        a = 1
    }
    if (player == b) {
        b = 1
    }
    basic.showLeds(`
        . . . . .
        . . # # #
        . # # # #
        . # # # .
        . . . . .
        `)
    player = 0
    checkusers()
})
function checkWinner () {
    if (a > 3) {
        basic.showString("A")
    }
    if (b > 3) {
        basic.showString("B")
    }
}
input.onButtonPressed(Button.A, function () {
    player = a
})
function checkusers () {
    if (a != 0 && b != 0) {
        if (a == 1 && b == 3) {
            scoreA += 1
        }
        if (a == 1 && b == 2) {
            scoreB += 1
        }
        if (a == 2 && b == 1) {
            scoreA += 1
        }
        if (a == 2 && b == 3) {
            scoreB += 1
        }
        if (a == 3 && b == 2) {
            scoreA += 1
        }
        if (a == 3 && b == 1) {
            scoreB += 1
        }
        a = 0
        b = 0
        checkWinner()
    }
}
input.onPinPressed(TouchPin.P2, function () {
    if (player == a) {
        a = 3
    }
    if (player == b) {
        b = 3
    }
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        # # . # #
        # # . # #
        `)
    player = 0
    checkusers()
})
input.onButtonPressed(Button.B, function () {
    player = b
})
input.onPinPressed(TouchPin.P1, function () {
    if (player == a) {
        a = 2
    }
    if (player == b) {
        b = 2
    }
    basic.showLeds(`
        . # # # #
        # # # # #
        # # # # .
        # # # # .
        # # # # .
        `)
    player = 0
    checkusers()
})
let scoreB = 0
let scoreA = 0
let player = 0
let b = 0
let a = 0
a = 0
b = 0
basic.forever(function () {
	
})
