var matrix = [
    [1, 1, 1, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 1, 8, 0, 0],
    [0, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [1, 1, 5, 0, 0],
    [1, 1, 0, 1, 2],

];
var dog = [];
var cat = [];
var mouse = [];
var side = 120;

function setup() {
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {

            if (matrix[y][x] == 1) {

            }
            else if (matrix[y][x] == 2) {
                mouse.push(new Mouse(x, y));

            }
            else if (matrix[y][x] == 8) {
                cat.push(new Cat(x, y));

            }
               else if (matrix[y][x] == 5) {
                dog.push(new Dog(x, y));

            }
        }
    }

    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}
function draw() {
    for (var i in mouse) {
        mouse[i].sharjvel();
        mouse[i].utel();
        mouse[i].bazmanal();
        mouse[i].satkel();


    }
    for (var i in cat) {
        cat[i].sharjvel();
        cat[i].utel();
        cat[i].bazmanal();
        cat[i].satkel();


    }
    for (var i in dog) {
        dog[i].sharjvel();
        dog[i].utel();
        dog[i].bazmanal();
        


    }

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("yellow");

            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");

            }
            else if (matrix[y][x] == 2) {
                fill("red");

            }
            else if (matrix[y][x] == 8) {
                fill("black");
            }
            else if (matrix[y][x] == 5) {
                fill("green");
            }

            rect(x * side, y * side, 100, 100);
        }
    }
}