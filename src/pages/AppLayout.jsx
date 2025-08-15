import Sidebar from "../components/Sidebar";
import TopBar from "../components/Topbar";
import { Outlet } from "react-router";
import "../app.css"

export default function AppLayout() {
  return (
    // <div  style={{
    //   backgroundImage: `url('/back2.jpg')`,
    //   backgroundSize: "cover" , // Stretch the image to cover the width and height
    //   backgroundPosition: "center", // Keep the image centered (can be omitted since it will stretch)
    //   backgroundRepeat: "repeat", // Prevent the image from repeating
    //   width: "100%", 
    //   maxHeight: "100vh",  // Allows the div to expand with content
    //   overflowX:"hidden"
    //   }} >
    // <TopBar/>
    //  <div className="d-flex w-full">
    //  <div>
    //    <Sidebar/>
    //    </div>
   
      
    //    <div><Outlet/>
    //    </div>
      
    // </div>
    // </div>
     <div
      style={{
        backgroundImage: `url('/back2.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        width: '100%',
        overflowX: 'hidden',
      }}
    >
      {/* Fixed TopBar */}
      <div className="position-fixed w-100" style={{ zIndex: 1000, top: 0 }}>
        <TopBar />
      </div>
      <div className="d-flex w-100">
        {/* Fixed Sidebar */}
        <div
          className="vh-100 position-fixed"
          style={{ width: 'auto', top: '56px', zIndex: 900 }} // Adjust top for TopBar height
        >
          <Sidebar />
        </div>
        {/* Scrollable Outlet */}
        <div
          className="flex-grow-1 custom-margin"
          style={{ padding: '20px', marginTop: '56px' }} // Offsets for Sidebar and TopBar
        >
          <Outlet />
        </div>
      </div>
    </div>
  )
}
