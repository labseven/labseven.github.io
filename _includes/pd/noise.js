noise.seed(Math.random());

var ns_hue = Math.random() * 360;
var ns_xScale = 0.02;
var ns_yScale = 0.05;

var t = 0;

background('black');
drawMountains(0);

if(interactive){
  view.onFrame = function () {
    project.clear();
    background('black');
    drawMountains(t);
    t++;
  }
  view.onClick = function () {
    ns_hue = Math.random() * 360;
  }

  view.onMouseMove = function (ev) {
    if(mouse_inside){
      ns_xScale = mouse_loc(ev).x * 0.05;
      ns_yScale = mouse_loc(ev).y * 0.10;

      console.log(ns_xScale, ns_yScale);
    }
  }

  view.onMouseLeave = function (event) {
    mouse_inside = false;
    ns_xScale = 0.02;
    ns_yScale = 0.05;
  }

  view.onMouseEnter = function (event) {
    mouse_inside = true;
  }
}

function drawMountains (t) {
  var ns_paths = [];
  for (y = 0; y < 5; y++){
    ns_paths.push(new Path());
    for (x = -1; x < c.width+1; x++){
      ns_paths[y].add(new Point(x, noise.perlin2(x * ns_xScale, y * ns_yScale + t/400)*c.height/2 + c.height*y/20 + c.height/2));
    }
    ns_paths[y].add(new Point(c.width, c.height + 1));
    ns_paths[y].add(new Point(-1, c.height + 1));
    ns_paths[y].closed = true;
    ns_paths[y].strokeColor = 'white';
    ns_paths[y].fillColor = { hue: ns_hue, saturation: 1, brightness: .5, alpha: 0.2 };
  }
}
