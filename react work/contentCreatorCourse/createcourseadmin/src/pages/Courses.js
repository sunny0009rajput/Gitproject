import React, { useEffect, useState } from "react";
import { Edit, Trash2 } from "lucide-react";
import axios from "axios";

const Courses = () => {
  const apiurl = process.env.REACT_APP_BACKEND_URL;
  const [courses, setCourses] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [newCourse, setNewCourse] = useState({ title: "", description: "" });
  const [chapterData, setChapterData] = useState({ courseId: "", title: "" });
  const [lessonData, setLessonData] = useState({
    courseId: "",
    chapterId: "",
    title: "",
    videoUrl: "",
    duration: 0,
    isFree: false,
  });
  const [editing, setEditing] = useState({ type: "", id: "" });

  // Fetch all courses
  const fetchCourses = async () => {
    try {
      const res = await axios.get(`${apiurl}/courses`);
      setCourses(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // Fetch chapters for a course
  const fetchChapters = (courseId) => {
    const course = courses.find((c) => c._id === courseId);
    setChapters(course?.chapters || []);
  };

  // Auto fetch video duration
  const fetchVideoDuration = (url) => {
    return new Promise((resolve) => {
      const video = document.createElement("video");
      video.src = url;
      video.addEventListener("loadedmetadata", () => {
        resolve(Math.round(video.duration));
      });
    });
  };

  // ------------------ Course Functions ------------------
  const handleAddCourse = async () => {
    try {
      const order = courses.length + 1;
      await axios.post(`${apiurl}/courses`, { ...newCourse, order });
      setNewCourse({ title: "", description: "" });
      fetchCourses();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditCourse = (course) => {
    setNewCourse({ title: course.title, description: course.description });
    setEditing({ type: "course", id: course._id });
  };

  const handleUpdateCourse = async () => {
    try {
      await axios.put(`${apiurl}/courses/${editing.id}`, newCourse);
      setNewCourse({ title: "", description: "" });
      setEditing({ type: "", id: "" });
      fetchCourses();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteCourse = async (courseId) => {
    try {
      await axios.delete(`${apiurl}/courses/${courseId}`);
      fetchCourses();
    } catch (err) {
      console.error(err);
    }
  };

  // ------------------ Chapter Functions ------------------
  const handleAddChapter = async () => {
    try {
      const order = chapters.length + 1;
      await axios.post(`${apiurl}/courses/${chapterData.courseId}/chapters`, {
        title: chapterData.title,
        order,
      });
      setChapterData({ courseId: "", title: "" });
      fetchCourses();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditChapter = (courseId, chapter) => {
    setChapterData({ courseId, title: chapter.title });
    setEditing({ type: "chapter", id: chapter._id });
  };

  const handleUpdateChapter = async () => {
    try {
      await axios.put(
        `${apiurl}/courses/${chapterData.courseId}/chapters/${editing.id}`,
        { title: chapterData.title }
      );
      setChapterData({ courseId: "", title: "" });
      setEditing({ type: "", id: "" });
      fetchCourses();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteChapter = async (courseId, chapterId) => {
    try {
      await axios.delete(`${apiurl}/courses/${courseId}/chapters/${chapterId}`);
      fetchCourses();
    } catch (err) {
      console.error(err);
    }
  };

  // ------------------ Lesson Functions ------------------
  const handleAddLesson = async () => {
    try {
      console.log("Adding lesson...");
      console.log("Lesson Data:", lessonData);

      if (!lessonData.courseId || !lessonData.chapterId) {
        console.log("Course or Chapter not selected!");
        alert("Please select course and chapter!");
        return;
      }

      const chapter = chapters.find((ch) => ch._id === lessonData.chapterId);
      if (!chapter) {
        console.log("Chapter not found in chapters array!", chapters);
        return;
      }

      const order = (chapter?.lessons?.length || 0) + 1;
      console.log("Calculated order for lesson:", order);

      let duration = 0;
      if (lessonData.videoUrl && lessonData.videoUrl.endsWith(".mp4")) {
        console.log("Fetching video duration for URL:", lessonData.videoUrl);
        duration = await fetchVideoDuration(lessonData.videoUrl);
        console.log("Video duration fetched:", duration);
      } else {
        console.log("Skipping duration for non-MP4 URL");
      }

      const postData = { ...lessonData, order, duration };
      console.log("Data to send to API:", postData);

      await axios.post(
        `${apiurl}/courses/${lessonData.courseId}/chapters/${lessonData.chapterId}/lessons`,
        postData
      );

      console.log("Lesson added successfully!");

      // Reset lesson data
      setLessonData({
        courseId: "",
        chapterId: "",
        title: "",
        videoUrl: "",
        duration: 0,
        isFree: false,
      });
      setChapters([]);
      fetchCourses();
    } catch (err) {
      console.error("Error adding lesson:", err);
    }
  };

  const handleEditLesson = (courseId, chapterId, lesson) => {
    setLessonData({ ...lesson, courseId, chapterId });
    const course = courses.find((c) => c._id === courseId);
    setChapters(course?.chapters || []); // fetch chapters for edit dropdown
    setEditing({ type: "lesson", id: lesson._id });
  };

  const handleUpdateLesson = async () => {
    try {
      await axios.put(
        `${apiurl}/courses/${lessonData.courseId}/chapters/${lessonData.chapterId}/lessons/${editing.id}`,
        lessonData
      );
      setLessonData({
        courseId: "",
        chapterId: "",
        title: "",
        videoUrl: "",
        duration: 0,
        isFree: false,
      });
      setEditing({ type: "", id: "" });
      fetchCourses();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteLesson = async (courseId, chapterId, lessonId) => {
    try {
      console.log("Deleting lesson:", lessonId);
      await axios.delete(
        `${apiurl}/courses/${courseId}/chapters/${chapterId}/lessons/${lessonId}`
      );
      // Refresh courses and chapters
      await fetchCourses();
      const course = courses.find((c) => c._id === courseId);
      setChapters(course?.chapters || []);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mx-auto p-6">
      

      {/* ------------------ Add/Edit Course ------------------ */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2">
          {editing.type === "course" ? "Edit Course" : "Add Course"}
        </h2>
        <div className="flex gap-4 flex-wrap mb-4">
          <input
            className="border rounded-md p-2 flex-1"
            placeholder="Title"
            value={newCourse.title}
            onChange={(e) =>
              setNewCourse({ ...newCourse, title: e.target.value })
            }
          />
          <input
            className="border rounded-md p-2 flex-1"
            placeholder="Description"
            value={newCourse.description}
            onChange={(e) =>
              setNewCourse({ ...newCourse, description: e.target.value })
            }
          />
          {editing.type === "course" ? (
            <button
              className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition"
              onClick={handleUpdateCourse}
            >
              Update Course
            </button>
          ) : (
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              onClick={handleAddCourse}
            >
              Add Course
            </button>
          )}
        </div>
      </div>

      {/* ------------------ Add/Edit Chapter ------------------ */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2">
          {editing.type === "chapter" ? "Edit Chapter" : "Add Chapter"}
        </h2>
        <div className="flex gap-4 flex-wrap mb-4">
          <select
            className="border rounded-md p-2 flex-1"
            value={chapterData.courseId}
            onChange={(e) => {
              const courseId = e.target.value;
              setChapterData({ ...chapterData, courseId });
              fetchChapters(courseId);
            }}
          >
            <option value="">Select Course</option>
            {courses.map((course) => (
              <option key={course._id} value={course._id}>
                {course.title}
              </option>
            ))}
          </select>
          <input
            className="border rounded-md p-2 flex-1"
            placeholder="Chapter Title"
            value={chapterData.title}
            onChange={(e) =>
              setChapterData({ ...chapterData, title: e.target.value })
            }
          />
          {editing.type === "chapter" ? (
            <button
              className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition"
              onClick={handleUpdateChapter}
            >
              Update Chapter
            </button>
          ) : (
            <button
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
              onClick={handleAddChapter}
            >
              Add Chapter
            </button>
          )}
        </div>
      </div>

      {/* ------------------ Add/Edit Lesson ------------------ */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2">
          {editing.type === "lesson" ? "Edit Lesson" : "Add Lesson"}
        </h2>
        <div className="flex gap-4 flex-wrap mb-4">
          <select
            className="border rounded-md p-2 flex-1"
            value={lessonData.courseId}
            onChange={(e) => {
              const courseId = e.target.value;
              setLessonData({ ...lessonData, courseId, chapterId: "" });
              fetchChapters(courseId);
            }}
          >
            <option value="">Select Course</option>
            {courses.map((course) => (
              <option key={course._id} value={course._id}>
                {course.title}
              </option>
            ))}
          </select>

          <select
            className="border rounded-md p-2 flex-1"
            value={lessonData.chapterId}
            onChange={(e) =>
              setLessonData({ ...lessonData, chapterId: e.target.value })
            }
          >
            <option value="">Select Chapter</option>
            {chapters.map((ch) => (
              <option key={ch._id} value={ch._id}>
                {ch.title}
              </option>
            ))}
          </select>

          <input
            className="border rounded-md p-2 flex-1"
            placeholder="Lesson Title"
            value={lessonData.title}
            onChange={(e) =>
              setLessonData({ ...lessonData, title: e.target.value })
            }
          />
          <input
            className="border rounded-md p-2 flex-1"
            placeholder="Video URL"
            value={lessonData.videoUrl}
            onChange={(e) =>
              setLessonData({ ...lessonData, videoUrl: e.target.value })
            }
          />
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={lessonData.isFree}
              onChange={(e) =>
                setLessonData({ ...lessonData, isFree: e.target.checked })
              }
              className="w-4 h-4"
            />
            Free
          </label>

          {editing.type === "lesson" ? (
            <button
              className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition"
              onClick={handleUpdateLesson}
            >
              Update Lesson
            </button>
          ) : (
            <button
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
              onClick={handleAddLesson}
            >
              Add Lesson
            </button>
          )}
        </div>
      </div>

      {/* ------------------ Display Courses → Chapters → Lessons ------------------ */}
      <div className="bg-gray-50 shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2">All Courses</h2>
        {courses.length === 0 ? (
          <p>No courses available.</p>
        ) : (
          courses.map((course) => (
            <div key={course._id} className="border p-3 rounded-md mb-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-lg">
                  {course.order}. {course.title}
                </h3>
                <div className="flex gap-2">
                  <Edit
                    onClick={() => handleEditCourse(course)}
                    className="w-4 h-4 text-gray-400 hover:text-green-600 cursor-pointer"
                  />
                  <Trash2
                    onClick={() => handleDeleteCourse(course._id)}
                    className="w-4 h-4 text-gray-400 hover:text-red-600 cursor-pointer"
                  />
                </div>
              </div>
              <p className="text-gray-600 mb-2">{course.description}</p>

              {course.chapters.map((ch) => (
                <div key={ch._id} className="ml-6 mb-2 border-l-2 pl-4">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold">
                      {ch.order}. {ch.title}
                    </h4>
                    {/* <div className="flex gap-2">
                      <button
                        className="bg-yellow-500 text-white px-2 py-1 rounded-md"
                        onClick={() => handleEditChapter(course._id, ch)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 text-white px-2 py-1 rounded-md"
                        onClick={() => handleDeleteChapter(course._id, ch._id)}
                      >
                        Delete
                      </button>
                    </div> */}
                    <div className="flex gap-2">
                      <Edit
                        onClick={() => handleEditChapter(course._id, ch)}
                        className="w-4 h-4 text-gray-400 hover:text-green-600 cursor-pointer"
                      />
                      <Trash2
                        onClick={() => handleDeleteChapter(course._id, ch._id)}
                        className="w-4 h-4 text-gray-400 hover:text-red-600 cursor-pointer"
                      />
                    </div>
                  </div>

                  {ch.lessons.map((l) => (
                    <div
                      key={l._id}
                      className="ml-6 flex justify-between items-center border-l-2 pl-4 mb-1"
                    >
                      <div>
                        {l.order}. {l.title} - {l.duration}s{" "}
                        {l.isFree && "(Free)"}
                      </div>
                      {/* <div className="flex gap-2">
                        <button
                          className="bg-yellow-500 text-white px-2 py-1 rounded-md"
                          onClick={() =>
                            handleEditLesson(course._id, ch._id, l)
                          }
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-500 text-white px-2 py-1 rounded-md"
                          onClick={() =>
                            handleDeleteLesson(course._id, ch._id, l._id)
                          }
                        >
                          Delete
                        </button>
                      </div> */}
                      <div className="flex gap-2">
                      <Edit
                       onClick={() =>
                            handleEditLesson(course._id, ch._id, l)}
                        className="w-4 h-4 text-gray-400 hover:text-green-600 cursor-pointer"
                      />
                      <Trash2
                        onClick={() =>
                            handleDeleteLesson(course._id, ch._id, l._id)
                          }
                        className="w-4 h-4 text-gray-400 hover:text-red-600 cursor-pointer"
                      />
                    </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Courses;
