StartbitV2.startbit_Init()
if (StartbitV2.startbit_getBatVoltage() < 3.55) {
    StartbitV2.startbit_setPixelRGB(StartbitLights.Light1, StartbitRGBColors.Red)
    StartbitV2.startbit_setPixelRGB(StartbitLights.Light2, StartbitRGBColors.Red)
} else {
    StartbitV2.startbit_setPixelRGB(StartbitLights.Light1, StartbitRGBColors.Green)
    StartbitV2.startbit_setPixelRGB(StartbitLights.Light2, StartbitRGBColors.Green)
}
StartbitV2.startbit_showLight()
basic.pause(2000)
StartbitV2.startbit_clearLight()
let bnth = 0
let start = -1
basic.forever(function () {
    if (start == -1) {
        if (!(input.pinIsPressed(TouchPin.P1)) && !(input.pinIsPressed(TouchPin.P2))) {
            basic.pause(3000)
            start = 1
            bnth = 0
        }
    }
    while (start == 1) {
        bnth += 1
        if (bnth > 7700) {
            StartbitV2.startbit_setMotorSpeed(0, 0)
            basic.pause(100)
            StartbitV2.startbit_setMotorSpeed(-30, 30)
            basic.pause(200)
            while (!(input.pinIsPressed(TouchPin.P2))) {
            	
            }
            basic.pause(50)
            StartbitV2.startbit_setMotorSpeed(0, 0)
            basic.pause(50)
            bnth = 0
        } else {
            if (!(input.pinIsPressed(TouchPin.P1)) && !(input.pinIsPressed(TouchPin.P2))) {
                StartbitV2.startbit_setMotorSpeed(20, 20)
            } else if (input.pinIsPressed(TouchPin.P1) && !(input.pinIsPressed(TouchPin.P2))) {
                StartbitV2.startbit_setMotorSpeed(32, 0)
                bnth += 1.5
                basic.pause(40)
            } else if (!(input.pinIsPressed(TouchPin.P1)) && input.pinIsPressed(TouchPin.P2)) {
                StartbitV2.startbit_setMotorSpeed(0, 32)
                bnth += 1.5
                basic.pause(40)
            } else {
                StartbitV2.startbit_setMotorSpeed(0, 0)
                start = -1
                bnth = 0
                break;
            }
        }
    }
})
