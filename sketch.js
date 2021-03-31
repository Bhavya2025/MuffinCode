



var player,ground,ground2;

var delay = 0.1;
var IsFalling;

var FollowChange = 5;

var Gravity = 1.5;
var  Friction = 0.7;

var JumpSpeed = -15;

var SideSpeed = 5;

var multiplier = -1

function setup() {
createCanvas(screen.width,screen.height);


player = createSprite(1920/2,1080/2,50,50);
player.shapeColor = "red";
player.setCollider("rectangle",0,0,50,50);


ground = createSprite(1920/2,1080/1.2,1920,200);
ground.shapeColor = "green";



ground2 = createSprite(1920/4,1080/2,400,200);
ground2.shapeColor = "blue";






}




function isTouching(O1,O2)
{
  if (O1.x - O2.x < O2.width/2 + O1.width/2
    && O2.x - O1.x < O2.width/2 + O1.width/2
    && O1.y - O2.y < O2.height/2 + O1.height/2
    && O2.y - O1.y <O2.height/2 + O1.height/2)
  {
   return true;
  }
 else 
 {
  return false;
 }
}

// equation used is 
// (groundY)-((playerH/2)+(groundH/2))
//


function pushBack()
{

  if(player.velocityY>0)
  {
    multiplier = -1;
  }

  else
  {
    multiplier = 1;
  }


  if(isTouching(player,ground))
  {
    player.y = (ground.y)+((player.height/2)+(ground.height/2))*multiplier;
    
    player.setVelocity(player.velocityX,0);

  
  }


  if(isTouching(player,ground2))
  {
    player.y = (ground2.y)+((player.height/2)+(ground2.height/2))*multiplier;
    
    player.setVelocity(player.velocityX,0);
  
  }
  
}



function draw() 
{
 
  background(135, 206, 235); 
  
 
  if(keyIsDown(68)) //D
  {
    player.setVelocity(SideSpeed*1,player.velocityY);
  }
  else if(keyIsDown(65)) //A
  {
    player.setVelocity(SideSpeed*-1,player.velocityY);
    
  }
  if( !(keyIsDown(65) || keyIsDown(68)) )
  {
    player.setVelocity(player.velocityX*Friction,player.velocityY);
  }

  // Gravity
  player.setVelocity(player.velocityX,player.velocityY+1*Gravity);




  
  pushBack();
  
  if(true)
  {
    //Jump
    if(keyIsDown(87))
    {
      //player.y = player.y-0.1
      player.setVelocity(player.velocity.x,JumpSpeed);
    }
    
  }

  textSize(25);
  text( player.velocityY,1000,1080/10);
  fill(0, 102, 153);

  drawSprites();

}





// function pushBack()
// {
//   if(player.velocityY>0)
//   {
//     if(isTouching(player,ground))
//     {
//       player.y = (ground.y)-((player.height/2)+(ground.height/2))
      
//       player.setVelocity(player.velocityX,0);
//       return;
    
//     }
  
//     if(isTouching(player,ground2))
//     {
//       player.y = (ground2.y)-((player.height/2)+(ground2.height/2))
      
//       player.setVelocity(player.velocityX,0);
//       return;
    
//     }
//   }
//   else
//   {
//     if(isTouching(player,ground))
//     {
//       player.y = (ground.y)-((player.height/2)+(ground.height/2))
      
//       player.setVelocity(player.velocityX,0);
//       return;
  
    
//     }
  
//     if(isTouching(player,ground2))
//     {
//       player.y = (ground2.y)+((player.height/2)+(ground2.height/2))
      
//       player.setVelocity(player.velocityX,0);
//       return;
    
//     }
//   }
// }
