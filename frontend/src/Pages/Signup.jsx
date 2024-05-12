import { FaGithub } from "react-icons/fa";
import { FaUnlockAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
      <div className="w-full rounded-lg shadow md:mt-0  sm:max-w-md xl:p-0 bg-glass">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold md:text-2xl text-center">
            Create an Account
            </h1>
            <button type="button" className="text-white bg-[#24292F]
             hover:bg-[#24292F]/90 focus:ring-4 focus-ring-[#24292F]/50 font-medium rounded-lg flex gap-2 p-2 items-center w-full text-center justify-center  ">
              <FaGithub className="h-6 w-6" /> Sign up with Github
            </button>

            <p className="text-gray-400">
              By Signing up, unlock all the features of the app 
              <span>
                <FaUnlockAlt className="h-3 w-3 inline mx-1" />
              </span>
            </p>
            <p className="text-sm font-light text-[#9c9090] ">
              Already Have an Account?
              <Link to="/login" className=" font-medium text-blue-500 hover:underline mx-1"> Login</Link>
            </p>
          </div>
      </div>
    </div>
  )
}

export default Signup
