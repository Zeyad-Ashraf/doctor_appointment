import { React, useState } from "react";
import { TextField, Button, Container, Typography, Box, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Sign_up.css";
import GoogleIcon from "@mui/icons-material/Google";
import axios from "axios";
import { toast } from "react-toastify";

function Sign_up() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        userName: "",
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

        // try {
        //     const { data } = axios.post("http://localhost:3000/signup", formData)
        //     console.log(data)
        //     if (data.success) {
        //         console.log(data)
        //     } else {
        //         toast.error(data.msg)
        //         console.log(data.msg)
        //     }
        // } catch (error) {
        //     console.log(error)
        //     toast.error(error.message)
        // }

        try {
            const response = await axios.post("http://localhost:3000/signup", formData);
            console.log({ response });

            const data = response.data;

            // لو الـ backend بيرجع message فقط
            if (data.message === "success") {
                toast.success("تم التسجيل بنجاح");
            } else {
                toast.error(`${data.message}`);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || error.message);
        }
    };

    return (
        <div id="main-div">
            {/* section 1 */}
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

            {/* section 2 */}
            <div id="section-2">
                <Container className="container">
                    <Box id="box">
                        <Typography className="logo" variant="h2">
                            Sign Up
                        </Typography>
                        <form className="form" onSubmit={handleSubmit}>
                            <div>
                                <TextField
                                    name="firstName"
                                    id="first-name"
                                    label="First Name"
                                    variant="outlined"
                                    required
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    error={!!errors.firstName}
                                    helperText={errors.firstName}
                                />
                            </div>

                            <div>
                                <TextField
                                    name="lastName"
                                    id="last-name"
                                    label="Last Name"
                                    variant="outlined"
                                    required
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    error={!!errors.lastName}
                                    helperText={errors.lastName}
                                />
                            </div>

                            <div>
                                <TextField
                                    name="userName"
                                    id="username"
                                    label="Username"
                                    variant="outlined"
                                    required
                                    value={formData.userName}
                                    onChange={handleChange}
                                    error={!!errors.userName}
                                    helperText={errors.userName}
                                />
                            </div>

                            <div>
                                <TextField
                                    required
                                    id="email"
                                    label="Email"
                                    name="email"
                                    variant="outlined"
                                    value={formData.email}
                                    onChange={handleChange}
                                    error={!!errors.email}
                                    helperText={errors.email}
                                />
                            </div>

                            <div>
                                <TextField
                                    required
                                    id="password"
                                    label="Password"
                                    name="password"
                                    variant="outlined"
                                    type="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    error={!!errors.password}
                                    helperText={errors.password}
                                />
                            </div>

                            <div className="Sign-up">
                                <div className="buttons">
                                    <Button className="signup-b" variant="contained" type="submit">
                                        Sign Up
                                    </Button>
                                    <a className="google-link" href="http://localhost/google">
                                        <Button className="google-signup" variant="contained">
                                            <GoogleIcon />
                                        </Button>
                                    </a>
                                </div>
                                <Typography variant="p" className="go-login">
                                    Already Have An Account?<span> </span>
                                    <Link
                                        className="route-login"
                                        onClick={() => navigate("/login")}
                                        underline="none"
                                    >
                                        Login
                                    </Link>
                                </Typography>
                            </div>
                        </form>
                    </Box>
                </Container>
            </div>
        </div>
    );
}

export default Sign_up;