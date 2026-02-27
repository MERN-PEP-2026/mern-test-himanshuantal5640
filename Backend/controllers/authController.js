const authService = require("../services/authServices");

exports.register = async (req, res, next) => {
  try {
    const user = await authService.register(
      req.body.name,
      req.body.email,
      req.body.password
    );
    res.json(user);
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const token = await authService.login(
      req.body.email,
      req.body.password
    );
    res.json({ token });
  } catch (err) {
    next(err);
  }
};

exports.resetPassword = async (req, res, next) => {
  try {
    const message = await authService.resetPassword(
      req.body.email,
      req.body.newPassword
    );
    res.json({ message });
  } catch (err) {
    next(err);
  }
};