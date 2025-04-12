import "./Login.css";
import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import axios from "axios"; // لو مش عندك axios، لازم تثبته بـ npm install axios

function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({}); // إعادة تعيين الأخطاء

        try {
            // استدعاء الـ API لتسجيل الدخول
            const response = await axios.post("http://localhost:3000/signIn", formData);

            // افترض إن الـ response بيرجع rule في الـ data
            const userRule = response.data.rule; // مثال: "doctor" أو "user"

            // التنقل بناءً على الـ rule
            if (userRule === "doctor") {
                navigate("/doctor-dashboard");
            } else if (userRule === "user") {
                navigate("/my-profile");
            } else {
                setErrors({ email: "غير مصرح لك بالدخول" });
            }
        } catch (error) {
            console.error(error);
            if (error.response && error.response.data) {
                setErrors({ email: error.response.data.message || "فشل تسجيل الدخول" });
            } else {
                setErrors({ email: "اول مرة أخرىحدث خطأ، ح" });
            }
        }
    };

    return (
        <div>
            <div id="main-div">
                <div id="section-1">
                    <div>
                        <div id="title">
                            <Typography variant="p">Doctor Appointment Booking.</Typography>
                        </div>
                        <div id="paragraph">
                            <Typography variant="p">
                                Welcome.<br />
                                Start your journey now with our management system!
                            </Typography>
                        </div>
                    </div>
                </div>

                {/* section two */}
                <div id="section-2">
                    <Container className="container">
                        <Box id="box">
                            <Typography className="logo" variant="h2">
                                Login
                            </Typography>
                            <form className="form" onSubmit={handleSubmit}>
                                <div>
                                    <TextField
                                        name="email"
                                        id="email"
                                        label="Email"
                                        variant="outlined"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        error={!!errors.email}
                                        helperText={errors.email}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        name="password"
                                        id="password"
                                        label="Password"
                                        variant="outlined"
                                        required
                                        type="password" // نوع الحقل باسورد عشان يخفي النص
                                        value={formData.password}
                                        onChange={handleChange}
                                        error={!!errors.password}
                                        helperText={errors.password}
                                    />
                                </div>
                                <div className="login">
                                    <div className="buttons">
                                        <Button className="signup-b" variant="contained" type="submit">
                                            Login
                                        </Button>
                                        <a className="google-link" href="http://localhost/google">
                                            <Button className="google-signup" variant="contained">
                                                <GoogleIcon />
                                            </Button>
                                        </a>
                                    </div>
                                    <Typography variant="p" className="go-signup">
                                        Don't have an account yet?<span> </span>
                                        <Link
                                            className="route-login"
                                            onClick={() => navigate("/sign-up")}
                                            underline="none"
                                        >
                                            Sign Up
                                        </Link>
                                    </Typography>
                                </div>
                            </form>
                        </Box>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default Login;