const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
const courseController = require("../controllers/courseController");

router.post("/", protect, courseController.createCourse);

router.get("/", protect, courseController.getCourses);

router.put("/:id", protect, courseController.updateCourse);

router.delete("/:id", protect, courseController.deleteCourse);

module.exports = router;