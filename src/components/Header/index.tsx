import profileIcon from '../../assets/images/panel-images/Profile Image.svg'
// import logoutIcon from '../../assets/images/panel-images/Logout.svg'
import { useAuth } from '../../context/AuthContext';
import './style.scss'

const HeaderComponent = () => {
    const { user } = useAuth();

    return (
        <>
            <div className="header-area">
                <div className="user-area">
                    <img src={profileIcon} alt="" />
                    <div>
                        <h4>Hey There, {user?.firstName}{(user?.lastName ?? "").trim() !== "" ? ` ${user?.lastName}` : ""}</h4>
                        <p>{user?.email}</p>
                    </div>
                </div>
                {/* <div className="logout-area">
                    <img src={logoutIcon} alt="" />
                    <p>
                        logout
                    </p>
                </div> */}
            </div>
        </>
    )
}

export default HeaderComponent
