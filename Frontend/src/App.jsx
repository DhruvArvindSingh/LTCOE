import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import { useState } from 'react'; 
import Job_main from './pages/Job_main'; 
import JobDetailsPage from './pages/JobDetailsPage'; 
import Navbar from './components/Navbar'; 

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
      </Routes>

    </Router>
    </>
  )
}

export default App
