import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/signin' element={<LoginPage />}/>
        <Route path='/signup' element={<SignupPage />}/>
        {/* Add more routes as necessary */}
      </Routes>
    </Router>
  );
}

export default App;
