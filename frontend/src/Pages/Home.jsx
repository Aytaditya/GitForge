import Search from "../components/Search"
import SortRepos from "../components/SortRespos"
import ProfileInfo from "../components/ProfileInfo"
import Repos from "../components/Repos"

const Home = () => {
  return (
    <div>
      <div className="m-4">
        <Search/>
        <SortRepos/>
        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
        <ProfileInfo/>
        <Repos/>
        </div>
      </div>
     
    </div>
  )
}

export default Home
