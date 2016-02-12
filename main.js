var SCREEN_WIDTH = 800;
var SCREEN_HEIGHT = 600;

window.addEventListener('load',init);

var canvas;
var ctx;
var image1 = new Image();
var image2 = new Image();

var doraX = 0;
var lastTimestamp = null;

image1.src ='assets/back.png';
image2.src ='assets/dora.png';
image1.onload = function(){
}
image2.onload = function(){
}

/*
　初期化
*/
function init() {
  canvas = document.getElementById('maincanvas');
  ctx = canvas.getContext('2d');

  canvas.width = SCREEN_WIDTH;
  canvas.height = SCREEN_HEIGHT;

  requestAnimationFrame(update);
}
/*
function init(){
    canvas = document.getElementById('maincanvas');
    ctx = canvas.getContext('2d');
    canvas.width = SCREEN_WIDTH;
    canvas.height = SCREEN_HEIGHT;
    requestAnimationFrame(update);
}
*/
function update(timestamp){
    var delta = 0;
    if(lastTimestamp != null){
	delta = (timestamp - lastTimestamp) / 1000;
    }
    lastTimestamp = timestamp;

    requestAnimationFrame(update);
    doraX += 100 * delta;
    if(doraX > 500)
    {
	doraX = 0;
    }
    render();
}

function render(){
    //全体をクリア
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // 背景を表示
    ctx.drawImage(image1, 0, 0);
    // ドラえもんを表示
    ctx.drawImage(image2, doraX, 0);
}

