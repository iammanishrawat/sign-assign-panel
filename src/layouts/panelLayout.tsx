import SidebarComponent from "../components/Sidebar"
import HeaderComponent from "../components/Header"
import CommonNavbarComponent from "../components/Common-Navbar"
import CommonFooterComponent from "../components/Common-Footer"
import "../panelCommon.scss"
import {Outlet} from "react-router-dom"

const PanelLayout = () => {
  return (
    <div className="main">
      <CommonNavbarComponent />
      <div className="flex gap-4 h-screen my-4">
        <div className="sidebar-area">
          <SidebarComponent />
        </div>
        <div className="main-area">
          <HeaderComponent />
          <div className="common-area p-4">
            <Outlet />
          </div>
        </div>
      </div>
      <CommonFooterComponent />
    </div>
  )
}
export default PanelLayout
