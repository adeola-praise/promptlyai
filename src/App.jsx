import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ConfirmSignUpPage from './pages/ConfirmSignUpPage';
import BlogsPage from './pages/BlogsPage';
import BlogGeneratorPage from './pages/BlogGeneratorPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/signin' element={<LoginPage />}/>
        <Route path='/signup' element={<SignupPage />}/>
        <Route path='/confirmSignup' element={<ConfirmSignUpPage />}/>
        <Route path='/blogs' element={<BlogsPage />}/>
        <Route path='/aiwriter' element={<BlogGeneratorPage></BlogGeneratorPage>}/>
      </Routes>
    </Router>
  );
}

export default App;
