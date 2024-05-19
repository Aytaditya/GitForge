/* eslint-disable no-unused-vars */
import { useEffect, useState} from "react";
import { GrLogout } from "react-icons/gr";
import { useAuthContext } from '../Context/authContext'
import {toast} from "react-hot-toast"
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const size=26;
    let navigate = useNavigate();
    const {authUser,setAuthUser}=useAuthContext();
    const [image, setImage] = useState(null);

   
    useEffect(() => {
      const userProfile = JSON.parse(localStorage.getItem('userProfile'));
      if (userProfile && userProfile.avatar_url) {
          setImage(userProfile.avatar_url);
      }
  }, []);


    const handleLogout=async()=>{
      try{
        const res=await fetch('http://localhost:5000/api/auth/logout')
        const data=res.json();
        setAuthUser(null);
        navigate("/login")
        toast.success("Logged Out Successfully")
      }
      catch(error){
        toast.error(error.message)
      }
    }
    

  return (
    <>
    <img
        src={image}
        alt="Profile logo"
        className="w-10 h-10 rounded-full border border-gray-800 "/>

    <div className="cursor-pointer flex items-center p-2 rounded-lg bg-glass mt-auto  transition-colors duration-200 border-none  hover:bg-gray-800" 
      onClick={handleLogout}    
    >
        <GrLogout size={size} />
    </div>
      
    </>
  )
}

export default Logout
