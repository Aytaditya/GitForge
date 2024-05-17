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

  const getProfile = async () => {
    setLoading(true);
    try {
      const userRes = await fetch('https://api.github.com/users/Aytaditya');
      const userProf = await userRes.json();
      setUserProfile(userProf);
      
      const repoRes = await fetch('https://api.github.com/users/Aytaditya/repos');
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
    getProfile();
  }, []);

  return (
    <div>
      <div className="m-4">
        <Search />
        <SortRepos />
        <div className="flex gap-4 flex-col lg:flex-row justify-center items-start">
          {userProfile && !loading && <ProfileInfo userProfile={userProfile} />}
          {repos.length && !loading && <Repos repos={repos} />}
          {loading && <Spinner />}
        </div>
       
      </div>
    </div>
  )
}

export default Home
