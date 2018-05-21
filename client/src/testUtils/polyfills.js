const requestAnimationFrame = global.requestAnimationFrame(cb =>
  cb.setTimeout(() => {
    cb();
  }, 0)
);

export default requestAnimationFrame;
