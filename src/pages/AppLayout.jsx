import Sidebar from "../components/Sidebar";
import TopBar from "../components/Topbar";
import { Outlet } from "react-router";
import "../app.css"

export default function AppLayout() {
  return (
    <div  style={{
      backgroundImage: `url('/back2.jpg')`,
      backgroundSize: "cover" , // Stretch the image to cover the width and height
      backgroundPosition: "center", // Keep the image centered (can be omitted since it will stretch)
      backgroundRepeat: "repeat", // Prevent the image from repeating
      width: "100%", 
      maxHeight: "100vh",  // Allows the div to expand with content
      overflowX:"hidden"
      }} >
    <TopBar/>
    <div className="d-flex">
       <div>
       <Sidebar/>
       </div>
      <Outlet/>
    </div>
    </div>
  )
}
