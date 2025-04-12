import React, { Fragment } from 'react'
import './Footer.css'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate();

    return (
        <div className='footer'>
            <div className='footer-p1'>
                <div className='summary'>
                    <p className='footer-logo'>
                        Doctor Appointment Booking
                    </p>
                    <p className='footer-summary'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when <br /> an unknown printer took a galley of type and scrambled it to make a type <br /> specimen book.
                    </p>
                </div>
                <div className='footer-pages'>
                    <p>
                        Pages
                    </p>
                    <ul className='footer-list'>
                        <li onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>HOME</li>
                        <li onClick={() => navigate('/doctors')}>DOCTORS</li>
                        <li onClick={() => navigate('/about')}>ABOUT</li>
                        <li onClick={() => navigate('/contact')}>CONTACT</li>
                    </ul>
                </div>
            </div>
            <div className='footer-p2-cp'>
                Copyright &copy; 2024 GreatStack - All Right Reserved.
            </div>
        </div>
    )
}

export default Footer
