



        var canvas = document.getElementsByTagName('canvas')[0]
        var c = canvas.getContext('2d')
        /*  var v = 4
          var G = 5
          var x = 200
          var y = 200*/
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        function Opac(x, y) {
            this.x = x
            this.y = y
            this.g = 4
            this.v = 4
            this.r = 50
            this.draw = () => {

                //  console.log(this.y)
                c.beginPath()
                c.clearRect(0, 0, innerWidth, innerHeight)
                c.arc(this.x, this.y, this.r, Math.PI * 2, false)
                c.strokeStyle = 'red'
                c.fillStyle = 'red'
                c.fill()
                c.stroke()
                this.move()
                //console.log('a')
            }
            this.move = () => {
                this.y += this.g
                if (this.y + this.r > innerHeight || this.y - 50 < 0) {
                    this.g = -this.g
                    console.log(this.y)

                    //this.x -= this.v
                }
                if (this.x + this.r > innerWidth || this.x - 50 < 0) {
                    //  console.log("h")
                    this.v = -this.v
                    //alert("t")
                }
                this.x += this.v

            }
        }
        var o = new Opac(200, 200)
        function ani() {


            o.draw()

            requestAnimationFrame(ani)
        } ani()

