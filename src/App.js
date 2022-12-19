import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Post from './pages/Post';
import Create from './pages/Create';
import Confirm from './pages/Confirm';
import Profile from './pages/Profile'; 
import EditProfile from './pages/EditProfile'; 
import Interests from './pages/Interests';
import DietaryRestrictions from './pages/DietaryRestrictions';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/post" element={<Post/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/confirm" element={<Confirm/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/editprofile" element={<EditProfile/>}/>
        <Route path="/interests" element={<Interests/>}/>
        <Route path="/restrictions" element={<DietaryRestrictions/>}/>
      </Routes>
    </Router>
  );
}

