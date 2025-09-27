import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronDown, ChevronUp, ArrowLeft,
  Play, Pause, Volume2, VolumeX,
  Maximize, Settings
} from 'lucide-react';

const CoursePage = () => {
  const [modules, setModules] = useState([]);          // fetched modules+lessons
  const [expanded, setExpanded] = useState({});        // which modules are open
  const [currentLesson, setCurrentLesson] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  /** Fetch modules + lessons (with video URLs) from backend */
  useEffect(() => {
    async function fetchModules() {
      try {
        const res = await fetch('/api/course/6/modules'); // your backend endpoint
        const data = await res.json();
        // data example: [{id,title,lessons:[{id,title,duration,videoUrl},...]},...]
        setModules(data);
        // optionally open first module
        if (data.length) setExpanded({ [data[0].id]: true });
      } catch (err) {
        console.error('Failed to load modules', err);
      }
    }
    fetchModules();
  }, []);

  /** Video events to track progress */
  const handleTimeUpdate = () => {
    if (videoRef.current && currentLesson) {
      const pct = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(pct);
    }
  };

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const toggleModule = (id) =>
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  const selectLesson = (lesson) => {
    setCurrentLesson(lesson);
    setIsPlaying(false);
    setProgress(0);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.load(); // reload new video
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Sidebar */}
      <aside className="w-80 bg-gray-100 text-gray-800 flex flex-col">
        <div className="p-4 border-b border-gray-300">
          <button className="flex items-center text-gray-600 hover:text-gray-800 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to course page
          </button>
          <h1 className="text-xl font-bold text-gray-900 mb-2">Sigma 6.0</h1>
        </div>

        <div className="flex-1 overflow-y-auto">
          {modules.map((mod) => (
            <div key={mod.id} className="border-b border-gray-200">
              <button
                onClick={() => toggleModule(mod.id)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
              >
                <span className="font-medium text-gray-700">
                  {mod.id}. {mod.title}
                </span>
                {expanded[mod.id] ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>

              {expanded[mod.id] && mod.lessons?.length > 0 && (
                <div className="bg-gray-50">
                  {mod.lessons.map((lesson) => (
                    <button
                      key={lesson.id}
                      onClick={() => selectLesson(lesson)}
                      className={`w-full text-left p-3 pl-8 hover:bg-gray-100 border-l-4 transition-colors ${
                        currentLesson?.id === lesson.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-transparent'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span
                          className={`text-sm ${
                            currentLesson?.id === lesson.id
                              ? 'font-medium text-blue-700'
                              : 'text-gray-600'
                          }`}
                        >
                          {lesson.title}
                        </span>
                        <span className="text-xs text-gray-500">
                          {lesson.duration}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Video player */}
        <div className="flex-1 bg-black relative flex flex-col justify-center items-center">
          {currentLesson ? (
            <video
              ref={videoRef}
              src={currentLesson.videoUrl}
              className="max-h-[70vh] w-full max-w-4xl"
              controls={false}
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => setIsPlaying(false)}
            />
          ) : (
            <p className="text-gray-400">Select a lesson to start</p>
          )}

          {/* Controls */}
          {currentLesson && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
              {/* Progress Bar */}
              <div className="mb-3">
                <div className="w-full h-1 bg-gray-600 rounded">
                  <div
                    className="h-1 bg-blue-600 rounded"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={togglePlayPause}
                    className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </button>

                  <button onClick={toggleMute}>
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>
                </div>

                <div className="flex items-center space-x-4">
                  <Settings className="w-5 h-5" />
                  <Maximize className="w-5 h-5" />
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CoursePage;
