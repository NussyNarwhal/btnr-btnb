basic.showIcon(IconNames.Yes)
let btn1B = pins.digitalReadPin(DigitalPin.P1)
let btn2B = pins.digitalReadPin(DigitalPin.P2)
let btn1R = pins.digitalReadPin(DigitalPin.P5)
let btn2R = pins.digitalReadPin(DigitalPin.P11)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
pins.setPull(DigitalPin.P5, PinPullMode.PullUp)
pins.setPull(DigitalPin.P11, PinPullMode.PullUp)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 0) {
        basic.showIcon(IconNames.Sad)
        basic.pause(100)
    } else if (pins.digitalReadPin(DigitalPin.P5) == 0 && pins.digitalReadPin(DigitalPin.P11) == 0) {
        basic.showIcon(IconNames.Happy)
        basic.pause(100)
    } else {
        basic.clearScreen()
    }
})
