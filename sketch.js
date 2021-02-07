
function preload() {
    //load the images here
    catA=loadAnimation("cat1.png","cat2.png","cat3.png");
    mouseA=loadAnimation("mouse1.pmg","mouse2.png","mouse3.png");
    catB=loadAnimation("cat4.png");
    mouseB=loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(random(500,1000),random(200,500),10,10)
    mouse=createSprite(cat.x-random(100,300),random(200,500),10,10)
    cat.addAnimation("firstImg",catB);
    cat,addAnimation("firstImg")
    mouse.addAnimation("FirstImg",mouseB);
    mouse.addAnimation("FirstImg")
}

function draw() {
    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();

    if (cat.x - mouse.x < mouse.width/2 + cat.width/2 && mouse.x - cat.x < mouse.width/2 + cat.width/2 && cat.y - mouse.y < mouse.height/2 + cat.height/2 && mouse.y - cat.y < mouse.height/2 + cat.height/2) {
        cat.addAnimation("ClastImg",catB);
        cat.addAnimation("ClastImg");
        mouse.addAnimation("MlastImg",catB)
        mouse.addAnimation("MlastImg")
       }
  
keyPressed()
}