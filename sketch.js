var fixedrect, movingrect 


function setup() {
  createCanvas(600, 600);
  
  fixedrect = createSprite(200, 200, 90, 90);
  movingrect = createSprite(300, 200, 90, 90);

  fixedrect.shapeColor = "lightblue";
  movingrect.shapeColor = "pink";

  fixedrect.velocityX = -5;
  fixedrect.velocityY = 5;
  movingrect.velocityX = 5;
  movingrect.velocityY = -5;
}

function draw() {
  background(255,255,255);  

//movingrect.x = World.mouseX;
//movingrect.y = World.mouseY;

if (movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2 && fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2 && fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2 && movingrect.y - fixedrect.y < movingrect.width/2 + fixedrect.width/2 ){

  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "green";

  fixedrect.velocityX = fixedrect.velocityX * (-1);
  fixedrect.velocityY = fixedrect.velocityX * (-1);
  movingrect.velocityX = movingrect.velocityX * (-1);
  movingrect.velocityY = movingrect.velocityX * (-1);

}
else{

  fixedrect.shapeColor = "lightblue";
  movingrect.shapeColor = "pink";

}



  drawSprites();
}