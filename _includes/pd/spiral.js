sp_settings = {
    scale: .99,
    translate: .02,
    gradient: .95,
    angle: 20
}

sp_rect_settings = {
  // fillColor: 'black',
  fillColor: {
    gradient: {
      stops: ['yellow', 'red']
    },
    origin: [r_size(10),r_size(10)],
    destination: [r_size(40),r_size(40)]
  },
  center: [r_size(20),r_size(30)],
  size: [r_size(15),r_size(40)],
  rotation: -15
}

spiral(new Path.Rectangle(sp_rect_settings), sp_settings);

function onMouseMove(event) {
  // console.log(event);
  if (mouse_inside){
    project.clear();
    sp_settings.scale = ((event.point.x / r_size()) * .25) + .75;
    sp_settings.translate = ((event.point.y / r_size()) * .05);
    spiral(new Path.Rectangle(sp_rect_settings), sp_settings);
  }
}

view.onMouseLeave = function (event) {
  mouse_inside = false;

}

view.onMouseEnter = function (event) {
  mouse_inside = true;
}
