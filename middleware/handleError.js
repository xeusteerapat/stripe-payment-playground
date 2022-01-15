module.exports = function handleError(err, req, res, next) {
  if (err) {
    res.send({
      status: 500,
      message: err.message,
    });
  }
  // next(err);
};
