/* eslint-disable no-unused-vars */
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import PostList from "./Components/BlogList/PostList";
import { useState } from "react";
// import CreatePost from "./Components/BlogList/CreatePost";
import PostProvider from "./Context/PostProvider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Java from "./Components/Pages/Java";
import AddPost from "./Components/Pages/AddPost";

function App() {
  return (
    <Router>
      <PostProvider>
        <Header />
        <PostList />
        <Routes>
          <Route path="/java" element={<Java />} />
          <Route path="/AddPost" element={<AddPost />} />
        </Routes>
        <Footer />
      </PostProvider>
    </Router>
  );
}

export default App;
