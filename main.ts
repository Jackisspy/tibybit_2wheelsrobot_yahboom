radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 125)
    } else if (receivedNumber == 2) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 125)
    } else if (receivedNumber == 3) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Left, 125)
    } else if (receivedNumber == 4) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Right, 125)
    } else if (receivedNumber == 5) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 255)
    } else if (receivedNumber == 6) {
        Tinybit.Music_Car(Tinybit.enMusic.dadadum)
    } else if (receivedNumber == 7) {
        Tinybit.RGB_Car_Big2(125, 0, 0)
    } else if (receivedNumber == 8) {
        Tinybit.RGB_Car_Big2(0, 125, 0)
    } else if (receivedNumber == 8) {
        Tinybit.RGB_Car_Big2(0, 125, 0)
    } else {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    }
})
radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
    basic.showString("TINN")
})
