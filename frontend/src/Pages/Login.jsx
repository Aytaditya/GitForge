import {Link} from 'react-router-dom'
import { FaGithub } from "react-icons/fa";

const Login = () => {

  const handleLogin=()=>{
    window.open("http://localhost:5000/api/auth/github","_self")
  }
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0 ">
        <div className="w-full bg-glass rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold md:text-2xl text-center">
               Login to
               <span className="mx-1 text-blue-400">
                 GitForge
               </span>
            </h1>
            <button type="button" 
            className="text-white bg-[#24292F]
            hover:bg-[#24292F]/90 focus:ring-4 focus-ring-[#24292F]/50 font-medium rounded-lg flex gap-2 p-2 items-center w-full text-center justify-center"
            
            onClick={handleLogin}
            >
              <FaGithub className="h-6 w-6" /> Login with Github
            </button>
            <p className="text-sm font-light text-[#9c9090] ">
              Don&apos;t Have an Account?
              <Link to="/signup" className=" font-medium text-blue-500 hover:underline mx-1"> Sign in</Link>
            </p>

          </div>
         

        </div>
    </div>
  )
}

export default Login
