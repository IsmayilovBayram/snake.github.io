var CanvasContext;
var Canvas;
window.onload = function(){
    Canvas = document.getElementById('GameCanvas');
    CanvasContext = Canvas.getContext('2d');
    document.addEventListener('keydown',keypush);
    setInterval(Game, 1000/15);
}

var GameSize = 20;
var xv = yv = 0;
var px = py = 0;
var ax = ay = 15;
var trail = [];
var tail = 10;


function Game() {
    px += xv;
    py += yv;

    if(px < 0) {
        px = GameSize - 1;
    }
    if(px > GameSize - 1) {
        px = 0;
    }
    if(py < 0){
        py = GameSize - 1;
    }
    if(py > GameSize - 1) {
        py = 0;
    }
    CanvasContext.fillStyle = 'black';
    CanvasContext.fillRect(0,0,Canvas.width,Canvas.height);

    CanvasContext.fillStyle = 'greenyellow';
    for(var i = 0; i < trail.length; i+=1){
        CanvasContext.fillRect(trail[i].x*GameSize,trail[i].y*GameSize,GameSize-2,GameSize-2);

        if(trail[i].x == px && trail[i].y == py){
            tail = 5;
        }
    }
    trail.push({x:px , y:py});
    while(trail.length > tail){
        trail.shift();
    }
    CanvasContext.fillStyle = 'red';
    CanvasContext.fillRect(ax * GameSize,ay * GameSize,GameSize-2,GameSize-2);

    if(ax==px && ay==py) {
        tail+=1;
        ax = Math.floor(Math.random()*GameSize);
        ay = Math.floor(Math.random()*GameSize);
    }
}

function keypush(e) {
    if(e.keyCode==37) {
        xv = -1;
        yv = 0;
    }
    if(e.keyCode==38) {
        xv = 0;
        yv = -1;
    }
    if(e.keyCode==39) {
        xv = 1;
        yv = 0;
    }
    if(e.keyCode==40) {
        xv = 0;
        yv = 1;
    }
}