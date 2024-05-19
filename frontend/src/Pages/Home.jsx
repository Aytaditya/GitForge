/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import Search from "../components/Search"
import SortRepos from "../components/SortRespos"
import ProfileInfo from "../components/ProfileInfo"
import Repos from "../components/Repos"
import { useEffect, useState } from "react"
import toast from 'react-hot-toast'

import Spinner from '../components/Spinner'

import { useAuthContext } from '../Context/authContext'

const Home = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortType, setSortType] = useState("recent");
  const [username, setUsername] = useState("");

  const { authUser } = useAuthContext();

  const border=""

  useEffect(() => {
    if (authUser && authUser.username) {
      setUsername(authUser.username);
    }
  }, [authUser]);

  const getProfile = async (username) => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/api/users/profile/${username}`, {
        method: 'GET',
      });

      const { userRes, repos } = await res.json();

      setSortType(''); // to remove the border of button 

      if (res.status === 404) {
        throw new Error("User Does not Exist");
      }

      setUserProfile(userRes);
      setRepos(repos);

      // to set my localstorage once
      if (!localStorage.getItem('userProfile')) {
        localStorage.setItem('userProfile', JSON.stringify(userRes));
      }
      

    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (username) {
      const timer = setTimeout(() => {
        getProfile(username);
      }, 1000);

      return () => clearTimeout(timer); // Cleanup the timeout if username changes
    }
  }, [username]);

  const onSearch = async (e, user) => {
    e.preventDefault();

    setLoading(true);
    setRepos([]);
    setUserProfile(null);
    setUsername(user);
  };

  const onSort = (sortType) => {
    if (sortType === 'recent') {
      repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)); // latest one on top
    }
    if (sortType === 'stars') {
      repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
    }
    if (sortType === 'forks') {
      repos.sort((a, b) => b.forks_count - a.forks_count);
    }

    setSortType(sortType);
    setRepos([...repos]); // to set the new repos 
  };

  return (
    <div>
      <div className="m-4">
        <Search onSearch={onSearch} />
        {repos.length > 0 && (<SortRepos sortType={sortType} onSort={onSort} />)}
        <div className="flex gap-4 flex-col lg:flex-row justify-center items-start">
          {userProfile && !loading && <ProfileInfo userProfile={userProfile} />}
          {!loading && <Repos repos={repos} border={border} />}
          {loading && <Spinner />}
        </div>
      </div>
    </div>
  );
};

export default Home;
