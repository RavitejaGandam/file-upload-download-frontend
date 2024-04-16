import axios from "axios";
import React, { useEffect, useState } from "react";

const FileDownload = () => {
  let [fileName, setFileName] = useState("");
  let [files, setFiles] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let fetchFileNames = async () => {
      try {
        const response = await axios.get("http://localhost:8080/images/getAll");
        setFiles(response.data.map((image) => image.name));
        setIsLoading(false);
      } catch (error) {
        console.error(error, "error in fetching");
        setIsLoading(false);
      }
    };
    fetchFileNames();
  }, []);
  let handleDownload = async () => {
    try {
      if (!fileName) {
        console.error("Filename is Required");
        return;
      }
      let response = await axios.get(
        `http://localhost:8080/images/download/${fileName}`,
        {
          responseType: "blob",
        }
      );
      const blob = new Blob([response.data], { type: "image/jpeg" }); // Adjust the type based on the image type

      // Create a temporary URL for the Blob
      const url = URL.createObjectURL(blob);

      // Create a link element
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName; // Set the filename for the downloaded file
      link.click();

      // Clean up by revoking the temporary URL
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error, "error occured");
    }
  };
  let handleChange = (e) => {
    setFileName(e.target.value);
  };
  return (
    <div>
      <h2>File/Image Download</h2>
      <select value={fileName} onChange={handleChange}>
        <option value="">Select A FileName</option>
        {isLoading ? (
          <option>Loading</option>
        ) : (
          files.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))
        )}
      </select>
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

export default FileDownload;
