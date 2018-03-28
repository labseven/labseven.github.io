rect_size = [r_size(5), r_size(1)];
num_rect = 10;
line_grid_rectangles = [];

// rect_colors = ['white', 'blue'];
for (x = 0; x < num_rect; x++){
  for (y = 0; y < num_rect; y++){
    // console.log("making rect ", i, " center ", 10 * num_rect * i);
    new_rect = new Path.Rectangle({
      center: [r_size(10) * x + r_size(5), y * r_size(10) + r_size(5)],
      size: rect_size,
      fillColor: 'black'
    });
    rotate_to(new_rect, c.center)
    line_grid_rectangles.push(new_rect);
  }
}

// function onMouseEnter() {
//   for (i = 0; i < rectangles.length; i++){
//     rotate_to(rectangles[i], [event.point.x, event.point.y]);
//   }
// }
if (interactive) {
  view.onMouseMove = function (event) {
    if (mouse_inside){
      for (i = 0; i < line_grid_rectangles.length; i++){
        rotate_to(line_grid_rectangles[i], [event.point.x, event.point.y]);
      }
    }
  }

  view.onMouseLeave = function (event) {
    mouse_inside = false;
    for (i = 0; i < line_grid_rectangles.length; i++){
      rotate_to(line_grid_rectangles[i], c.center);
    }
  }

  view.onMouseEnter = function (event) {
    mouse_inside = true;
  }
}
