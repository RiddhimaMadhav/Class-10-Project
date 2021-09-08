var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var box1 = createSprite(25,75,50,50);
box1.shapeColor='red';
var box2 = createSprite(75,75,50,50);
box2.shapeColor='blue';
var box3 = createSprite(125,75,50,50);
box3.shapeColor='red';
var box4 = createSprite(175,75,50,50);
box4.shapeColor='blue';
var box5 = createSprite(225,75,50,50);
box5.shapeColor='red';
var box6 = createSprite(275,75,50,50);
box6.shapeColor='blue';
var box7 = createSprite(325,75,50,50);
box7.shapeColor='red';
var box8 = createSprite(375,75,50,50);
box8.shapeColor='blue';

var box9 = createSprite(25,120,50,50);
box9.shapeColor='blue';
var box10 = createSprite(75,120,50,50);
box10.shapeColor='red';
var box11 = createSprite(125,120,50,50);
box11.shapeColor='blue';
var box12 = createSprite(175,120,50,50);
box12.shapeColor='red';
var box13 = createSprite(225,120,50,50);
box13.shapeColor='blue';
var box14 = createSprite(275,120,50,50);
box14.shapeColor='red';
var box15 = createSprite(325,120,50,50);
box15.shapeColor='blue';
var box16 = createSprite(375,120,50,50);
box16.shapeColor='red';

var score = 0;

var paddle = createSprite(200,390,110,15);
paddle.shapeColor = 'purple';
var ball = createSprite(200,220,15,15);
ball.shapeColor = 'orange';

var gameState = "serve";


function draw() {
  background("white");
  
  stroke("red");
  textSize(20);
  text("Score : " +score,300,20);
  
  
  
 
  //if (keyDown(LEFT_ARROW)) {
   // paddle.x = paddle.x -5;
  //}
 //if (keyDown(RIGHT_ARROW)) {
  //  paddle.x = paddle.x +4;
  //}
   
  
 ball.bounceOff(paddle);
 
 
  createEdgeSprites();
  ball.bounceOff(topEdge);
   ball.bounceOff(leftEdge);
    ball.bounceOff(rightEdge);
    //paddle.bounceOff(leftEdge);
    //paddle.bounceOff(rightEdge);
  if(ball.isTouching(box1))
  {
    box1.destroy();
    score = score+10;
  }

 if(ball.bounceOff(box2))
  {
    box2.destroy();
     score = score+10;
  }
   if(ball.bounceOff(box3))
  {
    box3.destroy();
     score = score+10;
  }        
     if(ball.bounceOff(box4))
  {
    box4.destroy();
     score = score+10;
  }  
  
     if(ball.bounceOff(box5))
  {
    box5.destroy();
     score = score+10;
  }  
  
     if(ball.bounceOff(box6))
  {
    box6.destroy();
     score = score+10;
  }  
     if(ball.bounceOff(box7))
  {
    box7.destroy();
     score = score+10;
  }  
     if(ball.bounceOff(box8))
  {
    box8.destroy();
     score = score+10;
  }  
     if(ball.bounceOff(box9))
  {
    box9.destroy();
     score = score+10;
  }  
     if(ball.bounceOff(box10))
  {
    box10.destroy();
     score = score+10;
  }  
     if(ball.bounceOff(box11))
  {
    box11.destroy();
     score = score+10;
  }
     if(ball.bounceOff(box12))
  {
    box12.destroy();
     score = score+10;
  }  
     if(ball.bounceOff(box13))
  {
    box13.destroy();
     score = score+10;
  }  
     if(ball.bounceOff(box14))
  {
    box14.destroy();
     score = score+10;
  }  
     if(ball.bounceOff(box15))
  {
    box15.destroy();
     score = score+10;
  }  
     if(ball.bounceOff(box16))
  {
    box16.destroy();
     score = score+10;
  }  
  
  if (gameState==="serve"){
  textSize(25);
  text("Welcome!Press enter to start",30,200);
  if (keyDown("space")) {
    ball.velocityX = 6;
    ball.velocityY = 8;
 gameState = "play";
  }
}
if (gameState === "play") {
  paddle.x=World.mouseX;
  if(ball.isTouching(bottomEdge)||score===160)
  gameState="end";
}
if (gameState==="end") {
  ball.velocityX=0;
  ball.velocityY=0;
  ball.x=200;
  ball.y=200;
  
  textSize(25);
  text("GameOver",100,200);
}

if (keyWentDown("r")) {
  gameState="serve";
}


drawSprites();
}




// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
