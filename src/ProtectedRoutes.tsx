import {useEffect} from "react"
import {Route, Routes} from "react-router-dom"

import {useAuth} from "./context/AuthContext"
import {useAppSelector} from "./hooks/useAppSelector"
import PanelLayout from "./layouts/panelLayout"
import AddressBookPage from "./pages/panel-pages/addressbook-page"
import BusinessClientPage from "./pages/panel-pages/business-client-page"
import DashboardPage from "./pages/panel-pages/dashboard-page"
import DesignPage from "./pages/panel-pages/designs-page"
import OrderPage from "./pages/panel-pages/orders-page"
import ProfilePage from "./pages/panel-pages/profile-page"
import TicketPage from "./pages/panel-pages/tickets-page"

import {Role} from "./App"

const ProtectedRoutes = ({tokenChecked}: {tokenChecked: boolean}) => {
  const {logout} = useAuth()

  const {me, status} = useAppSelector(state => state.auth)

  useEffect(() => {
    if (tokenChecked && !me && status === "idle") {
      console.warn("User not logged in. Token missing or invalid.")
      logout()
    }
  }, [tokenChecked, me, status, logout])

  return (
    <Routes>
      <Route path="/" element={<PanelLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="address-book" element={<AddressBookPage />} />
        <Route path="business-clients" element={<BusinessClientPage />} />
        {me?.roleId && [Role.BUSINESS_ADMIN, Role.BUSINESS_STAFF].includes(me.roleId) && (
          <Route path="clients" element={<BusinessClientPage />} />
        )}
        <Route path="orders" element={<OrderPage />} />
        <Route path="designs" element={<DesignPage />} />
        <Route path="tickets" element={<TicketPage />} />
      </Route>
    </Routes>
  )
}

export default ProtectedRoutes
