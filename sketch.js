var game;

function preload(){
  healthyCoral = loadImage("images/HealthyCoral.jpg")
  bleachedCoral = loadImage("images/BleachedCoral.jpg")
  launchPage = loadImage("images/LaunchPage.jpg")
  boy = loadImage("images/BoyCharacter.jpg")
  girl = loadImage("images/GirlCharacter.jpg")
}

function setup() {
  canvas = createCanvas(displayWidth, displayHeight-105);

}

function draw() {
  background(launchPage);

  display();
  
  drawSprites();
}
