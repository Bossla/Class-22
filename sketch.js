const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground;
var canvas;
var ball;

function setup() {
  canvas = createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  var options = {
    isStatic: true
  }
  ground = Bodies.rectangle(200,390,400,20, options);
  World.add(world,ground);

  var ground_options = {
    restitution: 1.0
  }

  ball = Bodies.circle(200,100,20, ground_options);
  World.add(world,ball);
}

function draw() {
  background(0); 
  
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);

  //drawSprites();
}