canvas_size = c.width;
canvas_center = new Point(canvas_size/2, canvas_size/2);
cb_num_rects = 100;

hue = Math.random()*360;

cur_color = { hue: hue, saturation: 1, brightness: 1 };
size_step = canvas_size / cb_num_rects;

cb_rectangles = [];
for (i = 0; i < cb_num_rects; i++) {
  cb_rectangles.push(new Path.Rectangle({
    center: canvas_center,
    size: canvas_size - (size_step * i),
    fillColor: new Color(cur_color)
  }))

  cur_color.brightness = 1 - (1/cb_num_rects) * i;
}

function moveRectangleRow(end_point, rect_hue) {
  cur_color = { hue: rect_hue, saturation: 1, brightness: 1 };
  size_step = canvas_size / cb_num_rects;
  pt_derivative = (end_point - canvas_center)/cb_num_rects;

  for (i = 0; i < cb_rectangles.length; i++) {
    cb_rectangles[i].position = canvas_center + (pt_derivative * i);
    cb_rectangles[i].size = canvas_size - (size_step * i);
    cb_rectangles[i].fillColor = new Color(cur_color);

    cur_color.brightness = 1 - (1/cb_num_rects) * i;
  }
}

moveRectangleRow(canvas_center, hue);

if (interactive) {
  view.onMouseMove = function (event) {
    if(mouse_inside){ moveRectangleRow(event.point, hue); }
  };

  view.onMouseDown = function (event) {
    hue = Math.random()*360;
    moveRectangleRow(event.point, hue);
  };

  view.onMouseLeave = function (event) {
    mouse_inside = false;
    moveRectangleRow(canvas_center, hue);
  }

  view.onMouseEnter = function (event) {
    console.log("mouseEntercolor");
    mouse_inside = true;
  }
}
