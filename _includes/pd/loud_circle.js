tau = Math.PI * 2;
ls_num_lines = 50;
ls_r = r_size(30);
ls_length = r_size(100);
randomize = false;

ls_lines = []

draw_circle();

function draw_circle(){
  for (i = 0; i < tau; i += tau/ls_num_lines) {
    tangent_line(c.center, i, ls_r, ls_length, randomize);
  }
}

function tangent_line(center, angle, radius, length, randomize) {
  var point = new Point([Math.cos(angle) * radius, Math.sin(angle) * radius]);
  var tangent_point = new Point([Math.sin(angle) * length, Math.cos(angle) * length * -1]);
  if (randomize) { var randomize_point = new Point(Math.random() * r_size(2) - r_size(2), Math.random() * r_size(2) - r_size(2)); }
  ls_lines.push(new Path.Line({
    from: point + tangent_point + center + randomize_point,
    to: point - tangent_point + center + randomize_point,
    strokeColor: 'black'
  }));
}


if (interactive) {
  view.onMouseMove = function (ev) {
    if(mouse_inside){
      project.clear();
      ls_r = c.center_pt.getDistance(ev.point);
      draw_circle();
    }
  };

  view.onMouseDown = function (ev) {
    randomize = !randomize;
    project.clear();
    draw_circle();
  };

  view.onFrame = function (ev) {
    if (randomize && ev.count % 3 === 0) {
      project.clear();
      draw_circle();
    }
  }

  view.onMouseLeave = function (ev) {
    mouse_inside = false;
    project.clear();
    ls_r = r_size(30);
    draw_circle();
  }

  view.onMouseEnter = function (ev) {
    mouse_inside = true;
  }
}
