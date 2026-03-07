import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const User = () => {
    const [users, setusers] = useState([{
        name: "user1", age: "21", email: "user1@gmail.com", role: "employee", action: ""
    }])
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <h3 className='text-center mb-4'>User Management</h3>
<Link to="/create" className="btn btn-success">Create User</Link>                <table className="table table-striped table-hover text-center align-middle">
                    <thead className="table-dark">
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <button className="btn btn-primary btn-sm me-2">edit</button>
                                        <button className="btn btn-danger btn-sm">delete</button>
                                    </td>
                                </tr>
                            ))
                        }


                 