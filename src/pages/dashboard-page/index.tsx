import './style.scss'
import Icons from '../../components/Icons'
import SidebarComponent from '../../components/Sidebar'
import HeaderComponent from '../../components/Header'
import orderCompletedIcon from '../../assets/images/Orders Completed.svg'
import quotesRequestedIcon from '../../assets/images/Quotes Requested.svg'
const DashboardPage = () => {
    return (
        <div className='flex gap-4 h-screen'>
            <div className="left-area">
                <SidebarComponent />
            </div>
            <div className="right-area">
                <HeaderComponent />
                <div className="common-area">
                    <div className="card-area">
                        <div className="card-inner">
                            <div className="title-area">
                                <img src={orderCompletedIcon} alt="" />
                                <p>Orders Completed</p>
                            </div>
                            <div className="counter-area">
                                <h4>01</h4>
                                <Icons name='ArrowRight' />
                            </div>
                        </div>
                        <div className="card-inner">
                            <div className="title-area">
                                <img src={quotesRequestedIcon} alt="" />
                                <p>Quotes Requested</p>
                            </div>
                            <div className="counter-area">
                                <h4>01</h4>
                                <Icons name='ArrowRight' />
                            </div>
                        </div>
                    </div>
                    <div className="info-area">
                        <div className="info-inner">
                            <h6>Your Latest Choice</h6>
                            <p>No order placed</p>
                        </div>
                        <div className="info-inner">
                            <h6>Your Latest Choice</h6>
                            <p>No order placed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage
