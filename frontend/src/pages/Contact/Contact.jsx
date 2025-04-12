import React from 'react'
import './Contact.css'
import { assets } from '../../assets/assets'
import { Button } from '@mui/material'

const Contact = () => {
    return (
        <div className='contact-main-div'>
            <div className='contact-title'>
                <p>CONTACT <span>Us</span></p>
            </div>
            <div className='contact-baner'>
                <img src={assets.contact_image} alt='...' />
                <div className='contact-baner-p'>
                    <p className='our-office'>Our OFFICE</p>
                    <p>54709 Willms Station <br /> Suite 350, Washington, USA</p>
                    <p>Tel: (415) 555‑0132 <br /> Email: greatstackdev@gmail.com</p>
                    <p className='careers'>Careers at PRESCRIPTO</p>
                    <p>Learn more about our teams and job openings.</p>
                    <Button variant="contained">Explore Jobs</Button>
                </div>
            </div>
        </div>
    )
}


export default Contact
