/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { createContext,useEffect,useState,useContext} from "react"
import {toast} from "react-hot-toast"

export const AuthContext=createContext()



export const AuthContextProvider=({children})=>{
    const [authUser,setAuthUser]=useState(null)
    const[loading,setLoading]=useState(true)  // to prevent navigation from explore,likes to home page

    const userLoggedIn=async()=>{

        try {
            setLoading(true);
            const res=await fetch('http://localhost:5000/api/auth/check',{credentials:"include"})

            const data=await res.json()

            setAuthUser(data.user) //either null or user objected
            
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        userLoggedIn() //calling function
    },[])

    return (
        <AuthContext.Provider value={{authUser,setAuthUser,loading}}>
            {children}
        </AuthContext.Provider>
    )
}

//we will import use useAuthContext where we have to use context we will destructure this and take out value that is given 
export const useAuthContext=()=>{
    return useContext(AuthContext)
}