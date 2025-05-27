import CommonNavbarComponent from '../components/Common-Navbar'
import { Outlet } from 'react-router-dom'
import CommonFooterComponent from '../components/Common-Footer'
import '../websiteCommon.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

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
