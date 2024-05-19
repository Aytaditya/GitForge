/* eslint-disable no-unused-vars */

import { FaHeart } from "react-icons/fa"


const LikeProfile = ({userProfile}) => {
  const handleLike=async()=>{
    console.log("profile liked")
  }
  return (
    <button className="p-2 text-xs font-medium rounded-md bg-glass border border-blue-500 flex items-center gap-2" onClick={handleLike}>
      <FaHeart size={16}/> Like User Profile
    </button>
  )
}

export default LikeProfile
