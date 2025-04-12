import React from 'react'
import { specialityData } from '../../assets/assets.js'
import './SpecialityMenu.css'
import { useNavigate } from 'react-router-dom'


const SpecialityMenu = () => {

    const navigate = useNavigate();

    return (
        <div className='SpecialityMenu-div'>
            <div className='description-div'>
                <p className='Speciality-p-1'>Find by Speciality</p>
                <p className='Speciality-p-2'>Simply browse through our extensive list of trusted doctors,<br /> schedule your appointment hassle-free.</p>
            </div>
            <div className='medical-specialties'>
                {specialityData.map((item, index) => (
                    <div key={index} className={item.speciality} onClick={() => { navigate(`/doctors/${item.speciality}`); window.scrollTo({ top: 0 }) }}>
                        <img src={item.image} alt='...' />
                        <p>{item.speciality}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SpecialityMenu
