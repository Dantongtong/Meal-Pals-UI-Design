import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Post from './pages/Post';
import Create from './pages/Create';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/post" element={<Post/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>
      </Routes>
    </Router>
  );
}

