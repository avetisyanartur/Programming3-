class Chess {
    constructor(x, y, index, speed) {
        this.x = x;
        this.y = y;
        this.index = index;


    }
}
class Mouse {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.fatt = 5;

        this.speed = 8;
        this.directions = [];

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

    sharjvel() {
        this.stanalNorKordinatner();

        var vandak = random(this.yntrelVandak(0, 1))
        if (vandak) {
            matrix[this.y][this.x] = 0
            this.x = vandak[0]; this.y = vandak[1];
            matrix[this.y][this.x] = 2

        }

    }
    bazmanal() {
        this.stanalNorKordinatner();
        var vandak = random(this.yntrelVandak(0));
        if (this.fatt > 8 && vandak) {
            var normouse = new Mouse(vandak[0], vandak[1]);
            mouse.push(normouse);
        }


    }
    satkel() {
        if (this.fatt < 0) {
            for (var c in mouse) {
                if (mouse[c].x == this.x && mouse[c].y == this.y) {
                    matrix[this.y][this.x] = 0
                    mouse.splice(c, 1);
                }
            }

        }

    }
    utel() {
        this.stanalNorKordinatner();
        var xotvandak = random(this.yntrelVandak(1))
        if (xotvandak) {
            this.fatt++;
            this.speed--;
            matrix[this.y][this.x] = 0


            this.x = xotvandak[0]; this.y = xotvandak[1];
            matrix[this.y][this.x] = 2;

        }
        else {
            this.speed--;
            this.fatt--;

        }

    }
}
class Cat {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.fatt = 5;

        this.speed = 8;
        this.directions = [];
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

    sharjvel() {
        this.stanalNorKordinatner();

        var vandak = random(this.yntrelVandak(0))
        if (vandak) {
            matrix[this.y][this.x] = 0
            this.x = vandak[0]; this.y = vandak[1];
            matrix[this.y][this.x] = 8

        }

    }
    bazmanal() {
        this.stanalNorKordinatner();
        var vandak = random(this.yntrelVandak(0));
        if (this.fatt > 8 && vandak) {
            var norcat = new Cat(vandak[0], vandak[1]);
            cat.push(norcat);
        }


    }
    satkel() {
        if (this.fatt < 0) {
            for (var c in cat) {
                if (cat[c].x == this.x && cat[c].y == this.y) {
                    matrix[this.y][this.x] = 0
                    cat.splice(c, 1);
                }
            }

        }

    }
    utel() {
        this.stanalNorKordinatner();
        var xotvandak = random(this.yntrelVandak(1, 2))
        if (xotvandak) {
            this.fatt++;
            this.speed--;
            matrix[this.y][this.x] = 0


            this.x = xotvandak[0]; this.y = xotvandak[1];
            matrix[this.y][this.x] = 2;

        }
        else {
            this.speed--;
            this.fatt--;

        }
    }
}
        class Dog {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.fatt = 8;

                this.speed = 8;
                this.directions = [];

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
                if (this.fatt > 8 && vandak) {
                    var nordog = new Dog(vandak[0], vandak[1]);
                    dog.push(nordog);
                }


            }
            satkel() {
                if (this.fatt < 0) {
                    for (var c in dog) {
                        if (dog[c].x == this.x && dog[c].y == this.y) {
                            matrix[this.y][this.x] = 0
                            dog.splice(c, 1);
                        }
                    }

                }

            }
            utel() {
                this.stanalNorKordinatner();
                var xotvandak = random(this.yntrelVandak(8))
                if (xotvandak) {
                    this.fatt++;
                    this.speed--;
                    matrix[this.y][this.x] = 0


                    this.x = xotvandak[0]; this.y = xotvandak[1];
                    matrix[this.y][this.x] = 2;

                }
                else {
                    this.speed--;
                    this.fatt--;

                }

            }
        }
   