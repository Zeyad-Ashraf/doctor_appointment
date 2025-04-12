import { React, useState } from 'react'
import { assets } from '../../assets/assets'
import { Button } from '@mui/material'
import './MyProfile.css'

const MyProfile = () => {


    const [userData, setUserData] = useState({
        name: "Edward Vincent",
        image: assets.profile_pic,
        email: "richardjameswap@gmail.com",
        phone: "+1  123 456 7890",
        address: "Kfr Al-Zyat",
        gender: "Male",
        dob: "2000-01-20"
    })

    const [isEdit, setIsEdit] = useState(false)

    return (
        <div className='myprofile-main-div'>

            <img src={userData.image} alt='...' />

            {
                isEdit
                    ? <div className='user-name-input-div'> <input className='user-name-input' placeholder='Name' type='text' value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} /> <hr /></div>
                    : <div><p className='user-name'>{userData.name}</p> <hr /></div>
            }

            <div className='user-details'>
                <p className='contact-info'>CONTACT INFORMATION</p>
                <div>
                    <div className='user-email-div'>
                        <p>Email id:</p>
                        <p className='user-email'>{userData.email}</p>
                    </div>
                    <div className='user-phone-div'>
                        <p>Phone:</p>
                        {
                            isEdit
                                ? <div className='user-phone-input-div'><input type='text' value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} /></div>
                                : <p className='user-phone'>{userData.phone}</p>
                        }
                    </div>
                    <div className='user-address-div'>
                        <p>Address:</p>
                        {
                            isEdit
                                ? <div className='user-addres-input-div'>
                                    <input type='text' value={userData.address} onChange={e => setUserData(prev => ({ ...prev, address: e.target.value }))} />
                                </div>
                                : <p>
                                    {userData.address}
                                </p>
                        }
                    </div>
                </div>
            </div>
            <div>
                <p className='basic-info'>BASIC INFORMATION</p>
                <div>
                    <div className='user-gender-div'>
                        <p>Gender:</p>
                        {
                            isEdit
                                ? <div className='user-gender-s-div'>
                                    <select value={userData.gender} onChange={e => setUserData(prev => ({ ...prev, gender: e.target.value }))}>
                                        <option value="Mail">Mail</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                                : <p>{userData.gender}</p>
                        }
                    </div>
                    <div className='user-birthday-div'>
                        <p>Birthday:</p>
                        {
                            isEdit
                                ? <div className='user-birthday-input-div'><input type='date' value={userData.dob} onChange={e => setUserData(prev => ({ ...prev, dob: e.target.value }))} /></div>
                                : <p>{userData.dob}</p>
                        }
                    </div>

                </div>
            </div>
            <div>
                {
                    isEdit
                        ? <div className='save-info-button'><Button variant="contained" onClick={() => setIsEdit(false)}>Save information</Button></div>
                        : <div className='edit-button'><Button variant="contained" onClick={() => setIsEdit(true)}>Edit</Button></div>
                }
            </div>
        </div>
    )
}

export default MyProfile
