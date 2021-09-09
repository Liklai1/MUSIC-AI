song1="";
song2="";
scoreLeftWrist=0;
songStatus="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
function preload(){
    song1=loadSound("StayWithMe.mp3");
    song2=loadSound("Onedance.mp3")
}
function setup(){
    canvas=createCanvas(600, 500);
    canvas.center(); 
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    image(video, 0,0,  600 , 500);
    songStatus= song1.isPlaying();
    fill("#9350eb");
    stroke("#9350eb");
    if(scoreLeftWrist>0.2){
      circle(leftWristX, leftWristY, 20);
      song2.stop()
      if(songStatus=false){
        song1.play();
        document.getElementById("Songname").innerHTML="Song Name="+ song1;
    }
    }
}
function modelLoaded(){
    console.log('poseNetisinitialized');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        scoreLeftWrist= results[0].pose.keypoints[9],score;
        console.log("scoreLeftWrist="+ scoreLeftWrist);
        leftWristX= results[0].pose.leftWrist.x;
        leftWristY= results[0].pose.leftWrist.x;
        console.log("leftWristX="+leftWristX+ "leftWristY="+leftWristY);
        rightWristX= results[0].pose.rightWrist.x;
        rightWristY= results[0].pose.rightWrist.y;
        console.log("rightWristX="+rightWristX+ "rightWristY="+rightWristY);
    }
}