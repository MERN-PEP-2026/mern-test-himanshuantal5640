const courseService = require("../services/courseServices");

exports.createCourse = async (req, res, next) => {
  try {
    const data = await courseService.createCourse(req.body);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.getCourses = async (req, res, next) => {
  try {
    const data = await courseService.getCourses();
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.updateCourse = async (req, res, next) => {
  try {
    const data = await courseService.updateCourse(
      req.params.id,
      req.body
    );
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.deleteCourse = async (req, res, next) => {
  try {
    await courseService.deleteCourse(req.params.id);
    res.json({ message: "Course Deleted Successfully" });
  } catch (err) {
    next(err);
  }
};