module.exports = function isAuthenticated(req, res, next) {
  if (req.session.loggedin) {
    return next();
  }
  res.redirect("/");
}

