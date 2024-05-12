import { GrLogout } from "react-icons/gr";

const Logout = () => {
    const size=26;
  return (
    <>
    <img
        src="https://avatar.iran.liara.run/public/boy"
        alt="Profile logo"
        className="w-10 h-10 rounded-full border border-gray-800 "/>

    <div className="cursor-pointer flex items-center p-2 rounded-lg bg-glass mt-auto  transition-colors duration-200  hover:bg-gray-800">
        <GrLogout size={size} />
    </div>
      
    </>
  )
}

export default Logout
