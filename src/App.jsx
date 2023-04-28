import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from './pages/Home';
import AddEdit from './pages/AddEdit';
import "./App.css"

function App() {
  

  return (
    <BrowserRouter>
    <ToastContainer position="top-center" />
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/addContact" element={<AddEdit/>} />
      <Route path="/update/:id" element={<AddEdit/>} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
