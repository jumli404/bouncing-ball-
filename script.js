  var canvas = document.getElementsByTagName('canvas')[0]
        var c = canvas.getContext('2d')
        var v = 4
        var G = 5
        var x = 200
        var y = 200
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        function ani() {

            y += G
            c.beginPath()
            c.clearRect(0, 0, innerWidth, innerHeight)
            c.arc(x, y, 50, Math.PI * 2, false)
            c.strokeStyle = 'red'
            c.fillStyle = 'red'
            c.fill()
            c.stroke()
            if (y + 50 > innerHeight || y - 50 < 0) {
                G = -G
                // x -= v
            }
            if (x + 50 > innerWidth || x - 50 < 0) {
                //  console.log("h")
                v = -v
            }
            x += v
            // console.log(y)

            requestAnimationFrame(ani)
        } ani()
