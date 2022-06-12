var bow , arrow,  background;
var bowImage, arrowImage;
var balaoGroup, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage;
var backgroundImage;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png")
  blue_balloonImage = loadImage("blue_balloon0.png")
  pink_balloonImage = loadImage("pink_balloon0.png")
}



function setup() {
  createCanvas(400, 400);
  
  //criar um plano de fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5

  
  // criar um arco para a flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;

  balaoGroup = createGroup();
  
}

function draw() {
 background(0);
  // mover o chão
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //mover o arco
  bow.y = World.mouseY
  
   // soltar a flecha quando a tecla espaço for pressionada
  if (keyDown("space")) {
    createArrow();
    
    

    criarBaloes();
    
  }
  
  //mude o valor do balão aleatório para 4


function criarBaloes()
  if (frameCount % 80 === 0){
    var balao = createSprite(400,165,10,40);
    balao.velocityY = -4;
    
     var rand = Math.round(random(1,4));
     switch(rand) {
       case 1: balao.addImage(red_balloonImage);
               break;
       case 2: balao.addImage(green_balloonImage);
               break;
       case 3: balao.addImage(blue_balloonImage);
               break;
       case 4: balao.addImage(pink_balloonImage);
               break;
       default: break;
     }
     
     balao.scale = 0.5;
    obstacle.lifetime = 100
   
   balaoGroup.add(balao)
    }

// criar flechas para o arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}
if (arrow.isTouching(balaoGroup)) {
  balaoGroup.destroy
}



}