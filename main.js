song="";


function setup(){
    canvas= createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function play(){
  video.show();
  preload();
}

function preload(){
    song= new Audio('music.mp3').play();
}

function draw(){
   video(0,0,600,500);
}



