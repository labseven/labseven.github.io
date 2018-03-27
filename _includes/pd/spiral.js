sp_settings = {
    scale: .99,
    translate: .02,
    gradient: .95,
    angle: 20
}

sp_rect = new Path.Rectangle({
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
});

spiral(sp_rect, sp_settings);
