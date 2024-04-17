let strip = neopixel.create(DigitalPin.P0, 7, NeoPixelMode.RGB)
let range = strip.range(0, 6)
let strip2 = neopixel.create(DigitalPin.P1, 7, NeoPixelMode.RGB)
range = strip2.range(0, 6)
basic.forever(function () {
    strip.showRainbow(1, 360)
    strip.showColor(neopixel.colors(NeoPixelColors.Violet))
    strip2.showColor(neopixel.colors(NeoPixelColors.White))
})
