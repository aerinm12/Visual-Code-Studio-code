function setup() {
  createCanvas(800,400);
  square = createSprite(400, 200, 50, 50);
  rectangle = createSprite(200, 139, 40, 60);
  square.shapeColor = "blue";
  rectangle.shapeColor = "green";
}

function draw() {
  background("lightblue");  
  rectangle.x = mouseX;
  rectangle.y = mouseY;
  if (rectangle.x-square.x<square.width/2+rectangle.width/2
    && square.x-rectangle.x<square.width/2+rectangle.width/2
    && rectangle.y-square.y<square.height/2+rectangle.height/2
    && square.y-rectangle.y<square.height/2+rectangle.height/2){
      square.shapeColor = "red";
      rectangle.shapeColor = "purple";
    }
    else {
      square.shapeColor = "blue";
      rectangle.shapeColor = "green";
    }
  drawSprites();
}