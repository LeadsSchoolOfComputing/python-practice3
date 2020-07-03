let X = 0
basic.forever(function on_forever() {
    
    X = input.compassHeading()
    if (X > 340 || X < 20) {
        basic.showArrow(ArrowNames.North)
    }
    
    if (X > 20 && X < 70) {
        basic.showArrow(ArrowNames.NorthEast)
    }
    
    if (X > 70 && X < 110) {
        basic.showArrow(ArrowNames.East)
    }
    
    if (X > 110 && X < 160) {
        basic.showArrow(ArrowNames.SouthEast)
    }
    
    if (X > 160 && X < 200) {
        basic.showArrow(ArrowNames.South)
    }
    
    if (X > 200 && X < 250) {
        basic.showArrow(ArrowNames.SouthWest)
    }
    
    if (X > 250 && X < 290) {
        basic.showArrow(ArrowNames.West)
    }
    
    if (X > 290 && X < 340) {
        basic.showArrow(ArrowNames.NorthWest)
    }
    
})
