input.onButtonPressed(Button.A, function () {
    c = input.temperature()
    basic.showNumber(c)
})
input.onButtonPressed(Button.B, function () {
    f = c * 1.8 + 32
    basic.showNumber(f)
})
let f = 0
let c = 0
basic.showString("2F17Kate")
basic.forever(function () {
	
})
