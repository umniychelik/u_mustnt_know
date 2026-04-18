let c = document.querySelector('canvas'),
    $ = c.getContext('2d')
document.querySelector('.generate').onclick = generateCanvas()
document.querySelector('.clear').onclick = () => {
    $.clearRect(0, 0, W, H)
    generateCanvas()
}
document.querySelector('.delete').onclick = () => {
    $.clearRect(0, 0, W, H)
    c.style.display = 'none'
}

function generateCanvas(){
    let shapeW = parseInt(document.querySelector('.shapeW').value)
    let shapeH = parseInt(document.querySelector('.shapeH').value)
    let shapeAmount = Math.pow(shapeH, 2)
    let backColor = document.querySelector('.backColor').value
    let W = H = shapeW * shapeH
    c.setAttribute('width', W)
    c.setAttribute('height', H)
    if (shapeW < 10 || shapeW > 50 || shapeH < 10 || shapeH > 50 || isNaN(shapeW) || isNaN(shapeH)) {
        throw new Error(alert('wrong number'))
    } else {
        c.style.display = 'block'
        squares()
    }
}


function squares() {
    let x = y = 0
    let squares = []
    let w = h = shapeW
    addSquares()

    
    function Square(x, y) { 
        this.x = x
        this.y = y
        this.color = backColor
        this.isSelected = false
    }

    
    function addSquares() {
        for (let i = 0; i < shapeAmount; i++) {
            let square = new Square(x, y)
            x += w
            if (x == W) {
                y += h
                x = 0
            }
            squares.push(square)
        }
        drawSquares()
    }

    
    function drawSquares() {
        $.clearRect(0, 0, W, H)
        for (let i = 0; i < squares.length; i++) {
            let square = squares[i]
            $.beginPath()
            $.rect(square.x, square.y, w, h)
            $.fillStyle = square.color
            $.lineWidth = border
            $.strokeStyle = borderColor
            $.fill()
            $.stroke()

        }
    }

    c.onclick = select

    
    function select(e) {
        let clickX = e.pageX - c.offsetLeft,
            clickY = e.pageY - c.offsetTop
        
        for (let i = 0; i < squares.length; i++) {
            let square = squares[i]
            
            if (clickX > square.x && clickX < (square.x + w) && clickY > square.y && clickY < (square.y + h)) {
                if (square.isSelected == false) {
                    square.isSelected = true
                    square.color = document.querySelector('.shapeColor').value
                } else {
                    square.isSelected = false
                    square.color = backColor
                }
                drawSquares()
            }
        }
    }

