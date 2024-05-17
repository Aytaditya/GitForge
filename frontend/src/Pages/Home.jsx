/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import Search from "../components/Search"
import SortRepos from "../components/SortRespos"
import ProfileInfo from "../components/ProfileInfo"
import Repos from "../components/Repos"
import { useEffect, useState } from "react"
import toast from 'react-hot-toast'

import Spinner from '../components/Spinner'

const Home = () => {
  
  const [userProfile, setUserProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortType, setSortType] = useState("recent");
  const [username, setUsername] = useState("Aytaditya");

  const getProfile = async (username) => {
    setLoading(true);
    try {
      const userRes = await fetch(`https://api.github.com/users/${username}`);
      const userProf = await userRes.json();

      setSortType('') //to remove the border of button 

      if (userRes.status === 404) {
        throw new Error("User Does not Exist");
      }
      setUserProfile(userProf);
      
      // console.log(userProf);
      
      
      const repoRes = await fetch(`https://api.github.com/users/${username}/repos`);

      const repos = await repoRes.json();
      setRepos(repos);
      console.log(repos);

    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProfile(username);
  }, [username]);

  const onSearch=async(e,user)=>{
      e.preventDefault();

      setLoading(true);
      setRepos([]);
      setUserProfile(null);
      setUsername(user);
      

      await getProfile(user);
      
  }

  const onSort=(sortType)=>{
    if(sortType==='recent'){
      repos.sort((a,b)=>new Date(b.created_at)-new Date(a.created_at)); //latest one on top

    }
    if(sortType==='stars'){
      repos.sort((a,b)=>b.stargazers_count-a.stargazers_count);
    }
    if (sortType==='forks'){
      repos.sort((a,b)=>b.forks_count-a.forks_count);
    }

    setSortType(sortType);
    setRepos([...repos]); //to set the new repos 
  }

  return (
    <div>
      <div className="m-4">
        <Search onSearch={onSearch}/>
        {repos.length>0 && (<SortRepos sortType={sortType} onSort={onSort}/> )}
        <div className="flex gap-4 flex-col lg:flex-row justify-center items-start">
          {userProfile && !loading && <ProfileInfo userProfile={userProfile} />}
          {!loading && <Repos repos={repos} />}
          {loading && <Spinner />}
        </div>
       
      </div>
    </div>
  )
}

export default Home
