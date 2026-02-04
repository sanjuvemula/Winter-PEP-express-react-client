import { useState } from "react";
import axios from 'axios';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { serverEndPoint } from "../config/appconfig";
import { useDispatch } from "react-redux";
import { SET_USER } from "./redux/user/action";

function Login() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        let newErrors = {};
        let isValid = true;

        if (formData.email.length === 0) {
            newErrors.email = "Email is required";
            isValid = false;
        }

        if (formData.password.length === 0) {
            newErrors.password = "Password is required";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    }

    const handleSuccess = async (authRes) => {
        try {
            const res = await axios.post(`${serverEndPoint}/auth/google-auth`, {
                idToken: authRes.credential
            },
                {
                    withCredential: true
                }
            );

            // setUser(res.data.user);
            dispatch({
                type:SET_USER,
                payload:res.data.user
            })
        }
        catch (err) {
            console.log(err);
            setErrors({
                message: 'Error processing google Auth'
            })
        }
    };

    const handleError = (err) => {
        console.log(err);
        setErrors({
            message: 'Error in google Authorization flow'
        })
    };

    const handleSubmit = async (event) => {
        //Prevent default behaviour of form which is to do complete page reload.
        event.preventDefault();

        if (validate()) {
            try {

                const body = {
                    email: formData.email,
                    password: formData.password,
                };

                const config = { withCredentials: true };
                const response = await axios.post(`${serverEndPoint}/auth/login`, body, config);

                dispatch({
                    type:SET_USER,
                    payload:response.data.user
                })
            }
            catch (err) {
                console.log(err);

                if (err.response?.data?.code === "GOOGLE_SSO_ONLY") {
                    setErrors({
                        message: "Please log in using Google SSO"
                    });
                } else {
                    setErrors({
                        message: err.response?.data?.message || "Login failed"
                    });
                }
            }

        }
        else {
            console.log('Invalid form');
        }
    }

    return (
        <div className="container text-center">
            <div>
                <h3>Login to continue</h3>
                {errors.message && (errors.message)}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email:</label>
                        <input
                            className="form-control"
                            type="text"
                            name="email"
                            onChange={handleChange}
                        />
                        {errors.email && (errors.email)}
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            className="form-control"
                            type="password"
                            name="password"
                            onChange={handleChange}
                        />
                        {errors.password && (errors.password)}
                    </div>

                    <div>
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
            <div className="row justify-content-center">
                <div className="col-6">
                    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
                        <GoogleLogin
                            onSuccess={handleSuccess}
                            onError={handleError} />
                    </GoogleOAuthProvider>
                </div>
            </div>
        </div>
    );
}

export default Login;