import {Outlet} from "react-router-dom"
import {useEffect} from "react"

import SidebarComponent from "../components/Sidebar"
import HeaderComponent from "../components/Header"
import CommonNavbarComponent from "../components/Common-Navbar"
import CommonFooterComponent from "../components/Common-Footer"
import "../panelCommon.scss"

const BASE_WEB_PATH = import.meta.env.VITE_BASE_PATH_WEB as string

const PanelLayout = () => {
  // useEffect(() => {
  //   const loadSharedSection = async (id: string, url: string) => {
  //     try {
  //       const res = await fetch(url, { method: "GET", credentials: 'include' }); // Include session/cookies
  //       const html = await res.text();
  //       const container = document.getElementById(id);
  //       if (container) container.innerHTML = html;
  //     } catch (err) {
  //       console.error(`Failed to load ${id}:`, err);
  //     }
  //   };

  //   loadSharedSection('global-header', `${BASE_WEB_PATH}/shared/header`);
  //   loadSharedSection('global-footer', `${BASE_WEB_PATH}/shared/footer`);
  // }, [])

  return (
    <div className="main">
      <CommonNavbarComponent />
      {/* <div id="global-header" /> */}
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
      {/* <div id="global-footer" /> */}
    </div>
  )
}
export default PanelLayout
