/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import Search from "../components/Search"
import SortRepos from "../components/SortRespos"
import ProfileInfo from "../components/ProfileInfo"
import Repos from "../components/Repos"
import { useEffect, useState,useCallback } from "react"
import toast from 'react-hot-toast'

const Home = () => {
  
  const [userProfile,setUserProfile]=useState(null);
  const [repos,setRepos]=useState([]);
  const [loading,setLoading]=useState(false);
  const [sortType,setSortType]=useState("recent");

  const getProfile=useCallback(async ()=>{

    setLoading(true);
    try {

      // userRes has a response object that contains many things like status, headers, etc. We need to extract the JSON from it. so that is why we are using .json() to extract the JSON from the response object.
      
      const userRes=await fetch('https://api.github.com/users/Aytaditya');
      const userProf=await userRes.json();
      setUserProfile(userProf);
      console.log(userProf);
     
      const repoRes= await fetch(userProfile.repos_url);
      const repos=await repoRes.json();
      setRepos(repos);
      console.log(repos);
      
      setLoading(false);

      //now we will pass the profile as prop 

    } catch (error) {

      toast.error(error.message);

    } finally {
      setLoading(false);
    }
    
    
  },[]);

  useEffect(()=>{
    getProfile();
  },[getProfile]) // Empty dependency array means the effect runs only once or we can do like this [getProfile] so that it runs only when getProfile changes

  return (
      <div>
      <div className="m-4">
        <Search/>
        <SortRepos/>
        <div className="flex gap-4 flex-col lg:flex-row justify-center items-start">
        <ProfileInfo userProfile={userProfile}/>
        <Repos/>
        </div>
      </div>
     
    </div>
  )
}

export default Home
