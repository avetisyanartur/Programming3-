var matrix = [
    [0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 2, 8, 2],

];
var side = 120;
var grassArr = [];
var xotaker = [];



function setup() {
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {

            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y,1);
                grassArr.push(gr);


            }
            else if (matrix[y][x] == 2) {
                xotaker.push(new Xotaker(x, y));
                


            }
            else if (matrix[y][x] == 8) {
             
                
            }
        }
    }

    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}
function draw() {
for (var i in xotaker) {
        xotaker[i].sharjvel();
        xotaker[i].utel();
        xotaker[i].bazmanal();
        xotaker[i].satkel();

    }  
     

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");

            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");

            }
            else if (matrix[y][x] == 2) {
                
                fill("yellow");
               
            }
            else if (matrix[y][x] == 8) {
             fill("red");
            }

            rect(x * side, y * side, side, side);
        }
    }
    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }
}