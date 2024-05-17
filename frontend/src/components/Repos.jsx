import Repo from '../components/Repo'


const Repos = ({repos}) => {
  return (
    <div className="lg:w-2/3 w-full bg-glass rounded-lg px-8 py-6">
      <ol className="relative border-s border-gray-200 ">
        {repos.map(repos=>(
         <Repo key={repos.id} repos={repos} />
        ))}

        {repos.length===0 && <div className="flex items-center justify-center h-32">No Repositories Found</div>}

      </ol>
    </div>
  )
}

export default Repos
