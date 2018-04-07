var settings = {
  grid: {
    x: 20,
    y: 20,
    margin: 1
  }
};



var background = {
  from: [0,0],
  to: [r_size(100), r_size(100)],
  fillColor: 'black'
};

new Path.Rectangle(background);

function drawCell(c) {
  if (typeof c.s == 'undefined'){
    radius = Math.min(c.h, c.w) / 2;
    fillColor = 'white';
  }
  else {
    radius = Math.min(r_size(2), r_size(10) / ((c.pos - c.s.mouse).length) * Math.min(c.w, c.h));
    fillColor = 'white';
    // console.log(c.s.mouse);
    // console.log(c.i, radius, c.pos - c.s.mouse);
  }


  var rectangles = [];

  rectangles.push(new Path.Circle({
    center: [c.h/2, c.w/2],
    radius: radius,
    fillColor: fillColor
  }));

  return new Group(rectangles);
}

function drawGrid(cellFun, s, cellS){
  w = (c.width / s.x) - r_size(s.margin) * 2;
  h = (c.height / s.y) - r_size(s.margin) * 2;
  margin = r_size(s.margin);

  cells = [];

  for (x = 0; x < s.x; x++){
    for (y = 0; y < s.y; y++){
      cellConfig = {
        x: x,
        y: y,
        h: h,
        w: w,
        i: y + x*s.y,
        s: cellS,
        pos: new Point((w + margin*2) * x + margin, (h + margin*2) * y + margin)
      };

      cell = cellFun(cellConfig);
      cell.translate([(w + margin*2) * x + margin, (h + margin*2) * y + margin]);
      cells.push(cell);
    }
  }

  return cells;
}

drawGrid(drawCell, settings.grid);

if (interactive) {
  view.onMouseMove = function (event) {
    if (mouse_inside){
      project.clear();
      new Path.Rectangle(background);

      cellS = {
        mouse: new Point(event.point)
      };
      drawGrid(drawCell, settings.grid, cellS);
    }
  };

  view.onFrame = function (event) {
    // Nothing
  };

  view.onMouseLeave = function (event) {
    mouse_inside = false;

    project.clear();
    new Path.Rectangle(background);

    drawGrid(drawCell, settings.grid);
  };

  view.onMouseEnter = function (event) {
    mouse_inside = true;
  };

  // view.onClick = function (event) {
  //   render_bg = !render_bg;
  //
  //   project.clear();
  //   new Path.Rectangle(background);
  // };
}
