const Course = require("../models/Course");

exports.createCourse = async (data) => {
  return await Course.create(data);
};

exports.getCourses = async () => {
  return await Course.find().sort({ createdAt: -1 });
};

exports.updateCourse = async (id, data) => {
  return await Course.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteCourse = async (id) => {
  return await Course.findByIdAndDelete(id);
};