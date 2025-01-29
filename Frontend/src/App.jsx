import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import { useState } from 'react'; 
import Job_main from './pages/Job_main'; 
import JobDetailsPage from './pages/JobDetailsPage'; 
import Navbar from './components/Navbar'; 
import Dashboard from "./dashboard/index.jsx";
import ViewResume from "./my-resume/view/index.jsx";
import EditResume from "./dashboard/resume/[resumeId]/edit/index.jsx";

import './App.css'


function App() {
  const [searchParams, setSearchParams] = useState({ jobTitle: 'developer', location: '', datePosted: 'all' }); 
  const handleSearch = (params, navigate) => { 
    setSearchParams(params); 
    navigate('/jobs'); 
  };

  return (
    <>
      <Router> 
      <Navbar onSearch={handleSearch} /> 
      <Routes> 
        <Route path="/" element={<h1>Home Page</h1>} /> 
        {/* <Route path="/chatbot" element={<Chatbot />} />  */}
        <Route path="/job" element={<Job_main searchParams={searchParams} />} /> 
        <Route path="/job/:id" element={<JobDetailsPage />} /> 
        <Route path="/resume" element={<Dashboard />} /> 
        <Route path="/resume/edit" element={<EditResume />} /> 
        <Route path="/resume/:email/:resumeId/view" element={<ViewResume />} /> 
      </Routes>

    </Router>
    </>
  )
}

export default App
