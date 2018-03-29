c = {
  width: view.viewSize.width,
  height: view.viewSize.height,
  center: [view.viewSize.width/2, view.viewSize.height/2],
  center_pt: new Point([view.viewSize.width/2, view.viewSize.height/2])
}

function r_size (size) {
  if (typeof size === "undefined") { return view.viewSize.width; }
  return size / 100 * view.viewSize.width
}

function angle_to(p1, p2){
  return Math.atan2(p2[1] - p1[1], p2[0] - p1[0]) / 3.14 * 180
}

function rotate_to(rect, point) {
  new_angle = angle_to(rect.center, point);
  if (rect.angle == null) {
    rect.angle = 0;
  }
  rect.rotate(new_angle - rect.angle);
  rect.angle = new_angle;
}

function moveTo(path, point) {
  path.translate(point - path.center)
}

function spiral(old_obj, s){
  s.num = (typeof s.num !== 'undefined') ?  s.num : 1000;
  s.angle = (typeof s.angle !== 'undefined') ?  s.angle : 20;
  s.center = (typeof s.center !== 'undefined') ?  s.center : c.center_pt;

  for (i = 0; i < s.num; i++){
    new_obj = old_obj.clone();
    new_obj.rotate(s.angle, s.center);
    new_obj.scale(s.scale);
    new_obj.translate(move_towards_point(new_obj.position, s.center, s.translate));
    new_obj.fillColor.opacity *= s.gradient;
    old_obj = new_obj
  }
}

function move_towards_point(start_point, end_point, percent){
  return (end_point - start_point)*percent
}

function background(color) {
  return new Path.Rectangle({
    from: [0,0],
    to: [c.width, c.height],
    fillColor: color
  });
}

interactive = false;
