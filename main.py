X = 0

def on_forever():
    global X
    X = input.compass_heading()
    if X > 340 or X < 20:
        basic.show_arrow(ArrowNames.NORTH)
    if X > 20 and X < 70:
        basic.show_arrow(ArrowNames.NORTH_EAST)
    if X > 70 and X < 110:
        basic.show_arrow(ArrowNames.EAST)
    if X > 110 and X < 160:
        basic.show_arrow(ArrowNames.SOUTH_EAST)
    if X > 160 and X < 200:
        basic.show_arrow(ArrowNames.SOUTH)
    if X > 200 and X < 250:
        basic.show_arrow(ArrowNames.SOUTH_WEST)
    if X > 250 and X < 290:
        basic.show_arrow(ArrowNames.WEST)
    if X > 290 and X < 340:
        basic.show_arrow(ArrowNames.NORTH_WEST)
basic.forever(on_forever)
