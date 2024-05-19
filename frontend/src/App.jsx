import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import Likes from './Pages/Likes'
import Explore from './Pages/Explore'

import Sidebar from './components/Sidebar'

import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './Context/authContext'

function App() {
  const{authUser}=useAuthContext();
  console.log("authenticated user is ",authUser)


  return (
    <div className='flex text-white'>
      <Sidebar />
      <div className='max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1'>
        <Routes>
          <Route path='/' element={authUser ? <Home />: <Navigate to="/signup"/>} />
          <Route path='/login' element={!authUser ? <Login /> : <Navigate to="/"/>} />
          <Route path='/signup' element={!authUser ? <Signup /> :<Navigate to="/"/>}/>
          <Route path='/likes' element={authUser ? <Likes /> : <Navigate to="/login"/> }/>
          <Route path='/explore' element={authUser ? <Explore /> :<Navigate to="/login"/> } />
        </Routes>

        <Toaster />
      </div>
    </div>
  )
}

export default App
