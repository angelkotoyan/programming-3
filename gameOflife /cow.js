class Cow {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.direction = []

    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]

    }
    chooseCell(char, char1) {
        this.getNewCoordinates()
        let found = [];

        for (let i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char) {
                    found.push(this.directions[i])
                }
            }
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == char1) {
                    found.push(this.directions[i])
                }
            }

        }
        return found
    }
    eat() {
        let emptyCell = this.chooseCell(0)
        let newCell = random(emptyCell)
        if (newCell) {
            this.energy += 5
            var newX = newCell[0]
            var newY = newCell[1]

            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }

            for (var i in waterArr) {
                if (newX == waterArr[i].x && newY == waterArr[i].y) {
                    waterArr.splice(i, 1);
                    break;
                }
            }



            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
            if (this.energy > 25) {
                this.mul()
            }
        }

        else {
            this.move()
        }
    }
    move() {
        let emptyCell = this.chooseCell(0, 2);
        let newCell = random(emptyCell)

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;


            this.x = newX;
            this.y = newY;

            this.energy--
            

            }
        }
    }
    