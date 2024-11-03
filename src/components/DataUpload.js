import React, { useState } from 'react';
import './DataUpload.css';

const DataUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    // TODO: Implement API call to upload file
    console.log('File uploaded:', file);
  };

  return (
    <div className="data-upload-container">
      <h2>Upload Climate Data</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default DataUpload;
