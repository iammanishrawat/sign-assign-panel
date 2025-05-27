import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DashboardPage from './pages/panel-pages/dashboard-page'
import ProfilePage from './pages/panel-pages/profile-page'
import AddressBookPage from './pages/panel-pages/addressbook-page'
import TicketPage from './pages/panel-pages/tickets-page'
import OrderPage from './pages/panel-pages/orders-page'
import DesignPage from './pages/panel-pages/designs-page'
import PanelLayout from './layouts/panelLayout'
import WebsiteLayout from './layouts/websiteLayout'
import WebHomePage from './pages/website-pages/home-page'
import ProductListPage from './pages/website-pages/productList-page'
import ProductDetailPage from './pages/website-pages/product-detail-page'

const App = () => {
  return (
    <Router basename="/user-dashboard">
      <Routes>
        {/* Website Layout */}
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<WebHomePage />} />
          <Route path="product-list" element={<ProductListPage />} />
          <Route path="product-detail" element={<ProductDetailPage />} />
          {/* You can add other public routes here later */}
        </Route>

        <Route path="/" element={<PanelLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="addressbook" element={<AddressBookPage />} />
          <Route path="orders" element={<OrderPage />} />
          <Route path="designs" element={<DesignPage />} />
          <Route path="tickets" element={<TicketPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
