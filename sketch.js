
function preload() {
    //load the images here
    mouseA=loadAnimation("mouse1.png"),
    mouseB=loadAnimation("mouse2.png","mouse3.png");
    mouseC=loadAnimation("mouse4.png");
    catA=loadAnimation("cat1.png"),
    catB=loadAnimation("cat2.png","cat3.png");
    catC=loadAnimation("cat4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(random(500,1000),random(200,500),10,10)
    mouse=createSprite(cat.x-random(100,300),random(200,500),10,10)
    cat.addAnimation("firstImg",catA);
    mouse.addAnimation("FirstImg",mouseA);
  mouse.addAnimation("MmiddleImg",mouseB);
    cat.addAnimation("CmiddleImg",catB);
    cat.addAnimation("ClastImg",catC)
    mouse.addAnimation("MlastImg",mouseC);
  cat.depth=mouse.depth+1
  cat.debug=true;
  mouse.debug=true;
}

function draw() {
    background(255);
    //Write condition here to evalute if tom and jerry collide
keyPressed()
    drawSprites();
  if (cat.velocityX!=0 || cat.velocityY!=0){
        cat.changeAnimation("CmiddleImg")
        mouse.changeAnimation("MmiddleImg")

    }
  
    if (cat.x - mouse.x < mouse.width/2 + cat.width/2
        && mouse.x - cat.x < mouse.width/2 + cat.width/2 
        && cat.y - mouse.y < mouse.height/2 + cat.height/2
        && mouse.y - cat.y < mouse.height/2 + cat.height/2) {
       cat.changeAnimation("ClastImg")
        mouse.changeAnimation("MlastImg")
        cat.velocityY=0
        cat.velocityX=0;
    // background("red")
       }
     
 function keyPressed(){

        //For moving and changing animation write code here
        if (keyDown("left")){
              cat.velocityX-=0.1;
          }   else if(keyDown("right")){
              cat.velocityX+=0.1;
          }
              else if(keyDown("down")){
              cat.velocityY+=0.1;
          }
              else if(keyDown("up")){
              cat.velocityY-=0.1;
          }
      }}