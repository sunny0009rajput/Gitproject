const mongoose = require("mongoose");
const { Schema } = mongoose;


const LessonSchema = new mongoose.Schema({
  title: String,
  videoUrl: String,
  duration: Number,
  order: Number,
  isFree: { type: Boolean, default: false }
});

// Chapter subdocument
const ChapterSchema = new mongoose.Schema({
  title: String,
  order: Number,
  lessons: [LessonSchema]
});

const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  chapters: [ChapterSchema],
}, { timestamps: true });


const CourseModel = mongoose.model("Course", CourseSchema);
module.exports = CourseModel;
