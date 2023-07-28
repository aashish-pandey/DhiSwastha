import Mainfeed from "../components/Newsfeed/Mainfeed";
import Navbar from "../components/Newsfeed/Navbar";
import Sidebar from "../components/Newsfeed/Sidebar";
import Widgets from "../components/Newsfeed/Widgets";
import './Newsfeed.css'

export default function Newsfeed() {
  return (
    <>
        <Navbar/>
        <div className="newsFeedN">
          {/* <Sidebar className = "sidebarN"/> */}
          <Mainfeed/>
          {/* <Widgets className = "widgetsN"/> */}
        </div>
    </>
  )
}
