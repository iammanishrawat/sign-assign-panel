import './style.scss'
import dashboardIcon from '../../assets/images/Dashboard.svg'
import profileIcon from '../../assets/images/Profile.svg'
import addressBookIcon from '../../assets/images/Address Book.svg'
import orderIcon from '../../assets/images/Orders.svg'
import designIcon from '../../assets/images/Designs.svg'
import ticketIcon from '../../assets/images/Tickets.svg'
const SidebarComponent = () => {
    return (
        <>
            <ul>
                <li className="active">
                    <img src={dashboardIcon} alt="dashboard-icon" />Dashboard
                </li>
                <li>
                    <img src={profileIcon} alt="dashboard-icon" />Profile
                </li>
                <li>
                    <img src={addressBookIcon} alt="dashboard-icon" />Address Book
                </li>
                <li>
                    <img src={orderIcon} alt="dashboard-icon" />Orders
                </li>
                <li>
                    <img src={designIcon} alt="dashboard-icon" />Designs
                </li>
                <li>
                    <img src={ticketIcon} alt="dashboard-icon" />Tickets
                </li>
            </ul>
        </>
    )
}

export default SidebarComponent
