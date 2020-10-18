input.onButtonPressed(Button.A, function () {
    Y += 1
    basic.showNumber(Y)
})
input.onButtonPressed(Button.AB, function () {
    Total = Y + N
    basic.showString("Y")
    basic.showNumber(Y)
    basic.showString("N")
    basic.showNumber(N)
    basic.showString("Total")
    basic.showNumber(Total)
})
input.onButtonPressed(Button.B, function () {
    N += 1
    basic.showNumber(N)
})
let N = 0
let Y = 0
let Total = 0
Total = 0
Y = 0
N = 0
basic.showString("Trait")
basic.forever(function () {
	
})
