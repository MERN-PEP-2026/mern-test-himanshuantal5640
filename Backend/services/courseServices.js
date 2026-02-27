const Course = require("../models/Course");

exports.create = async (data) => {
  return await Course.create(data);
};

exports.getAll = async () => {
  return await Course.find().sort({ createdAt: -1 });
};

exports.update = async (id, data) => {
  return await Course.findByIdAndUpdate(id, data, { new: true });
};

exports.delete = async (id) => {
  return await Course.findByIdAndDelete(id);
};