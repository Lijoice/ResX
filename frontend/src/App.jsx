import React from 'react'
import Userpage from './components/Userpage/Userpage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignup from './components/LoginSignup/LoginSignup';
import { AuthProvider } from './AuthContext';
import BookingPage from './components/BookingPage/BookingPage';
import Cart from './components/Cart/Cart';
import Dashboard from './components/dashboard';
import { ToastContainer } from 'react-toastify';
import AdminLogin from './components/AdminLogin/AdminLogin';
import VenueForm from './components/AdminPage';

const App = () => {
  return (
<AuthProvider>
  <Router>
    <Routes>
      <Route path="/" element={<Userpage/>}/>
      <Route path="/login" element={<LoginSignup/>}/>
      <Route path="/adminlogin" element={<AdminLogin/>}/>
      <Route path="/cart" element={<Cart/>} />
      <Route path="/bookingpage/:name" element={<BookingPage />} />
      <Route path='/Admin' element={<VenueForm/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
    </Routes>
  </Router>
  <ToastContainer/>
  </AuthProvider>
  )
}

export default App
