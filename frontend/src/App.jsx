import { Routes, Route } from 'react-router-dom'
import './App.css'

import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import Likes from './Pages/Likes'
import Explore from './Pages/Explore'

import Sidebar from './components/Sidebar'

import { Toaster } from 'react-hot-toast'

function App() {


  return (
    <div className='flex text-white'>
      <Sidebar />
      <div className='max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/likes' element={<Likes />} />
          <Route path='/explore' element={<Explore />} />
        </Routes>

        <Toaster />
      </div>
    </div>
  )
}

export default App
