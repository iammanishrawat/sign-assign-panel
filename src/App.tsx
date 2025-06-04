import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';
import { getMe } from './features/auth/authSlice';
import { useAppDispatch } from './hooks/useAppDispatch';
import { useAppSelector } from './hooks/useAppSelector';
import PanelLayout from './layouts/panelLayout';
import WebsiteLayout from './layouts/websiteLayout';
import AddressBookPage from './pages/panel-pages/addressbook-page';
import BusinessClientPage from './pages/panel-pages/business-client-page';
import DashboardPage from './pages/panel-pages/dashboard-page';
import DesignPage from './pages/panel-pages/designs-page';
import OrderPage from './pages/panel-pages/orders-page';
import ProfilePage from './pages/panel-pages/profile-page';
import TicketPage from './pages/panel-pages/tickets-page';
import WebHomePage from './pages/website-pages/home-page';
import { getUserFromLocalStorage } from './utils/auth';

export enum Role {
	SUPER_ADMIN = 1,
	USER = 2,
	BUSINESS_ADMIN = 3,
	BUSINESS_STAFF = 4
}

const PanelLayoutWithAuth = () => (
  <AuthProvider>
    <PanelLayout />
  </AuthProvider>
);

const App = () => {
  const dispatch = useAppDispatch();
  const { me, status, error } = useAppSelector((state) => state.auth);

  const [token, setToken] = useState<string | null>(null);
  const [userData, setUserData] = useState<any>(null);
    
        useEffect(() => {
            dispatch(getMe());
        }, [dispatch]);

  useEffect(() => {
    const { token, userData } = getUserFromLocalStorage();

    if ((token ?? "").trim() !== "") {
      setToken(token);
      setUserData(userData);
    }
    window.history.replaceState({}, document.title, window.location.pathname)
  }, []);

  return (
    <Router basename="/user-dashboard">
      <Routes>
        {/* Website Layout */}
        <Route path="/web" element={<WebsiteLayout />}>
          <Route index element={<WebHomePage />} />
          {/* You can add other public routes here later */}
        </Route>

        <Route path="/" element={<PanelLayoutWithAuth />}>
          <Route index element={<DashboardPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="address-book" element={<AddressBookPage />} />
          <Route path="business-clients" element={<BusinessClientPage />} />
          {me?.roleId && [Role.BUSINESS_ADMIN, Role.BUSINESS_STAFF].indexOf(me.roleId) >= 0 ? <Route path="clients" element={<BusinessClientPage />} /> : ""}
          <Route path="orders" element={<OrderPage />} />
          <Route path="designs" element={<DesignPage />} />
          <Route path="tickets" element={<TicketPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
