noise.seed(Math.random());

var ns_hue = Math.random() * 360;
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
}

function drawMountains (t) {
  var ns_paths = [];
  for (y = 0; y < 5; y++){
    ns_paths.push(new Path());
    for (x = -1; x < c.width+1; x++){
      ns_paths[y].add(new Point(x, noise.perlin2(x/50, -10+y/20 + t/400)*c.height/2 + c.height*y/20 + c.height/2));
    }
    ns_paths[y].add(new Point(c.width, c.height + 1));
    ns_paths[y].add(new Point(-1, c.height + 1));
    ns_paths[y].closed = true;
    ns_paths[y].strokeColor = 'white';
    ns_paths[y].fillColor = { hue: ns_hue, saturation: 1, brightness: .5, alpha: 0.2 };
  }
}
