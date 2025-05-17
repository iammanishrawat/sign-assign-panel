import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SidebarComponent from './components/Sidebar'
import HeaderComponent from './components/Header'
import DashboardPage from './pages/dashboard-page'
import ProfilePage from './pages/profile-page'
import AddressBookPage from './pages/addressbook-page'
import TicketPage from './pages/tickets-page'

const App = () => {
  return (
    <div className="main">
      <Router basename="/user-dashboard">
        <div className="flex gap-4 h-screen">
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
                <Route path="/addressbook" element={<AddressBookPage />} />
                <Route path="/tickets" element={<TicketPage />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
