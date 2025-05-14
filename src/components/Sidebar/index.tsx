import Icons from "../Icons"
import './style.scss'
const SidebarComponent = () => {
    return (
        <>
            <ul>
                <li className="active"><i className="fi fi-rs-dashboard"></i>Dashboard</li>
                <li><Icons name="User" />Profile</li>
                <li><Icons name="NotebookTabs" />Address Book</li>
                <li><Icons name="ShoppingCart" />Orders</li>
                <li><Icons name="Scale3d" />Designs</li>
                <li><i className="fi fi-rr-user-headset"></i>Tickets</li>
            </ul>
        </>
    )
}

export default SidebarComponent
