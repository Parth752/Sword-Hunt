const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;

function preload(){
backgroundImg=loadImage("MAZE.png");
}
function setup(){

}
function draw(){
background.add(backgroundImg);
}