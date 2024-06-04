basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 33)
    basic.pause(2000)
    maqueen.motorStop(maqueen.Motors.M2)
})
basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 33)
    basic.pause(2000)
    maqueen.motorStop(maqueen.Motors.M1)
})
