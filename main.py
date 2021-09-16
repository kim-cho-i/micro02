온도 = 0

def on_forever():
    global 온도
    온도 = input.temperature()
    led.plot_bar_graph(온도, 50)
basic.forever(on_forever)
