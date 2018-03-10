class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.directions = [];
        this.index = 2;

    }

    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    satkel() {
        if (this.energy < 0) {
            for (var c in xotaker) {
                if (xotaker[c].x == this.x && xotaker[c].y == this.y) {
                    matrix[this.y][this.x] = 0
                    xotaker.splice(c, 1);
                }
            }

        }

    }
    sharjvel() {
        this.stanalNorKordinatner();

        var vandak = random(this.yntrelVandak(0))
        if (vandak) {
            matrix[this.y][this.x] = 0
            this.x = vandak[0]; this.y = vandak[1];
            matrix[this.y][this.x] = 2

        }

    }
    bazmanal() {
        this.stanalNorKordinatner();
        var vandak = random(this.yntrelVandak(0));
        if (this.energy == 8 && vandak) {
            var norXotaker = new Xotaker(vandak[0], vandak[1]);
            xotaker.push(norXotaker);
        }


    }
    utel() {
        this.stanalNorKordinatner();
        var xotvandak = random(this.yntrelVandak(1))
        if (xotvandak) {
            this.energy++;
            matrix[this.y][this.x] = 0
            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {

                    grassArr.splice(i,20)
                    break;
                   
                }
            }
           
            this.x = xotvandak[0]; this.y = xotvandak[1];
            matrix[this.y][this.x] = 2;

        }
        else {

            this.energy--;

        }

    }
}