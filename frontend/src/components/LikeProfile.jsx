/* eslint-disable no-unused-vars */

import { FaHeart } from "react-icons/fa";
import { toast } from 'react-hot-toast';
import {useAuthContext} from '../Context/authContext' 


const LikeProfile = ({ userProfile }) => {

  const {authUser} = useAuthContext()
  
  const isOwnProfile=authUser?.login===userProfile.login

  const handleLike = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/users/like/${userProfile.login}`, {
        method: 'POST',
        credentials: 'include',
      });

      const data = await res.json();

      if (!res.ok) { // If the response status code is not ok, throw an error with the message
        throw new Error(data.message);
      }

      toast.success(data.message);

    } catch (error) {
      toast.error(error.message);
    }
  };

  if(!authUser || isOwnProfile){ 
    return null
  }

  return (
    <>
    <button className="p-2 text-xs font-medium rounded-md bg-glass border border-blue-500 flex items-center gap-2" onClick={handleLike}>
    <FaHeart size={16}/> Like User Profile
  </button>
  </>
  );
};

export default LikeProfile;
