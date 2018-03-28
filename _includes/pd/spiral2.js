sp_settings = {
    scale: .99,
    translate: .02,
    gradient: .95,
    angle: 20,
    cur_angle: 0
}

sp_rect_settings = {
  // fillColor: 'black',
  fillColor: {
    gradient: {
      stops: ['yellow', 'green', 'red']
    },
    origin: [r_size(-20),r_size(-20)],
    destination: [r_size(20),r_size(20)]
  },
  center: [r_size(-10),r_size(-10)],
  radius: r_size(20),
  rotation: -15
}

new Path.Circle(sp_rect_settings);
sp_background = {
  from: [0,0],
  to: [r_size(100), r_size(100)],
  fillColor: 'black'
};

new Path.Rectangle(sp_background);
spiral(new Path.Circle(sp_rect_settings), sp_settings);

if (interactive) {
  view.onMouseMove = function (event) {
    if (mouse_inside){
      project.clear();
      new Path.Rectangle(sp_background);
      sp_settings.scale = ((event.point.x / r_size()) * .08) + .92;
      sp_settings.translate = ((event.point.y / r_size()) * .05)-0.005;
      // sp_settings.cur_angle += 1;
      sp_circle = new Path.Circle(sp_rect_settings).rotate(sp_settings.cur_angle, c.center);
      spiral(sp_circle, sp_settings);
    }
  }

  view.onFrame = function (event) {
    project.clear();
    new Path.Rectangle(sp_background);
    sp_settings.cur_angle += 1;
    sp_circle = new Path.Circle(sp_rect_settings).rotate(sp_settings.cur_angle, c.center);
    spiral(sp_circle, sp_settings);
  }

  view.onMouseLeave = function (event) {
    mouse_inside = false;
  }

  view.onMouseEnter = function (event) {
    mouse_inside = true;
  }
}
