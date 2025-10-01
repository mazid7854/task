import { useState, useEffect } from "react";
import axios from "axios";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  console.log(file);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      const response = await axios.post(
        "http://192.168.1.136:8000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
        {
          onUploadProgress: (progressEvent) => {
            const progress = Math.round(
              (progressEvent.loaded / progressEvent.total) * 100
            );
            setProgress(progress);
          },
        }
      );
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-4 h-screen">
      <h2 className="text-2xl font-bold mb-4">Upload Page</h2>
      {/* File Input */}
      <form>
        <input type="file" onChange={handleChange} className="border p-2 " />
        <button
          onClick={handleUpload}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2"
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
      </form>

      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-blue-700 dark:text-white">
          Flowbite
        </span>
        <span className="text-sm font-medium text-blue-700 dark:text-white">
          {progress}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Upload;
