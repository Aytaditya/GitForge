/* eslint-disable no-unused-vars */
import { IoLocationOutline } from "react-icons/io5";
import { RiGitRepositoryFill, RiUserFollowFill, RiUserFollowLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { TfiThought } from "react-icons/tfi";
import { FaEye } from "react-icons/fa";
const ProfileInfo = () => {

    const userProfile = {
      avatar_url: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
      bio: "👨🏻‍💻👨🏻‍💻👨🏻‍💻",
      email: "johndoe@gmail.com",
      followers: 20,
      following: 5,
      html_url: "https://github.com/Aytaditya",
      location: "Existing on, Earth",
      name: "Aditya Aryan",
      public_gists: 0,
      public_repos: 50,
      twitter_username: "Aytaditya",
      login: "aytaditya",
    };
  return (
    
    <div className="lg:w-1/3 w-full flex flex-col gap-2 md:sticky md:top-10 ">
      <div className="bg-glass rounded-lg p-4 hover:bg-gray-600/10">
        <div className="flex gap-3 items-center">
          {/* image of user */}
        <a href={userProfile?.html_url} target='_blank' rel='noreferrer'>
						<img src={userProfile?.avatar_url} className='rounded-md w-24 h-24 mb-2' alt='' />
					</a>

          {/* view ongithub link */}
          <div className='flex gap-2 items-center flex-col'>
						<a
							href={userProfile.html_url}
							target='_blank'
							rel='noreferrer'
							className='bg-glass font-medium w-full text-xs p-2 rounded-md cursor-pointer border border-blue-400 flex items-center gap-2'
						>
							<FaEye size={16} />
							View on Github
						</a>
					</div>

        </div>

        {/* bio of user if exist*/}
       {userProfile.bio && (
       <div className='flex items-center gap-2'>
       <TfiThought />
       <p className='text-sm'>{userProfile?.bio.substring(0, 60)}...</p>
     </div>

       )}

       {/* userlocation  if exist*/}
       {userProfile.location && (
          <div className='flex items-center gap-2'>
          <IoLocationOutline />
          {userProfile?.location}
        </div>
       )}

       {/* twitter name if exist */}
       {userProfile.twitter_username &&(
        <a
        href={`https://twitter.com/${userProfile.twitter_username}`}
        target='_blank'
        rel='noreferrer'
        className='flex items-center gap-2 hover:text-sky-500'
      >
        <FaXTwitter />
        {userProfile?.twitter_username}
      </a>
       )}

      </div>
    </div>
  )
}

export default ProfileInfo
