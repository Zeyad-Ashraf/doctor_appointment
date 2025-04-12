import React from 'react'
import './Banner.css'
import { Button } from '@mui/material'
import '../../assets/assets.js'
import { assets } from '../../assets/assets.js'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate();

    return (
        <div className='banner-div'>
            <div className='banner-p-b'>
                <p>Book Appointment<br />With 100+ Trusted Doctors</p>
                <Button variant='contained' className='create-account-b' onClick={() => navigate('/sign-up')}>Create account</Button>
            </div>
            <img src={assets.appointment_img} alt='...' className='appointment-img' />
        </div>
    )
}

export default Banner
