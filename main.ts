input.onButtonPressed(Button.A, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1378, 2136, 255, 255, 500, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    music.stopMelody(MelodyStopOptions.Background)
})
let i = images.createImage(`
    . . . . .
    # . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
i.clear();
music.beginMelody([

    "C2:2", "D2:2","E2:2","F2:2", "G2:2","E2:2","G2:4",
    "G#2:2", "F2:2", "G#2:4",
    "G2:2", "E2:2", "G2:4",

    "C2:2", "D2:2", "E2:2", "F2:2", "G2:2", "E2:2", "G2:4",
    "G#2:2", "F2:2", "G#2:4",
    "G2:8",

    "C2:2", "D2:2", "E2:2", "F2:2", "G2:2", "E2:2", "G2:4",
    "G#2:2", "F2:2", "G#2:4",
    "G2:2", "E2:2", "G2:4",

    "C2:2", "D2:2", "E2:2", "F2:2", "G2:2", "E2:2", "G2:2","C3:2",
    "G2:2","E2:2","C2:2","E2:2","G2:8"

], MelodyOptions.ForeverInBackground)
