const express = require("express");

const Course = require("../models/Course"); 

const router = express.Router();

// ==================== GET: Get all courses ====================
router.get("/courses", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ==================== GET: Get single course ====================
router.get("/courses/:courseId", async (req, res) => {
  try {
    const course = await Course.findById(req.params.courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ==================== POST: Create a course ====================
router.post("/courses", async (req, res) => {
  const { title, description } = req.body;
  try {
    const course = new Course({ title, description, chapters: [] });
    await course.save();
    res.status(201).json({ message: "Course created", course });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ==================== PUT: Update a course ====================
router.put("/courses/:courseId", async (req, res) => {
  try {
    const course = await Course.findById(req.params.courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });

    course.title = req.body.title ?? course.title;
    course.description = req.body.description ?? course.description;

    await course.save();
    res.json({ message: "Course updated", course });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ==================== DELETE: Delete a course ====================
router.delete("/courses/:courseId", async (req, res) => {
  try {
    const course = await Course.findById(req.params.courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });

    await course.remove();
    res.json({ message: "Course deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ==================== POST: Add a chapter ====================
router.post("/courses/:courseId/chapters", async (req, res) => {
  const { title, order } = req.body;
  try {
    const course = await Course.findById(req.params.courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });

    const newChapter = { title, order, lessons: [] };
    course.chapters.push(newChapter);
    await course.save();
    res.status(201).json({ message: "Chapter added", chapter: newChapter });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ==================== PUT: Update a chapter ====================
router.put("/courses/:courseId/chapters/:chapterId", async (req, res) => {
  try {
    const course = await Course.findById(req.params.courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });

    const chapter = course.chapters.id(req.params.chapterId);
    if (!chapter) return res.status(404).json({ message: "Chapter not found" });

    chapter.title = req.body.title ?? chapter.title;
    chapter.order = req.body.order ?? chapter.order;

    await course.save();
    res.json({ message: "Chapter updated", chapter });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ==================== DELETE: Delete a chapter ====================
router.delete("/courses/:courseId/chapters/:chapterId", async (req, res) => {
  try {
    const course = await Course.findById(req.params.courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });

    const chapter = course.chapters.id(req.params.chapterId);
    if (!chapter) return res.status(404).json({ message: "Chapter not found" });

    chapter.remove();
    await course.save();
    res.json({ message: "Chapter deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ==================== POST: Add a lesson ====================
router.post("/courses/:courseId/chapters/:chapterId/lessons", async (req, res) => {
  const { title, videoUrl, duration, order, isFree } = req.body;
  try {
    const course = await Course.findById(req.params.courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });

    const chapter = course.chapters.id(req.params.chapterId);
    if (!chapter) return res.status(404).json({ message: "Chapter not found" });

    const newLesson = { title, videoUrl, duration, order, isFree };
    chapter.lessons.push(newLesson);
    await course.save();
    res.status(201).json({ message: "Lesson added", lesson: newLesson });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ==================== PUT: Update a lesson ====================
router.put("/courses/:courseId/chapters/:chapterId/lessons/:lessonId", async (req, res) => {
  try {
    const course = await Course.findById(req.params.courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });

    const chapter = course.chapters.id(req.params.chapterId);
    if (!chapter) return res.status(404).json({ message: "Chapter not found" });

    const lesson = chapter.lessons.id(req.params.lessonId);
    if (!lesson) return res.status(404).json({ message: "Lesson not found" });

    lesson.title = req.body.title ?? lesson.title;
    lesson.videoUrl = req.body.videoUrl ?? lesson.videoUrl;
    lesson.duration = req.body.duration ?? lesson.duration;
    lesson.order = req.body.order ?? lesson.order;
    lesson.isFree = req.body.isFree ?? lesson.isFree;

    await course.save();
    res.json({ message: "Lesson updated", lesson });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ==================== DELETE: Delete a lesson ====================
// ==================== DELETE: Delete a lesson ====================
router.delete("/courses/:courseId/chapters/:chapterId/lessons/:lessonId", async (req, res) => {
  try {
    const course = await Course.findById(req.params.courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });

    const chapter = course.chapters.id(req.params.chapterId);
    if (!chapter) return res.status(404).json({ message: "Chapter not found" });

    const lesson = chapter.lessons.id(req.params.lessonId);
    if (!lesson) return res.status(404).json({ message: "Lesson not found" });

    // Use pull to remove the lesson
    chapter.lessons.pull(lesson._id);

    await course.save();
    res.json({ message: "Lesson deleted" });
  } catch (err) {
    console.error("Error deleting lesson:", err);
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
