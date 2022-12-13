import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Post from './pages/Post';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/post" element={<Post/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

