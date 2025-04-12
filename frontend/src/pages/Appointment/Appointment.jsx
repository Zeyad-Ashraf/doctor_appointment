import React, { useContext, useEffect, useState } from 'react'
import './Appointment.css'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'
import { Button } from '@mui/material'



const Appointment = () => {


    const { docId } = useParams()
    const { doctors, currencySymbol } = useContext(AppContext)
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THE', 'FRI', 'SAT']

    const [docInfo, setDocInfo] = useState(null)
    const [docSlots, setDocSlots] = useState([])
    const [soltIndex, setSlotIndex] = useState(0)
    const [slotTime, setSlotTime] = useState('')


    // fetch doctor data 
    const fetchDocInfo = async () => {
        const docInfo = doctors.find(doc => doc._id === docId)

        // save docInfo in docInfo state
        setDocInfo(docInfo)
        console.log(docInfo)
    }


    const getAvailableSlote = async () => {
        setDocSlots([])

        // get current date
        let today = new Date()

        for (let i = 0; i < 7; i++) {
            // getting date with index
            let currentDate = new Date(today)
            currentDate.setDate(today.getDate() + i)

            //setting end time of the date with index
            let endTime = new Date()
            endTime.setDate(today.getDate() + i)
            endTime.setHours(21, 0, 0, 0)

            // settinf hours
            if (today.getDate() === currentDate.getDate()) {
                currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
            } else {
                currentDate.setHours(10);
                currentDate.setMinutes(0);
            }


            let timeSlots = []
            while (currentDate < endTime) {
                let formattedTiem = currentDate.toLocaleString([], { hour: '2-digit', minute: '2-digit' })

                // add slot to array
                timeSlots.push({
                    datetime: new Date(currentDate),
                    time: formattedTiem
                })

                // increment current time by 30 minutes
                currentDate.setMinutes(currentDate.getMinutes() + 30)
            }

            setDocSlots(prev => ([...prev, timeSlots]))
        }
    }


    // call fetchDocInfo function depeand on doctors & docId
    useEffect(() => {
        fetchDocInfo()
    }, [doctors, docId]
    )

    useEffect(() => {
        getAvailableSlote()
    }, [docInfo]
    )

    useEffect(() => {
        console.log(docSlots)
    }, [docSlots])



    const setActiveToDay = () => {
        document.querySelectorAll(".days-date").forEach(item => {
            item.addEventListener("click", event => {
                document.querySelectorAll(".days-date").forEach(link => link.classList.remove("active"));
                event.target.classList.add("active");
            });
        });
    };

    const setActiveToHours = () => {
        document.querySelectorAll(".hours-p").forEach(item => {
            item.addEventListener("click", event => {
                document.querySelectorAll(".hours-p").forEach(link => link.classList.remove("active"));
                event.target.classList.add("active");
            });
        });
    };


    return docInfo && (
        <div>
            {/* doctor details */}
            <div className='main-doc-details-div'>
                <div className='doc-img-div'>
                    <img src={docInfo.image} alt='...' />
                </div>
                <div className='doc-details-booking'>
                    <div className='doc-details'>
                        {/* Doc Info : name , degree , experience */}
                        <p className='name-details'>
                            {docInfo.userId.firstName} {docInfo.userId.lastName} <img src={assets.verified_icon} alt='...' />
                        </p>
                        <div className='deg-spe-exp'>
                            <p>{docInfo.degree} - {docInfo.speciality}</p>
                            <button>{docInfo.experience} Years</button>
                        </div>
                        <div className='about-details'>
                            <p>
                                About <img src={assets.info_icon} alt='...' />
                            </p>
                            <p className='about-p'>{docInfo.aboutDoctor}</p>
                        </div>
                        <div className='fee-details'>
                            <p>Appointement fee: <span>{currencySymbol}{docInfo.fees}</span></p>
                        </div>
                    </div>

                    {/* Booking slots */}
                    <div className='book-solts'>
                        <p className='book-slots-title'>Booking slots</p>
                        <div className='days-of-Week'>
                            {
                                docSlots.length && docSlots.map((item, index) => (
                                    <div onClick={() => setActiveToDay()} className='days-date' key={index}>
                                        <p className='days'>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                                        <p className='date'>{item[0] && item[0].datetime.getDate()}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='hours'>
                            {
                                docSlots.length && docSlots[soltIndex].map((item, index) => (
                                    <p onClick={() => setActiveToHours() & setSlotTime(item.item)} className='hours-p' key={index}>
                                        {item.time.toLowerCase()}
                                    </p>
                                ))
                            }
                        </div>
                        <Button variant="contained">Book an appointment</Button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Appointment
