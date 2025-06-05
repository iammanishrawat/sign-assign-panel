import {useEffect, useState} from "react"
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"

import {AuthProvider} from "./context/AuthContext"
import {getMe} from "./features/auth/authSlice"
import {useAppDispatch} from "./hooks/useAppDispatch"
import WebsiteLayout from "./layouts/websiteLayout"
import WebHomePage from "./pages/website-pages/home-page"
import ProtectedRoutes from "./ProtectedRoutes"
import {getUserFromLocalStorage} from "./utils/auth"

export enum Role {
  SUPER_ADMIN = 1,
  USER = 2,
  BUSINESS_ADMIN = 3,
  BUSINESS_STAFF = 4,
}

const App = () => {
  const dispatch = useAppDispatch()
  const [tokenChecked, setTokenChecked] = useState(false)

  useEffect(() => {
    const token = getUserFromLocalStorage()
    if (token) {
      dispatch(getMe())
    }
    // Remove token from URL to prevent reprocessing
    window.history.replaceState({}, document.title, window.location.pathname)
    setTokenChecked(true) // Flag that token processing is done
  }, [dispatch])

  return (
    <Router basename="/user-dashboard">
      <Routes>
        {/* Website Layout */}
        <Route path="/web" element={<WebsiteLayout />}>
          <Route index element={<WebHomePage />} />
          {/* You can add other public routes here later */}
        </Route>

        {/* Protected Panel Layout with AuthProvider */}
        <Route
          path="/*"
          element={
            <AuthProvider>
              <ProtectedRoutes tokenChecked={tokenChecked} />
            </AuthProvider>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
