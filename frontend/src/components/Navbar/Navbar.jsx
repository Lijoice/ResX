import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import { FaUserCircle } from 'react-icons/fa';
import ground from "../../assets/ground1.jpg";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';


const Navbar = () => {
    const [showPopup, setShowPopup] = useState(false);
    const { isLoggedIn, setIsLoggedIn } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token'); 
        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const handleProfileClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const handleNavigate = () => {
        if (isLoggedIn) {
            setIsLoggedIn(false); 
            navigate("/login");
        } else {
            navigate("/login");
        }
    };

    return (
        <div>
            <div className="user-nav">
                <div className="user-nav-left">
                    <div className="title" style={{fontSize:"28px", marginTop:"-5px", color:"white"}}>
                        <i className="fas fa-user-shield"></i> RESX
                    </div>
                    <div className="user-search-container">
                        <input type="search" className='user-search' placeholder="Search facilities..." />
                    </div>
                </div>
                <div className="user-nav-right">
                    {isLoggedIn && (
                        <div className="user-profile" onClick={handleProfileClick}>
                            <FaUserCircle size={40} color="white" />
                        </div>
                    )}
                    <button onClick={handleNavigate}>
                        {isLoggedIn ? 'Logout' : 'Sign In'}
                    </button>
                </div>
            </div>
            {showPopup && (
                <>
                    <div className="popup-overlay show" onClick={handleClosePopup}></div>
                    <div className="user-profile-popup">
                        <span className="close-btn" onClick={handleClosePopup}>&times;</span>
                        <div className="user-popup-left">
                            <FaUserCircle size={40} color="#333" />
                            <h3>{userEmail ? userEmail : 'Username'}</h3> {/* Show email or default username */}
                        </div>
                        <div className="whole-bookings-card">
                            <h4 style={{textAlign:"center"}}>Your Bookings</h4>
                            <div className="user-popup-card">
                                <div className="user-popup-card-details-1">
                                    <img src={ground} className="user-popup-card-img" alt="" />
                                    <span style={{marginTop:"4px"}}>Nehru Stadium</span>
                                </div>
                                <div className="user-popup-card-details-2">
                                    <p>Date: 02.10.2024</p>
                                    <p>Time: 6:30 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Navbar;
