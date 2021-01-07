var garden , gardenImage ; 
var Tom , standingTom , walkingTom , sittingTom ;
var Jerry , standingJerry , teasingJerry , smartJerry ;

function preload() {
    //load the images here
    gardenImage = loadImage("garden.png");
    sittingTom = loadImage("tomOne.png");
    walkingTom = loadAnimation("tomTwo.png","tomThree.png");
    standingTom = loadImage("tomFour.png");
    standingJerry = loadImage("jerryOne.png");
    teasingJerry = loadAnimation("jerryTwo.png","jerryThree.png");
    smartJerry = loadImage("jerryFour.png");
    
    
}

function setup(){
    createCanvas(750,700);
    //create tom and jerry sprites here
    garden = createSprite(250, 340, 50, 50);
    garden.addImage(gardenImage);
    garden.scale = 1;

    Tom = createSprite(650, 600, 50, 50);
    Tom.addImage(sittingTom);
    Tom.scale = 0.12;

    Jerry = createSprite(80, 600, 50, 50);
    Jerry.addImage(standingJerry);
    Jerry.scale = 0.12;
    
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(Tom.x-Jerry.x < Tom.width/2-Jerry.width/2 &&
        Jerry.x-Tom.x < Tom.width/2-Jerry.width/2 &&
        Tom.x-Jerry.x < Tom.height/2-Jerry.height/2 &&
        Jerry.x-Tom.x < Tom.height/2-Jerry.height/2){
        Tom.addAnimation("standingTom",standingTom);
        Tom.changeAnimation("standingTom"); 
        Tom.velocityX = 0;
        Tom.x = 180;
        Jerry.addAnimation("smartJerry",smartJerry);
        Jerry.changeAnimation("smartJerry")
    }
   
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        Tom.velocityX = -3;
        Tom.addAnimation("walkingTom",walkingTom);
        Tom.changeAnimation("walkingTom");
        Tom.scale = 0.15;
        Jerry.addAnimation("teasingJerry",teasingJerry);
        Jerry.changeAnimation("teasingJerry");
    }
}
