import { Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import Likes from './Pages/Likes'
import Explore from './Pages/Explore'

function App() {
 

  return (
    <div className='flex'>
      
      <h1 className='text-red-500 font-mono font-bold text-3xl'>App</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/likes' element={<Likes />} />
        <Route path='/explore' element={<Explore />} />
      </Routes>
    </div>
  )
}

export default App
