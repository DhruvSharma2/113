function preload(){

}
function setup(){
    canvas = createCanvas(340,480);
    canvas.position(110,250);
    video = createCapture(300,400);
    video.hide()
}
function draw() {
    image(video,0,0,640,4800);
    tint(tint_color);
    circle(30,30,20);
    ellipse(56,46,55,55);
}
function take_snapshot()
{
    save('student.png');
}
function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}
