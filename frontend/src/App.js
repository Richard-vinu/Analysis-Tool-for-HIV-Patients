// src/App.js
import React from 'react';
import './App.css';
import FileUpload from '../src/pages/FileUpload';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <img src="https://snehacharitabletrust.org/assets/images/logo.png" alt="Logo" className="app-logo" />
        <h2 className="app-title">Help Analysis Tool for HIV Patients</h2>
      </header>
      <div className="content">
        <h1>Upload Data</h1>
        <FileUpload />
      </div>
    </div>
  );
}

export default App;
