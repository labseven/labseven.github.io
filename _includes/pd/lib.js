c = {
  width: view.viewSize.width,
  height: view.viewSize.height,
  center: [view.viewSize.width/2, view.viewSize.height/2],
  center_pt: new Point([view.viewSize.width/2, view.viewSize.height/2])
}

function r_size (size) {
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


console.log(c);
