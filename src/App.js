// import logo from './logo.svg';
// import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css";
import "../node_modules/bootstrap/js/dist/collapse"
import { Routes, Route } from "react-router-dom"
import ToDoList from "./components/ToDoList"
// import PrivateRoute from './components/PrivateRoute';
import Home from "./components/Home"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todolist" element={<ToDoList />} />
      </Routes>
    </>
  );
}

export default App;
