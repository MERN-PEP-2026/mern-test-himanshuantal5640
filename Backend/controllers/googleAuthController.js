exports.googleSuccess = (req, res) => {
  res.redirect(
    `${process.env.CLIENT_URL}/oauth-success?token=${req.user.token}`
  );
};