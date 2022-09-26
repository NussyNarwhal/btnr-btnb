basic.showIcon(IconNames.Yes)
let btn1B = pins.digitalReadPin(DigitalPin.P5)
let btn2B = pins.digitalReadPin(DigitalPin.P5)
let btn1R = pins.digitalReadPin(DigitalPin.P11)
let btn2R = pins.digitalReadPin(DigitalPin.P11)
pins.setPull(DigitalPin.P5, PinPullMode.PullUp)
pins.setPull(DigitalPin.P11, PinPullMode.PullUp)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P5) == 0) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P11) == 0) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.clearScreen()
    }
})
basic.forever(function () {
	
})
