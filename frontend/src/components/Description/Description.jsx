import React from 'react'
import './Description.css'
import '../../assets/assets.js'
import { assets } from '../../assets/assets.js'
import { Button } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from 'react-router-dom'

function Description() {

    const navigate = useNavigate();

    return (
        <div className='dicription-section'>
            <div>
                <p className='p-1'>Book Appointment <br /> With Trusted Doctors</p>
                <div className='p-2'>
                    <p>Simply browse through our extensive list of trusted doctors,<br />
                        schedule your appointment hassle-free.</p>
                    <Button variant="contained" className='booking-button' onClick={() => navigate('/doctors')}>Book appointment <NavigateNextIcon className='nav-icon' /></Button>
                </div>
            </div>
            <img src={assets.header_img} alt='...' />
        </div>
    )
}

export default Description
