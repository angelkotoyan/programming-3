class Snake {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 7;
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
    chooseCell(char) {
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
        }
        return found
    }
    eat() {
        let emptyCell = this.chooseCell(3)
        let newCell = random(emptyCell)
        if (newCell) {
            this.energy += 4
            var newX = newCell[0]
            var newY = newCell[1]

            for (var i in cowArr) {
                if (newX ==cowArr[i].x && newY == cowArr[i].y) {
                    cowArr.splice(i, 1);
                    break;
                }
            }

            matrix[newY][newX] = 6
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
        let emptyCell = this.chooseCell(0);
        let newCell = random(emptyCell)

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[newY][newX] = 6;
            matrix[this.y][this.x] = 0;


            this.x = newX;
            this.y = newY;

            this.energy--

            if (this.energy < 0) {
                this.die()
            }
        }
    }
    die() {
        for (let i = 0; i < snakeArr.length; i++) {
            if (snakeArr[i].x == this.x && snakeArr[i].y == this.y) {
               snakeArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0;
    }
}