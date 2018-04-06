settings = {
  num_rect: 30,
  spiral_orig: {
    num: 150,
    angle: 15,
    scale: .97,
    translate: .02
  },
  spiral: {
    num: 150,
    angle: 15,
    scale: .97,
    translate: .02
  }
}


background = {
  from: [0,0],
  to: [r_size(100), r_size(100)],
  fillColor: 'black'
};

new Path.Rectangle(background);

function drawLines() {
  rectangles = [];

  rectangles.push(new Path.Rectangle({
    fillColor: '666',
    point: [0, c.height/2],
    size: [c.width, c.height/2]
  }));
  for (x=0; x < settings.num_rect; x++){
    rectangles.push(new Path.Rectangle({
      fillColor: 'white',
      point: [0, c.height/2 + (c.height / (x + 2))],
      size: [c.width, (settings.num_rect - x) / 20]
    }));
  }

  return new Group(rectangles)
}

lines = drawLines()
spiral(lines, settings.spiral);

if (interactive) {
  view.onMouseMove = function (event) {
    if (mouse_inside){
      project.clear();
      new Path.Rectangle(background);
      settings.spiral.scale = ((event.point.x / r_size()) * .1) + .9;
      settings.spiral.translate = ((event.point.y / r_size()) * .1)-0.01;

      spiral(drawLines(), settings.spiral);
    }
  }

  view.onFrame = function (event) {
    // Nothing
  }

  view.onMouseLeave = function (event) {
    mouse_inside = false;
    settings.spiral.scale = settings.spiral_orig.scale
    settings.spiral.translate = settings.spiral_orig.translate

    project.clear();
    new Path.Rectangle(background);

    spiral(drawLines(), settings.spiral);
  }

  view.onMouseEnter = function (event) {
    mouse_inside = true;
  }
}
