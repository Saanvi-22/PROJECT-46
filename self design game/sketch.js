var backgroundImg;
var alienSpaceshipImg, spaceshipImg, asteroidImg, laserImg, alienSpaceshipImg2;
var background;
var spaceship;
var asteroidGroup, alienSpaceshipGroup;


function preload(){
  backgroundImg = loadImage("space.jpeg");
  spaceshipImg = loadImage("Spaceship.png");
  asteroidImg = loadImage("Asteroid.png");
  laserImg = loadImage("laser.png");
  alienSpaceshipImg = loadImage("alienSpaceship.png");
  alienSpaceshipImg2 = loadImage("alienSpaceship2.png");

  }
  

function setup() {
  createCanvas(1400, 800);
  background = createSprite(100, 300, 100, 800);
  background.addImage("background",backgroundImg);
  background.scale = 1;

  spaceship = createSprite(400, 600, 20, 10);
  spaceship.addImage("spaceship",spaceshipImg )
  spaceship.scale = 0.6;


  //laser = createSprite(400, 500,20, 10);
  //laser.addImage("laser", laserImg);

  asteroidGroup = new Group();
  alienSpaceshipGroup = new Group(); 



}
function draw(){
  spaceship.x = mouseX
  spaceship.y = mouseY

  //if(keyDown("space")){
    
  //  spaceship.x = laser.x
 // }
  
  spawnAsteroid();
  spawnalienSpaceship();



  drawSprites();

}

function spawnAsteroid(){
  if (frameCount % 150 === 0){
    var asteroid = createSprite(100,50);
    asteroid.x = Math.round(random(10,550));
    asteroid.addImage("asteroid",asteroidImg);
    asteroid.scale = 0.2;
    asteroid.velocityY =20; 

  }
}
function spawnalienSpaceship(){
  if(frameCount % 150 === 0){
    var alienSpaceship1 = createSprite(100, 10);
    alienSpaceship1.velocityY = 30;
    var rand = Math.round(random(1,2));
    switch(rand){
      case 1 :alienSpaceship1.addImage(alienSpaceshipImg);
      break;
      case 2 : alienSpaceship1.addImage(alienSpaceshipImg2);
      break;
      default: break
    }
    alienSpaceship1.scale = 0.2;
  }
}

