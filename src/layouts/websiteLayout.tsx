import CommonNavbarComponent from "../components/Common-Navbar"
import {Outlet} from "react-router-dom"
import CommonFooterComponent from "../components/Common-Footer"
import "../websiteCommon.scss"

const WebsiteLayout = () => {
  return (
    <div className="website-wrapper">
      <CommonNavbarComponent />
      <Outlet />
      <CommonFooterComponent />
    </div>
  )
}

export default WebsiteLayout
