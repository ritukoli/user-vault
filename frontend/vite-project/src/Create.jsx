import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom'
import axios from "axios"

const Create = () => {
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [email, setEmail] = useState()
    const [role, setRole] = useState()
    const navigation = useNavigate()


    const submit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/createUser', { name, age, email, role })
            .then(result => console.log(result),
                setName(""),
                setAge(""),
                setEmail(""),
                setRole(""),
                navigation('/'))
            .catch(err => console.log(err))
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded shadow p-4">
                <h2 className="text-center mb-4">Create User</h2>
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter user name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Age</label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter age"
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Role</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter role"
                            onChange={(e) => setRole(e.target.value)}
                        />
                    </div>

                    <button className="btn btn-success w-100" type='submit'>
                        Create User
                    </button>
                </form>

            </div>

        </div>
    )
}

export default Create