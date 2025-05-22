import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmailForm from './components/Email.jsx';
import VulnerabilityScanner, { ScanResults } from './components/CySerch.jsx';
import AuthorPage from './components/AuthorPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VulnerabilityScanner />} />
        <Route path="/scan-results" element={<ScanResults />} />
        <Route path="/full-scan" element={<EmailForm />} />
        <Route path='/author' element={<AuthorPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;