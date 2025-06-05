import {useEffect} from "react"
import {Link, useLocation} from "react-router-dom"

import {Role} from "../../App"
import addressBookIcon from "../../assets/images/panel-images/Address Book.svg"
import dashboardIcon from "../../assets/images/panel-images/Dashboard.svg"
import designIcon from "../../assets/images/panel-images/Designs.svg"
import orderIcon from "../../assets/images/panel-images/Orders.svg"
import profileIcon from "../../assets/images/panel-images/Profile.svg"
import ticketIcon from "../../assets/images/panel-images/Tickets.svg"
// import { getMe } from '../../features/auth/authSlice'
import {useAppDispatch} from "../../hooks/useAppDispatch"
import {useAppSelector} from "../../hooks/useAppSelector"
import "./style.scss"

const SidebarComponent = () => {
  // const dispatch = useAppDispatch();
  const {me, status, error} = useAppSelector(state => state.auth)

  const location = useLocation()

  const menuItems =
    me?.roleId && [Role.BUSINESS_ADMIN, Role.BUSINESS_STAFF].includes(me.roleId)
      ? [
          {path: "/dashboard", label: "Home", icon: dashboardIcon},
          {path: "/profile", label: "Profile", icon: profileIcon},
          {path: "/address-book", label: "Address Book", icon: addressBookIcon},
          {path: "/clients", label: "Client", icon: profileIcon},
          {path: "/orders", label: "Orders", icon: orderIcon},
          {path: "/designs", label: "Designs", icon: designIcon},
          {path: "/tickets", label: "Tickets", icon: ticketIcon},
        ]
      : [
          {path: "/dashboard", label: "Home", icon: dashboardIcon},
          {path: "/profile", label: "Profile", icon: profileIcon},
          {path: "/address-book", label: "Address Book", icon: addressBookIcon},
          {path: "/orders", label: "Orders", icon: orderIcon},
          {path: "/designs", label: "Designs", icon: designIcon},
          {path: "/tickets", label: "Tickets", icon: ticketIcon},
        ]

  return (
    <>
      <ul>
        {menuItems.map(item => (
          <li key={item.path} className={` ${location.pathname === item.path ? "active" : ""}`}>
            <Link to={item.path}>
              <img src={item.icon} alt="" />
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default SidebarComponent
