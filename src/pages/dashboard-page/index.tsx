import './style.scss'
import SidebarComponent from '../../components/Sidebar'
import HeaderComponent from '../../components/Header'
const DashboardPage = () => {
    return (
        <div className='flex gap-4 h-screen'>
            <div className="left-area">
                <SidebarComponent />
            </div>
            <div className="right-area">
                <HeaderComponent />
                <div className="common-area">
                    <h3>Common form will be here...</h3>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage
