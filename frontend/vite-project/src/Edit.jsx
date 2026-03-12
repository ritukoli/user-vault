import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios"


const Edit = () => {
    const { id } = useParams()
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [email, setEmail] = useState()
    const [role, setRole] = useState()
    const navigation = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:5000/getUser/${id}`)
            .then(result => {
                console.log(result)
                setName(result.data.name)
                setAge(result.data.age)
                setEmail(result.data.email)
                setRole(result.data.role)
            })
            .catch(err => console.log(err))
    },[id]) 

    const update = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:5000/updateUser/${id}`, { name, age, email, role })
            .then(result => {console.log(result)
                navigation('/')})
            .catch(err => console.log(err))
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded shadow p-4">
                <h2 className="text-center mb-4">Update User</h2>

                <form onSubmit={update}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter user name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Age</label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Role</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        />
                    </div>

                    <button className="btn btn-success w-100" type='submit'>
                        Update User
                    </button>
                </form>

            </div>

        </div>
    )
}

export default Edit