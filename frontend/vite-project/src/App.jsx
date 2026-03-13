import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import User from './User';
import Create from './Create';
import Edit from './Edit';
import LoginUser from './authentication/LoginUser'
import RegisterUser from './authentication/RegisterUser'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<User/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>
      <Route path='/login' element={<LoginUser/>}/>
      <Route path='/register' element={<RegisterUser/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
