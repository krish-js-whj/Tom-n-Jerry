function keyPressed(){

    //For moving and changing animation write code here
      if (KeyDown("left")){
          cat.velocityX-=1;
      }   else if(keyDown("right")){
          cat.velocityX+=1;
      }
          else if(keyDown("down")){
          cat.velocityY+=1;
      }
          else if(keyDown("up")){
          cat.velocityY-=1;
      }
  }