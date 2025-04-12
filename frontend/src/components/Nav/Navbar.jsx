import React, { Fragment, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import { assets } from '../../assets/assets'
import './Navbar.css'
import { Typography } from '@mui/material';

function Navbar() {


    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false)
    const [token, setToken] = useState(true)

    const setActiveClass = () => {
        document.querySelectorAll(".listItem").forEach(item => {
            item.addEventListener("click", event => {
                document.querySelectorAll(".listItem").forEach(link => link.classList.remove("active"));
                event.target.classList.add("active");
            });
        });
    };




    return (
        <div className='main-nav-div'>
            <div className='site-logo'>
                <p onClick={() => navigate('/')}>Doctor Appointment Booking</p>
            </div>
            <div className='pages'>
                <ul className='pages-list'>
                    <NavLink to='/'>
                        <li className='listItem' onClick={() => { setActiveClass() }}>HOME</li>
                    </NavLink>

                    <NavLink to='/doctors'>
                        <li className='listItem' onClick={() => { setActiveClass() }}>DOCTORS</li>
                    </NavLink>

                    <NavLink to='/about'>
                        <li className='listItem' onClick={() => { setActiveClass() }}>ABOUT</li>
                    </NavLink>

                    <NavLink to='/contact'>
                        <li className='listItem' onClick={() => { setActiveClass() }}>CONTACT</li>
                    </NavLink>

                </ul>
            </div>
            <div className='sign-login'>
                {
                    token
                        ? <div className='profile-pic-div'>
                            <img className='profile-pic' src={assets.profile_pic} alt='...' />
                            <img className='dropdown-icon' src={assets.dropdown_icon} alt='...' />
                            <div className='list-f-div'>
                                <div className='list-s-div'>
                                    <p onClick={() => navigate('my-profile')} className='my-profile'>My Profile</p>
                                    <p onClick={() => navigate('my-appointments')} className='my-appointments'>My Appointments</p>
                                    <p onClick={() => setToken(false)} className='logout'>logout</p>
                                </div>
                            </div>
                        </div>
                        : <Fragment>
                            <Button variant="contained" onClick={() => navigate('/login')}>Login</Button>
                            <Button variant="contained" onClick={() => navigate('/sign-up')}>Sign Up</Button>
                        </Fragment>
                }
            </div>
        </div>
    )
}

export default Navbar
