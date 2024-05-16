/* eslint-disable no-unused-vars */
import { CiCircleMore } from "react-icons/ci";
import { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Explore = () => {
  let [showMore, setShowMore] = useState(false);

  const handleClick=(e)=>{
    if(showMore){
      setShowMore(false);
    }
    else{
      setShowMore(true);
    }
  }
  return (
    <div className="px-4 ">
      <div className="bg-glass max-w-3xl mx-auto rounded-md p-4">
        <h1 className="text-xl font-bold text-center">Explore Popular Repositories</h1>
        <div className="flex flex-wrap gap-2 my-5 justify-center">
          <img src="/javascript.svg" alt="Javascript" className="h-11 sm:h-20 cursor-pointer" title="Javascript"/>
          <img src="/typescript.svg" alt="typescript" className="h-11 sm:h-20 cursor-pointer"title="Typescript" />
          <img src="/c++.svg" alt="C++" className="h-11 sm:h-20 cursor-pointer" 
          title="C++"  />
          <img src="/python.svg" alt="Python" className="h-11 sm:h-20 cursor-pointer" 
          title="Python" />
          <img src="/java.svg" alt="Java" className="h-11 sm:h-20 cursor-pointer" 
          title="Java" />
          <img src="/go.svg" alt="GoLang" className="h-11 sm:h-20 cursor-pointer" title="Go"/>
          {showMore &&(<img src="/swift.svg" alt="Swift" className="h-11 sm:h-20 cursor-pointer" title="Swift"/>)}
          {showMore && (<img src="csharp.svg" alt="C#" className="h-11 sm:h-20 cursor-pointer" title="C#" />
          )}
          {showMore && (
            <img src="/dart.png" alt="More" className="h-11 sm:h-20 cursor-pointer" title="Dart" /> 
            )}
         
          {!showMore &&(< CiCircleMore size={30} className="mt-8 sm:h-15 cursor-pointer" onClick={handleClick}/>)}
          {showMore &&(<IoMdCloseCircleOutline size={30} className="mt-8 sm:h-15 cursor-pointer" onClick={handleClick}/>)}
          

        </div>
      </div>
      
    </div>
  )
}

export default Explore
