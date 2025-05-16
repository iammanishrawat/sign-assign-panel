import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SidebarComponent from "./components/Sidebar";
import HeaderComponent from "./components/Header";
import DashboardPage from "./pages/dashboard-page";
import ProfilePage from "./pages/profile-page";


const App = () => {
  return <div className="main">
    <Router>
      <div className='flex gap-4 h-screen'>
        <div className="left-area">
          <SidebarComponent />
        </div>
        <div className="right-area">
          <HeaderComponent />
          <div className="common-area">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  </div>
}

export default App
