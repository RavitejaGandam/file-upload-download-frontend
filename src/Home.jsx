import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to File Upload & Download System</h1>
      <h3>Please Select an Option:</h3>
      <ul>
        <li>
          <Link to="/upload">Upload File/Image</Link>
        </li>
        <li>
          <Link to="/download">Download File/Image</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
