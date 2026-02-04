import { useState } from "react";
import axios from "axios";
import { serverEndPoint } from "../config/appconfig";
import { useDispatch } from "react-redux";
function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        let newErrors = {};
        let isValid = true;

        if (formData.name.length === 0) {
            newErrors.name = "Name is required";
            isValid = false;
        }

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
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validate()) {
            try {
                const body = {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                };

                const response = await axios.post(
                    `${serverEndPoint}/auth/register`,
                    body
                );

                dispatch({
                    type:SET_USER,
                    payload: response.data.user
                })

            } catch (err) {
                if (err.response?.data?.errors) {
                    setErrors({
                        message: err.response.data.errors.join(", ")
                    });
                } else if (err.response?.data?.message) {
                    setErrors({
                        message: err.response.data.message
                    });
                } else {
                    setErrors({
                        message: "Something went wrong"
                    });
                }
            }
        }
    };

    return (
        <div className="container text-center">
            <h3>Register</h3>

            <form onSubmit={handleSubmit}>

                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                />
                <p style={{ color: "red" }}>{errors.name}</p>


                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                />
                <p style={{ color: "red" }}>{errors.email}</p>


                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                />
                <p style={{ color: "red" }}>{errors.password}</p>


                <button type="submit">Register</button>

                <p style={{ color: "red" }}>{errors.message}</p>

            </form>
        </div>
    );
}

export default Register;
