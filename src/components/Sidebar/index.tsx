import { Link, useLocation } from "react-router-dom";
import './style.scss'
import dashboardIcon from '../../assets/images/Dashboard.svg'
import profileIcon from '../../assets/images/Profile.svg'
import addressBookIcon from '../../assets/images/Address Book.svg'
import orderIcon from '../../assets/images/Orders.svg'
import designIcon from '../../assets/images/Designs.svg'
import ticketIcon from '../../assets/images/Tickets.svg'
const SidebarComponent = () => {
    const location = useLocation();

    const menuItems = [
        { path: "/dashboard", label: "Home", icon: dashboardIcon },
        { path: "/profile", label: "Profile", icon: profileIcon },
        { path: "/addressbook", label: "Addressbook", icon: addressBookIcon },
        { path: "/orders", label: "Orders", icon: orderIcon },
        { path: "/designs", label: "Designs", icon: designIcon },
        { path: "/ticket", label: "Tickets", icon: ticketIcon },
    ];
    return (
        <>
            <ul>
                {menuItems.map((item) => (
                    <li key={item.path} className={` ${location.pathname === item.path ? "active" : ""
                        }`}>
                        <Link
                            to={item.path}
                        >

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
