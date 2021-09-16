input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    if (input.temperature() >= 35) {
        pins.digitalWritePin(DigitalPin.P8, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P8, 0)
    }
    basic.showNumber(input.temperature())
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
