import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Search from "./components/Search";
import Fetch from "./components/Fetch";
import Post from "./components/Post";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/search' element={<Search />} />
          <Route path='/fetch' element={<Fetch />} />
          <Route path='/post' element={<Post />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
