function matrixGenerator(matrixSize,cow, grassEater,snake) {
    var matrix = []

    for (let i = 0; i < matrixSize; i++) {

        matrix.push([])

        for (let j = 0; j < matrixSize; j++) {
            matrix[i].push(0)
        }
    }

    for (let i = 0; i < matrixSize; i++) {
        for (let j = 0; j < matrixSize; j++) {

            if (i + j < matrix.length-8) {
                if (matrix[i][j] == 0) {

                    matrix[i][j] = 1
                }
            }

        }


    }

    for (let i = 0; i < matrixSize; i++) {
        for (let j = 0; j < matrixSize; j++) {

            if (i + j > matrix.length+4) {

                    matrix[i][j] = 2
                
            }

        }


    }
   
    for (let i = 0; i < cow; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)



        if (matrix[y][x] == 1) {

            matrix[y][x] = 3
        }


    }

   



    for (let i = 0; i < grassEater; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)



        if (matrix[y][x] == 1) {

            matrix[y][x] = 4
        }


    }
   
    matrix[29][29] = 5

    
    for (let i = 0; i < matrixSize; i++) {
        for (let j = 0; j < matrixSize; j++) {

            if (i + j == matrix.length-1) {

                    matrix[i][j] = 8
                
            }

        }


    }
    for (let i = 0; i < snake; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)



        if (matrix[y][x] == 1) {

            matrix[y][x] = 6
        }


    }
    

    return matrix
    

}

////

var matrix = matrixGenerator(30, 20,6)
var grassArr = []
var waterArr = []
var cowArr = []
var grassEaterArr = []
var warmWaterArr = []
var snakeArr = []
var side = 25


////

function setup() {
    frameRate(15)
    createCanvas(matrix[0].length * side, matrix.length * side)
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            } 
            else if (matrix[y][x] == 2) {
                var wat = new Water(x, y)
                waterArr.push(wat)
            }
            else if (matrix[y][x] == 3) {
                var cow1 = new Cow (x,y)
                cowArr.push(cow1)
            
            }
            else if (matrix[y][x] == 4) {
                var grEat = new GrassEater(x,y)
                grassEaterArr.push(grEat)
            }
            
            else if(matrix[y][x] == 5) {
                var warm = new WarmWater(x,y)
               warmWaterArr.push(warm)
            }
            
            else if(matrix[y][x] == 6) {
                var sn = new Snake(x,y)
              snakeArr.push(sn)
            }
            
        }

    }

}


//////
function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green")
            }
            else if (matrix[y][x] == 2) {
                fill("aqua")
            }
            else if (matrix[y][x] == 3) {
                fill("orange")
            }else if(matrix[y][x] == 4){
                fill ("yellow")
            }
            else if(matrix[y][x] == 5){
                fill ("gray")
            }
            else if(matrix[y][x] == 6){
                fill ("black")
            }
            else {
                fill("white")
            }
            rect(x * side, y * side, side, side)
        }
    }


    for (let i in grassArr) {
        grassArr[i].mul()
    }

    for (let i in grassEaterArr) {
        grassEaterArr[i].eat()
    }
    for (let i in waterArr) {
       
        waterArr[i].mul()
    }
    
      for(let i in cowArr){
         cowArr[i].move()
      }
      for(let i in warmWaterArr){
          warmWaterArr[i].mul()
          warmWaterArr[i].stop()
     }
     for(let i in snakeArr){
       snakeArr[i].eat()
     }  
}


// let erexa1= new Child("Hayk",14,"male");

// console.log(erexa1.name);
// erexa1.walk();
//  console.log(erexa1.beautiful)
