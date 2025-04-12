import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login"
import Sign_up from './pages/Sign-up/Sign_up';
import Home from './pages/Home/Home'
import Doctors from './pages/Doctors/Doctors';
import Navbar from './components/Nav/Navbar';
import Footer from './components/Footer/Footer'
import Appointment from './pages/Appointment/Appointment';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import MyProfile from './pages/MyProfile/MyProfile';
import MyAppointments from './pages/MyAppointments/MyAppointments';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<Sign_up />} />
        <Route path="/login" element={<Login />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/appointment' element={<Appointment />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointments' element={<MyAppointments />} />

        <Route path="/google" />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}


export default App
