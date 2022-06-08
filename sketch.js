
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, backgroundImg, fish;

var canvas, angle, flamingo;
var fishes = [];
var fishAnimation = [];
var fishSpritedata, fishSpritesheet;



function preload(){
  backgroundImg = loadImage("Background(1).gif");
  flamingoImage = loadImage("Flaminglet.png");
  fishSpritedata = loadJSON("Fish_swimming.json");
  fishSpritesheet = loadImage("Fish_swimming(2).png");
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES)
  angle = 15

  flamingo = Bodies.rectangle(160, 350, 160, 310, { isStatic: true});
  World.add(world, flamingo);

  var fishFrames = fishSpritedata.frames;
  for (var i = 0; i < fishFrames.length; i++){
    var pos = fishFrames[i].position;
    var img = fishSpritesheet.get(pos.x, pos.y, pos.w, pos.h);
    fishAnimation.push(img);
  }
}

function draw() 
{
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);

  push();
  imageMode(CENTER);
  image(flamingoImage, flamingo.position.x, flamingo.position.y, 160, 310);
  pop();

  showFishes();
}

function showFishes() {
  if (fishes.length > 0) {
    if(
      fishes[fishes.length - 1] === undefined ||
      fishes[fishes.length - 1].body.position.x < width - 300
    ) {
      var positions = [-40, -60, -70, -20];
      var position = random(positions);
      var fish = new Fish(width, height - 100, 170, 170, position, fishAnimation);

      fishes.push(fish);
    }

     for (var i = 0; i < fishes.length; i++) {
       if(fishes[i]) {
         Matter.Body.setVelocity(fishes[i].body, {
           x: -0.9,
           y:0
         });
         
         fishes[i].display();
         fishes[i].animate();
       }
     }
  } else{
    var fish = new Fish(width, height - 60, 170, 170, -60, fishAnimation);
    fishes.push(fish);
  }
}

