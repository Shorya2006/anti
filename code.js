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

function draw() {
fill("red");
textSize(100);
text("NOPE",50,200);
  
  if(keyDown("s")){
    fill("blue");
    textSize(100);
    text("AN",50,280);
  }
  
  if(keyDown("h")){
    fill("blue");
    textSize(100);
    text("TI",190,280);
  }
  
  if(keyDown("o")){
    fill("blue");
    textSize(100);
    text("CH",50,360);
  }
  
  if(keyDown("r")){
    fill("blue");
    textSize(100);
    text("IT",200,360);
  }
  
  if(keyDown("y")){
    fill("blue");
    textSize(100);
    text("T",290,360);
  }
  
  if(keyDown("a")){
    fill("blue");
    textSize(100);
    text("I",350,360);
  }
  
  if(keyDown("g")){
    fill("green");
    textSize(100);
    text("POPLI",50,100);
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
