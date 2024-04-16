import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import FileUpload from './FileUpload';
import FileDownload from './FileDownload';
import Home from './Home';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <h1>Welcome to File Upload & Download System</h1>
      <h3>Please Select an Option:</h3>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/upload">Upload File/Image</Link>
              </li>
              <li>
                <Link to="/download">Download File/Image</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            {/* <Route exact path='/' element={<Home />} /> */}
            <Route path='/upload' element={<FileUpload />} />
            <Route path='/download' element={<FileDownload />} />
          </Routes>
        </div>
      </Router>
      {/* </header> */}
    </div>
  );
}

export default App;
