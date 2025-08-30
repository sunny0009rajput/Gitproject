import axios from "axios";
import { useState, useEffect, useRef } from "react";

const AddVideo = ({ isOpen, onClose, onRefresh, video }) => {
  const [formData, setFormData] = useState({
    name: "",
    image: null, // will hold File when user selects new image
    video: null, // will hold File when user selects new video
  });

  // previews holds displayable URLs/strings (existing base64 or objectURL)
  const [previews, setPreviews] = useState({
    image: null,
    video: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // keep a list of object URLs created so we can revoke them on cleanup
  const createdObjectUrlsRef = useRef([]);

  const apiurl = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    if (video) {
      // Populate metadata only. Do NOT put base64 into formData.image/video.
      setFormData({
        name: video.name || "",
        image: null,
        video: null,
      });

      // Put server-returned base64 or URL into previews so UI can show it
      setPreviews({
        image: video.image || null,
        video: video.video || null,
      });
    } else {
      setFormData({
        name: "",
        image: null,
        video: null,
      });
      setPreviews({ image: null, video: null });
    }

    return () => {
      // Revoke any object URLs created while opening this modal
      createdObjectUrlsRef.current.forEach((u) => {
        try {
          URL.revokeObjectURL(u);
        } catch (e) {}
      });
      createdObjectUrlsRef.current = [];
    };
  }, [video, isOpen]);

  const handleChange = (e) => {
    const { name, files, value } = e.target;

    // file selected
    if (files && files.length > 0) {
      const file = files[0];

      // store File in formData
      setFormData((prev) => ({ ...prev, [name]: file }));

      // create an object URL preview for UI
      const objectUrl = URL.createObjectURL(file);
      createdObjectUrlsRef.current.push(objectUrl);
      setPreviews((prev) => ({ ...prev, [name]: objectUrl }));

      // clear any errors related to that field
      setErrors((prev) => ({ ...prev, [name]: "" }));
      return;
    }

    // normal input
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name || !formData.name.trim()) newErrors.name = "Name is required";

    // If creating and image/video are required for your use-case, you can validate here:
    // Example: require image & video only on create
    if (!video) {
      // require at least an image and a video when creating (optional)
      // if (!(formData.image instanceof File)) newErrors.image = "Image required";
      // if (!(formData.video instanceof File)) newErrors.video = "Video required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const hasNewImage = formData.image instanceof File;
      const hasNewVideo = formData.video instanceof File;
      const isFileUpload = hasNewImage || hasNewVideo;

      let response;

      if (video) {
        // EDIT mode
        if (isFileUpload) {
          // send multipart containing only new files + name
          const dataToSend = new FormData();
          dataToSend.append("name", formData.name || "");

          if (hasNewImage) dataToSend.append("image", formData.image);
          if (hasNewVideo) dataToSend.append("video", formData.video);

          response = await axios.put(`${apiurl}/video/${video._id}`, dataToSend, {
            withCredentials: true,
            headers: { "Content-Type": "multipart/form-data" },
          });
        } else {
          // send small JSON containing only changed metadata (no base64 strings)
          const payload = { name: formData.name || "" };
          response = await axios.put(`${apiurl}/video/${video._id}`, payload, {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          });
        }
      } else {
        // CREATE mode -> always FormData (files + name)
        const dataToSend = new FormData();
        dataToSend.append("name", formData.name || "");
        if (hasNewImage) dataToSend.append("image", formData.image);
        if (hasNewVideo) dataToSend.append("video", formData.video);

        response = await axios.post(`${apiurl}/video`, dataToSend, {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      if (response.status >= 200 && response.status < 300) {
        setSubmitted(true);
        if (typeof onRefresh === "function") onRefresh();
      } else {
        alert(response.data?.message || "Error saving video");
      }
    } catch (err) {
      console.error("Save video failed:", err);
      alert(err?.response?.data?.message || err?.message || "An error occurred while saving video.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    // revoke object urls created
    createdObjectUrlsRef.current.forEach((u) => {
      try {
        URL.revokeObjectURL(u);
      } catch (e) {}
    });
    createdObjectUrlsRef.current = [];
    setSubmitted(false);
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800">{video ? "Edit Video" : "Add Video"}</h2>
          <button onClick={handleClose} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <h3 className="text-2xl font-bold text-green-600 mb-4">
                Video {video ? "Updated" : "Added"} Successfully!
              </h3>
              <button onClick={handleClose} className="bg-blue-600 text-white px-6 py-3 rounded-xl">
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name || ""}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg"
                  placeholder="Enter video name"
                />
                {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
                <div className="flex items-center gap-3">
                  <label className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <span className="text-gray-600">Upload Image</span>
                    <input type="file" accept="image/*" name="image" onChange={handleChange} className="hidden" />
                  </label>

                  <div className="text-sm text-gray-600 truncate">
                    {formData.image instanceof File
                      ? formData.image.name
                      : previews.image
                      ? "Using existing image (no new file selected)"
                      : "No file selected"}
                  </div>
                </div>

                {/* image preview */}
                {previews.image && (
                  <div className="mt-3 w-40 h-40 rounded-md overflow-hidden border">
                    <img src={previews.image} alt="preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>

              {/* Video Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Video</label>
                <div className="flex items-center gap-3">
                  <label className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <span className="text-gray-600">Upload Video</span>
                    <input type="file" accept="video/*" name="video" onChange={handleChange} className="hidden" />
                  </label>

                  <div className="text-sm text-gray-600 truncate">
                    {formData.video instanceof File
                      ? formData.video.name
                      : previews.video
                      ? "Using existing video (no new file selected)"
                      : "No file selected"}
                  </div>
                </div>

                {/* video preview */}
                {previews.video && (
                  <div className="mt-3 w-full max-w-md h-44 rounded-md overflow-hidden border">
                    <video src={previews.video} controls className="w-full h-full object-cover" />
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4">
                <button type="submit" disabled={isSubmitting} className="flex-1 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600">
                  {isSubmitting ? "Submitting..." : video ? "Update Video" : "Add Video"}
                </button>
                <button onClick={handleClose} type="button" className="flex-1 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50">
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddVideo;
