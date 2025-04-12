import React, { useContext, useEffect, useState } from 'react'
import './Doctors.css'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'

const Doctors = () => {


    const navigate = useNavigate()

    const { speciality } = useParams()

    const [filterDoc, SetFilterDoc] = useState([])

    const { doctors } = useContext(AppContext)


    const applyFilter = () => {
        if (speciality) {
            SetFilterDoc(doctors.filter(doc => doc.speciality === speciality))
        } else {
            SetFilterDoc(doctors)
        }
    }

    useEffect(() => {
        applyFilter()
    }, [doctors, speciality])


    const setActiveClass = () => {
        document.querySelectorAll(".filter-by-location").forEach(item => {
            item.addEventListener("click", event => {
                document.querySelectorAll(".filter-by-location").forEach(link => link.classList.remove("active"));
                event.target.classList.add("active");
            });
        });
    };


    return (
        <div className='docters-page-div'>
            <p className='filter-p'>Browse through the doctors Location.</p>
            <div className='filter-doctors'>
                <div className='filter-div'>
                    <p className='filter-by-location' onClick={() => speciality === 'Giza' ? navigate('/doctors') : navigate('/doctors/Giza')}>Cairo</p>
                    <p className='filter-by-location' onClick={() => speciality === 'Giza' ? navigate('/doctors') : navigate('/doctors/Giza')}>Giza</p>
                    <p className='filter-by-location' onClick={() => speciality === 'Alexandria' ? navigate('/doctors') : navigate('/doctors/Alexandria')}>Alexandria</p>
                    <p className='filter-by-location' onClick={() => speciality === 'Qalyubia' ? navigate('/doctors') : navigate('/doctors/Qalyubia')}>Qalyubia</p>
                    {/* <p className='filter-by-location' onClick={() => speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')}>Neurologist</p> */}
                    <p className='filter-by-location' onClick={() => speciality === 'Menoufia' ? navigate('/doctors') : navigate('/doctors/Menoufia')}>Menoufia</p>
                    <p className='filter-by-location' onClick={() => speciality === 'Beheira' ? navigate('/doctors') : navigate('/doctors/Beheira')}>Beheira</p>
                    <p className='filter-by-location' onClick={() => speciality === 'Kafr El Sheikh' ? navigate('/doctors') : navigate('/doctors/Kafr El Sheikh')}>Kafr El Sheikh</p>
                    <p className='filter-by-location' onClick={() => speciality === 'Sharqia' ? navigate('/doctors') : navigate('/doctors/Sharqia')}>Sharqia</p>
                    <p className='filter-by-location' onClick={() => speciality === 'Dakahlia' ? navigate('/doctors') : navigate('/doctors/Dakahlia')}>Dakahlia</p>
                    <p className='filter-by-location' onClick={() => speciality === 'Damietta' ? navigate('/doctors') : navigate('/doctors/Damietta')}>Damietta</p>
                    <p className='filter-by-location' onClick={() => speciality === 'Port Said' ? navigate('/doctors') : navigate('/doctors/Port Said')}>Port Said</p>
                    <p className='filter-by-location' onClick={() => speciality === 'Ismailia' ? navigate('/doctors') : navigate('/doctors/Ismailia')}>Ismailia</p>
                    <p className='filter-by-location' onClick={() => speciality === 'Suez' ? navigate('/doctors') : navigate('/doctors/Suez')}>Suez</p>
                    <p className='filter-by-location' onClick={() => speciality === 'Fayoum' ? navigate('/doctors') : navigate('/doctors/Fayoum')}>Fayoum</p>
                    <p className='filter-by-location' onClick={() => speciality === 'Beni Suef' ? navigate('/doctors') : navigate('/doctors/Beni Suef')}>Beni Suef</p>
                    <p className='filter-by-location' onClick={() => speciality === 'Minya' ? navigate('/doctors') : navigate('/doctors/Minya')}>Minya</p>
                    <p className='filter-by-location' onClick={() => speciality === 'Asyut' ? navigate('/doctors') : navigate('/doctors/Asyut')}>Asyut</p>
                    <p className='filter-by-location' onClick={() => speciality === 'Sohag' ? navigate('/doctors') : navigate('/doctors/Sohag')}>Sohag</p>
                    <p className='filter-by-location' onClick={() => speciality === 'Qena' ? navigate('/doctors') : navigate('/doctors/Qena')}>Qena</p>
                    <p className='filter-by-location' onClick={() => speciality === 'Luxor' ? navigate('/doctors') : navigate('/doctors/Luxor')}>Luxor</p>
                    <p className='filter-by-location' onClick={() => speciality === 'Aswan' ? navigate('/doctors') : navigate('/doctors/Aswan')}>Aswan</p>
                    <p className='filter-by-location' onClick={() => speciality === 'Al-Bahr Al-Ahmar' ? navigate('/doctors') : navigate('/doctors/Al-Bahr Al-Ahmar')}>Al-Bahr Al-Ahmar</p>
                    <p className='filter-by-location' onClick={() => speciality === 'Al-Wadi Al-Jadid' ? navigate('/doctors') : navigate('/doctors/Al-Wadi Al-Jadid')}>Al-Wadi Al-Jadid</p>
                    <p className='filter-by-location' onClick={() => speciality === 'Matrouh' ? navigate('/doctors') : navigate('/doctors/Matrouh')}>Matrouh</p>
                    <p className='filter-by-location' onClick={() => speciality === 'Shamal Sina' ? navigate('/doctors') : navigate('/doctors/Shamal Sina')}>Shamal Sina</p>
                    <p className='filter-by-location' onClick={() => speciality === 'Janub  Sina' ? navigate('/doctors') : navigate('/doctors/Janub  Sina')}>Janub  Sina</p>
                    <p className='filter-by-location' onClick={() => speciality === 'Gharbia' ? navigate('/doctors') : navigate('/doctors/Gharbia')}>Gharbia</p>
                </div>
                <div className='doctors-div'>
                    {
                        filterDoc.map((item, index) => (
                            <div className='doctor-card-h' onClick={() => navigate(`/appointment/${item._id}`)}>
                                <img src={item.image} alt={assets.doc1} />
                                <div className='details'>
                                    <div className='available-circle'>
                                        <p className='green-c'></p><p>Available</p>
                                    </div>
                                    <p className='doc-name'>{item.userId.firstName} {item.userId.lastName}</p>
                                    <p className='doc-speciality'>{item.speciality}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div >
    )
}

export default Doctors
