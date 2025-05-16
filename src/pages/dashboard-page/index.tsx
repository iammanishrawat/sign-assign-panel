import './style.scss'
import SidebarComponent from '../../components/Sidebar'
const DashboardPage = () => {
    return (
        <div className='flex gap-4 h-screen'>
            <div className="left-area">
                <SidebarComponent />
            </div>
            <div className="right-area">
                <div className="header-area">

                </div>
            </div>
        </div>
    )
}

export default DashboardPage
