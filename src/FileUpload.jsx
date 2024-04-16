import axios from "axios";
import React, { useState } from "react";

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    //e.preventDefault();
    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await axios.post(
        "http://localhost:8080/images/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      // Add any success message handling here
    } catch (error) {
      console.error("Error uploading image: ", error);
      // Add error handling here
    }
  };
  return (
    <div>
      <h2>Upload File/Image</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FileUpload;
