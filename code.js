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

var tania;
var car
var car2
var car3
var car4
//bound
var start = createSprite(180,120,430,10)
var end = createSprite(180,250,420,10)
var lives =0;

tania = createSprite(20,180,10,10)
tania.shapeColor=("red")

car= createSprite(100,135,12,12)
car2= createSprite(215,135,12,12)
car3= createSprite(160,235,12,12)
car4= createSprite(270,235,12,12)

car.velocityY =9;
car4.velocityY =-9;
car2.velocityY =9;
car3.velocityY =-9;
playSound("assets/category_background/progression.mp3", true);
 

function draw() {
  background("white")
  text("Lives:"+lives,200,70)
    fill("yellow")
  rect(340, 120, 60, 130);
 
  drawSprites();
  
car.bounceOff(start)
car2.bounceOff(start)
car3.bounceOff(start)
car4.bounceOff(start)
  
car.bounceOff(end)
car2.bounceOff(end)
car3.bounceOff(end)
car4.bounceOff(end)

if(keyDown("right")){
  tania.x = tania.x + 3;
}
  if(keyDown("left")){
  tania.x = tania.x -3;
}
  if(tania.isTouching(car)||tania.isTouching(car2)||
  tania.isTouching(car3)||tania.isTouching(car4)){
 tania.x=(20)
 tania.y=(180)
 lives = lives +1;
  }
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
