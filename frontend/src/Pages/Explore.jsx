/* eslint-disable no-unused-vars */
import { CiCircleMore } from "react-icons/ci";
import { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import toast from 'react-hot-toast'
import Repos from "../components/Repos";

import Spinner from '../components/Spinner'

const Explore = () => {
  let [showMore, setShowMore] = useState(false);
  const [repos,setRepos]=useState([]);
  const [loading,setLoading]=useState(false);
  const [selectedLanguage,setSelectedLanguage]=useState('');
  const border="none";


  const handleClick=(e)=>{
    if(showMore){
      setShowMore(false);
    }
    else{
      setShowMore(true);
    }
  }

  const exploreRepo=async(language)=>{
    console.log(language);

   try {
    const url=await fetch(`https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=30`,{
      headers:{
        authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`
      }
    });

    setLoading(true);
    setSelectedLanguage(language);

    const response= await url.json();
    setRepos(response.items);
    console.log(response.items);
    
   } catch (error) {
      toast.error('Error in fetching data')
   }finally{
      setLoading(false);
   }
  }

  return (
    <div className="px-4 ">
      <div className="bg-glass max-w-3xl mx-auto rounded-md p-4">
        <h1 className="text-xl font-bold text-center">Explore Popular Repositories</h1>
        <div className="flex flex-wrap gap-2 my-5 justify-center">
          <img src="/javascript.svg" alt="Javascript" className="h-11 sm:h-20 cursor-pointer" title="Javascript" onClick={()=>exploreRepo('javascript')}/>
          <img src="/typescript.svg" alt="typescript" className="h-11 sm:h-20 cursor-pointer"title="Typescript" onClick={()=>exploreRepo('typescript')} />
          <img src="/c++.svg" alt="C++" className="h-11 sm:h-20 cursor-pointer" 
          title="C++" onClick={()=>exploreRepo('cpp')} />
          <img src="/python.svg" alt="Python" className="h-11 sm:h-20 cursor-pointer" 
          title="Python" onClick={()=>exploreRepo('python')} />
          <img src="/java.svg" alt="Java" className="h-11 sm:h-20 cursor-pointer" 
          title="Java" onClick={()=>exploreRepo('java')}/>
          <img src="/go.svg" alt="GoLang" className="h-11 sm:h-20 cursor-pointer" title="Go" onClick={()=>exploreRepo('go')}/>
          {showMore &&(<img src="/swift.svg" alt="Swift" className="h-11 sm:h-20 cursor-pointer" title="Swift" onClick={()=>exploreRepo('swift')}/>)}
          {showMore && (<img src="csharp.svg" alt="C#" className="h-11 sm:h-20 cursor-pointer" title="C#" onClick={()=>exploreRepo('csharp')} />
          )}
          {showMore && (
            <img src="/dart.svg" alt="More" className="h-11 sm:h-20 cursor-pointer" title="Dart" onClick={()=>exploreRepo('dart')} /> 
            )}
         
          {!showMore &&(< CiCircleMore size={30} className="mt-8 sm:h-15 cursor-pointer" onClick={handleClick}/>)}
          {showMore &&(<IoMdCloseCircleOutline size={30} className="mt-8 sm:h-15 cursor-pointer" onClick={handleClick}/>)}
          

        </div>

        {repos.length>0 && (
          <h2 className='text-lg font-semibold text-center my-4'>
          <span className='bg-blue-100 text-blue-800 font-medium me-2 px-2.5 py-0.5 rounded-full my-5 '>
            {selectedLanguage.toUpperCase()}{" "}
          </span>
          Repositories
        </h2>
        )}
        {loading && (
          <Spinner/>
        )}
        {repos.length>0 && !loading &&(
          <Repos repos={repos} border={border}/>
          )}
      </div>
      
    </div>
  )
}

export default Explore
