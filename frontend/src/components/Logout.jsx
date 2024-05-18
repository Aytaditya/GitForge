/* eslint-disable no-unused-vars */
import { useEffect, useState} from "react";
import { GrLogout } from "react-icons/gr";

const Logout = () => {
    const size=26;

    const [image, setImage] = useState(null);
    
    useEffect(() => {
      const userProfile = JSON.parse(localStorage.getItem('userProfile'));
      if (userProfile && userProfile.avatar_url) {
          setImage(userProfile.avatar_url);
      }
  }, []);
    

  return (
    <>
    <img
        src={image}
        alt="Profile logo"
        className="w-10 h-10 rounded-full border border-gray-800 "/>

    <div className="cursor-pointer flex items-center p-2 rounded-lg bg-glass mt-auto  transition-colors duration-200 border-none  hover:bg-gray-800">
        <GrLogout size={size} />
    </div>
      
    </>
  )
}

export default Logout
