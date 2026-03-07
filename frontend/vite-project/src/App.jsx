import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import User from './User';
import Create from './Create';
import Delete from './Delete';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<User/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/delete' element={<Delete/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
