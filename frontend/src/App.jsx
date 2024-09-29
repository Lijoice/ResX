import React from 'react'
import Userpage from './components/Userpage/Userpage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignup from './components/LoginSignup/LoginSignup';
import { AuthProvider } from './AuthContext';
import BookingPage from './components/BookingPage/BookingPage.jsx';
import Cart from './components/Cart/Cart';
import Dashboard from './components/dashboard';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
<AuthProvider>
   <Router>
    <ToastContainer/>
    <Routes>
      <Route path="/" element={<Userpage/>}/>
      <Route path="/login" element={<LoginSignup/>}/>
      <Route path="/cart" element={<Cart/>} />
      <Route path="/bookingpage" element={<BookingPage/>} />
      <Route path='/Dashboard' element={<Dashboard/>}/>
    </Routes>
   </Router>
  </AuthProvider>
  )
}

export default App
