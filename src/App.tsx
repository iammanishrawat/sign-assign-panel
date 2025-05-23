import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SidebarComponent from './components/Sidebar'
import HeaderComponent from './components/Header'
import DashboardPage from './pages/dashboard-page'
import ProfilePage from './pages/profile-page'
import AddressBookPage from './pages/addressbook-page'
import TicketPage from './pages/tickets-page'
import OrderPage from './pages/orders-page'
import DesignPage from './pages/designs-page'
import CommonNavbarComponent from './components/Common-Navbar'
import CommonFooterComponent from './components/Common-Footer'

const App = () => {
  return (
    <div className="main">
      <Router basename="/user-dashboard">
      <CommonNavbarComponent />
        <div className="flex gap-4 h-screen my-4">
          <div className="sidebar-area">
            <SidebarComponent />
          </div>
          <div className="main-area">
            <HeaderComponent />
            <div className="common-area">
              <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/addressbook" element={<AddressBookPage />} />
                <Route path="/orders" element={<OrderPage />} />
                <Route path="/designs" element={<DesignPage />} />
                <Route path="/tickets" element={<TicketPage />} />
              </Routes>
            </div>
          </div>
        </div>
        <CommonFooterComponent />
      </Router>
    </div>
  )
}

export default App
