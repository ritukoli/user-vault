import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const User = () => {
    const [users, setUsers] = useState([{
        name: "user1", age: "21", email: "user1@gmail.com", role: "employee", action: ""
    }])

    useEffect(() => {
        axios.get('http://localhost:5000').then(result => setUsers(result.data)).catch(err => console.log(err))
    },[])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/deleteUser/${id}`)
            .then(result => {
                console.log(result)
                window.location.reload()
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <h3 className='text-center mb-4'>User Management</h3>
                <Link to="/create" className="btn btn-success">Create User</Link>
                <table className="table table-striped table-hover text-center align-middle">
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
                            users.map((user) => (
                                <tr key={user._id}>
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <Link to={`/edit/${user._id}`} className='btn btn-primary btn-sm me-2'>Edit</Link>
                                        <button onClick={() => handleDelete(user._id)} className='btn btn-danger btn-sm'>delete</button>

                                    </td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default User