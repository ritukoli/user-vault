import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const RegisterUser = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()


    const submit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/register', { name, email, password }).then(res => {console.log(res)
             navigate("/login") })
             .catch(err => console.log(err))
    }

    return (
        <div className="d-flex vh-100 justify-content-center align-items-center bg-light">
            <div className="bg-white p-4 rounded shadow-lg col-md-5">

                <form onSubmit={submit}>

                    <h2 className="text-center mb-4 fw-bold">Make an account</h2>

                    <div className="mb-4">
                        <label className="form-label fw-semibold">Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="form-control form-control-lg"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="form-label fw-semibold">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="form-control form-control-lg"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="form-label fw-semibold">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="form-control form-control-lg"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="text-center mb-4">
                        <button type="submit" className="btn btn-success px-5">
                            Register
                        </button>
                    </div>
                </form>

                <div className="d-flex justify-content-center align-items-center gap-2">
                    <p className="mb-0">Already have an account?</p>

                    <Link to="/login" className="btn btn-primary btn-sm">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default RegisterUser