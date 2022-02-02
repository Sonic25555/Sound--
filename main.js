song1="";
song2="";
function preload(){
song1=loadSound("music.mp3");
song2=loadSound("song2.mp3");
}
function setup(){
canvas=createCanvas(450,350);
canvas.center();
video=createCapture(VIDEO);
video.hide();
}
function play(){
    song1.play();
}
function draw(){
image(video,0,0,450,350);
}