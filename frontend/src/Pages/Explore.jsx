

const Explore = () => {
  return (
    <div className="px-4 ">
      <div className="bg-glass max-w-2xl mx-auto rounded-md p-4">
        <h1 className="text-xl font-bold text-center">Explore Popular Repositories</h1>
        <div className="flex flex-wrap gap-2 my-2 justify-center">
          <img src="/javascript.svg" alt="Javascript" className="h-11 sm:h-20 cursor-pointer" />
          <img src="/typescript.svg" alt="typescript" className="h-11 sm:h-20 cursor-pointer" />
          <img src="/c++.svg" alt="C++" className="h-11 sm:h-20 cursor-pointer" />
          <img src="/python.svg" alt="Python" className="h-11 sm:h-20 cursor-pointer" />
          <img src="/java.svg" alt="Java" className="h-11 sm:h-20 cursor-pointer" />
          <img src="/go.svg" alt="GoLang" className="h-11 sm:h-20 cursor-pointer" />
          <img src="/swift.svg" alt="Swift" className="h-11 sm:h-20 cursor-pointer" />

        </div>
      </div>
      
    </div>
  )
}

export default Explore
