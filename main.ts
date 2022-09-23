let strip = neopixel.create(DigitalPin.P0, 48, NeoPixelMode.RGB)
strip.setBrightness(255)
let btn1B = pins.digitalReadPin(DigitalPin.P16)
let btn2B = pins.digitalReadPin(DigitalPin.P16)
let btn1R = pins.digitalReadPin(DigitalPin.P8)
let btn2R = pins.digitalReadPin(DigitalPin.P8)
basic.forever(function () {
    for (let index = 0; index <= 47; index++) {
        strip.setPixelColor(index, neopixel.rgb(randint(8, 47), randint(0, 47), randint(8, 47)))
        strip.show()
    }
})
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P1) && input.pinIsPressed(TouchPin.P2)) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        for (let index = 0; index < 60; index++) {
            strip.showRainbow(1, 360)
            strip.show()
        }
    }
})
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P1) && input.pinIsPressed(TouchPin.P2)) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        for (let index = 0; index < 60; index++) {
            strip.showRainbow(1, 360)
            strip.show()
        }
    }
})
