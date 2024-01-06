canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d");

var colour = ""
var radius = ""
var widthofline = ""

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
  colour = document.getElementById("colour").value;
  widthofline = document.getElementById("widthofline").value;
  radius = document.getElementById("radius").value
  
  mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
  colour = document.getElementById("colour").value;
  widthofline = document.getElementById("widthofline").value;
  radius = document.getElementById("radius").value
  
  mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave", my_mouseup);

function my_mouseup(e){
  colour = document.getElementById("colour").value;
  widthofline = document.getElementById("widthofline").value;
  radius = document.getElementById("radius").value
  
  mouseEvent = "mouseLeave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
  
  currentpositionofmousex = e.clientX - canvas.offsetLeft;
    currentpositionofmousey = e.clientY - canvas.offsetTop;
}
  mouseEvent = "mouseLeave";

if (mouseEvent == "mouseDown"){
  ctx.beginPath();
  ctx.strokeStyle = color;
ctx.lineWidth = widthofline;
  ctx.arc(currentpositionofmousex, currentpositionofmousey,radius,0,2*Math.PI)
  ctx.stroke()
}