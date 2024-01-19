song = "";
LeftWristX = 0;
LeftWristY = 0;
leftWristscore = 0;
RightWristX = 0;
RightWristY = 0;

function preload(){
 song = loadSound("LIMBO.mp3");
}

function setup(){
    canvas = createCanvas(350,250);
    canvas.position(500,300)

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video,ml);
    posenet.on("pose",gotposes)
}

function draw(){
    image(video,0,0,350,250);
if(leftWristscore > 0.2){
    fill("red");
    stroke("black");
    circle(LeftWristX,LeftWristY,15);
    leftWristnumber = floor(Number(LeftWristY));
    volume = leftWristnumber/250;
    document.getElementById("Volume").innerHTML = "volume: " + volume;
    song.setVolume(volume);
}
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function ml(){
    console.log("{({(-+^%$ HI $%^+-)})}");
}

function gotposes(results){
 if(results.length > 0){
  console.log(results);

  RightWristX = results[0].pose.rightWrist.x;
  RightWristY = results[0].pose.rightWrist.y;

  LeftWristX = results[0].pose.leftWrist.x;
  LeftWristY = results[0].pose.leftWrist.y;
  leftWristscore = results[0].pose.keypoints[9].score;

  console.log(RightWristX + "and rightwrist Y " + RightWristY);
  console.log(LeftWristX + "and leftwrist Y " + LeftWristY);
  console.log("leftwrist score: " + leftWristscore);
 }
}