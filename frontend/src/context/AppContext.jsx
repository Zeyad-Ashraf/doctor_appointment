import axios from 'axios';
import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const currencySymbol = '$';
    const [doctors, setDoctors] = useState([]);


    const [authHeader, setAuthHeader] = useState(localStorage.getItem('authHeader') ? localStorage.getItem('authHeader') : '')

    // async function getDoctorsData() {
    //     try {
    //         const response = await axios.get('http://localhost:3000/admin/doctors/allDoctors');
    //         const doctorsData = response.data.data; // الداتا جوا مفتاح "data"

    //         // دمج كل عنصرين في كائن واحد
    //         const mergedDoctors = [];
    //         for (let i = 0; i < doctorsData.length; i += 2) {
    //             const userInfo = doctorsData[i]; // بيانات المستخدم
    //             const doctorInfo = doctorsData[i + 1]; // بيانات الدكتور
    //             const mergedDoctor = { ...userInfo, ...doctorInfo }; // دمج البيانات
    //             // استبعاد الحقول الغير مرغوب فيها
    //             delete mergedDoctor.password;
    //             delete mergedDoctor.__v;
    //             mergedDoctors.push(mergedDoctor);
    //         }

    //         console.log(mergedDoctors); // طباعة الداتا بعد الدمج للتأكد
    //         setDoctors(mergedDoctors); // تحديث الـ state
    //     } catch (error) {
    //         console.error('فيه مشكلة في جلب الداتا:', error);
    //     }
    // }

    // استدعاء الفنكشن مرة واحدة لما الكومبوننت يتحمل
    // useEffect(() => {
    //     getDoctorsData();
    // }, [authHeader]);

    const value = {
        doctors,
        currencySymbol
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;