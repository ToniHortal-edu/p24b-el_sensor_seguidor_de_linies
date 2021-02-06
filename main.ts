function endavant () {
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P12, 100)
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P13, 100)
}
function atura () {
    ContinuousServo.turn_off_motor(DigitalPin.P12)
    ContinuousServo.turn_off_motor(DigitalPin.P13)
}
function giresquerra () {
    ContinuousServo.turn_off_motor(DigitalPin.P12)
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P13, 40)
}
function girdreta () {
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P12, 40)
    ContinuousServo.turn_off_motor(DigitalPin.P13)
}
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 0) {
        endavant()
    }
    if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 0) {
        girdreta()
    }
    if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 1) {
        giresquerra()
    }
    if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 1) {
        atura()
    }
})
