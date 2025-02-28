import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CardContainer from './components/CardContainer';
import Card from './components/Card';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/SignIn" element={<SignIn />} />
        </Route>
      </Routes>
      </BrowserRouter>
      {/* <CardContainer /> */}
      {/* <SignUp /> */}
      {/* <SignIn /> */}
    </>
  )
}

export default App
