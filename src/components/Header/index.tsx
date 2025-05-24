import profileIcon from '../../assets/images/panel-images/Profile Image.svg'
import logoutIcon from '../../assets/images/panel-images/Logout.svg'
import './style.scss'
const HeaderComponent = () => {
    return (
        <>
            <div className="header-area">
                <div className="user-area">
                    <img src={profileIcon} alt="" />
                    <div>
                        <h4>Hey There, Gaurav Mittal</h4>
                        <p>gaurav@gmail.com</p>
                    </div>
                </div>
                <div className="logout-area">
                    <img src={logoutIcon} alt="" />
                    <p>
                        logout
                    </p>
                </div>
            </div>
        </>
    )
}

export default HeaderComponent
