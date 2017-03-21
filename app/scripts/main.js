console.log('\'Allo \'Allo!');
$(document).ready(function() {
  var renderer = PIXI.autoDetectRenderer(400, 400, { transparent: true });
  $('#addPixi').append(renderer.view);
  var stage = new PIXI.Container();
  var blossom = PIXI.Sprite.fromImage('images/blossom1.png');
  blossom.anchor.x = 0.5;
  blossom.anchor.y = 0.5;
  blossom.position.x = 200;
  blossom.position.y = 200;
  stage.addChild(blossom);
  var text = new PIXI.Text('Welcome', {font:'50px Arial', dropShadow: true, fill:'white'});
  text.anchor.x = 0.5;
  text.anchor.y = 0.5;
  text.position.x = 200;
  text.position.y = -25;
  stage.addChild(text);
  render();
  var count = 0;
  function render() {
    var colorMatrix = [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
    ];
    var filter = new PIXI.filters.ColorMatrixFilter();
    filter.matrix = colorMatrix;
    var newValSat = 0 + Math.sin(count);
    filter.saturate(newValSat, false);
    stage.filters = [filter];
    count += .025;
  requestAnimationFrame(render);
    blossom.rotation += .025;
    if (text.position.y < 350) {
      text.position.y += 1;
    }
    renderer.render(stage);
  }
});
