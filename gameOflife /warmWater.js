class WarmWater {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            

           
        ]

    }

    chooseCell(char) {
        let found = [];

        for (let i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char) {
                    found.push(this.directions[i])
                }
            }
        }
        return found
    }
    mul() {
        this.multiply++
        let emptyCell = this.chooseCell(2)
        let newCell = random(emptyCell)
        if (this.multiply > 8 && newCell) {
            var newX = newCell[0]
            var newY = newCell[1]

            matrix[newY][newX] = 5

            var warm = new WarmWater(newX, newY)

            warmWaterArr.push(warm)
     
            this.multiply = 0



        }

    

    }

    stop(){
        let emptyCell = this.chooseCell(8)
        let newCell = random(emptyCell)

          if (newCell  && warmWaterArr.length < 170 ) {
            var newX = newCell[0]
            var newY = newCell[1]

            matrix[newY][newX] = 5

            var warm = new WarmWater(newX, newY)

            warmWaterArr.push(warm)

          }

          if(warmWaterArr.length >170){
            for (let i = 0; i < warmWaterArr.length; i++) {
                if (warmWaterArr[i].x == this.x && warmWaterArr[i].y == this.y) {
                    warmWaterArr.splice(i, 5)
                }
            }
            matrix[this.y][this.x] = 0;
          }
    

    }

}