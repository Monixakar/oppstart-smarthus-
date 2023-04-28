input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P0, 180)
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P0, 180)
    basic.pause(1000)
})
let strip: neopixel.Strip = null
let lys = 0
let temp = 0
OLED.init(128, 64)
OLED.writeStringNewLine("Velkommen hjem :)")
basic.pause(5000)
basic.forever(function () {
    temp = smarthome.ReadTemperature(TMP36Type.TMP36_temperature_C, AnalogPin.P2)
    OLED.clear()
    OLED.writeStringNewLine("Temperaturen er")
    OLED.writeNumNewLine(temp)
    if (temp > 21) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    basic.pause(10000)
    OLED.clear()
    lys = smarthome.ReadLightIntensity(AnalogPin.P4)
    OLED.writeStringNewLine("Lysstyrken er")
    OLED.writeNumNewLine(lys)
    led.enable(false)
    strip = neopixel.create(DigitalPin.P3, 1, NeoPixelMode.RGB)
    if (lys < 90) {
        neopixel.create(DigitalPin.P3, 1, NeoPixelMode.RGB).showColor(neopixel.colors(NeoPixelColors.White))
    } else {
        neopixel.create(DigitalPin.P3, 1, NeoPixelMode.RGB).showColor(neopixel.colors(NeoPixelColors.Black))
    }
    basic.pause(10000)
    OLED.clear()
})
