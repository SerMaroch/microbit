StartbitV2.startbit_Init()
StartbitV2.ultrasonic_init(StartbitV2.startbit_ultrasonicPort.port1)
basic.forever(function () {
    StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 1, 150, 13)
    if (StartbitV2.startbit_ultrasonic() > 30) {
        StartbitV2.startbit_setMotorSpeed(96, 100)
    } else {
        StartbitV2.startbit_setMotorSpeed(0, 0)
    }
})
