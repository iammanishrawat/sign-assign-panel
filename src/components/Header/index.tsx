import profileIcon from "../../assets/images/panel-images/Profile Image.svg"
import {useAppSelector} from "../../hooks/useAppSelector"
import "./style.scss"

const HeaderComponent = () => {
  const {me, status} = useAppSelector(state => state.auth)

  return (
    <>
      <div className="header-area">
        <div className="user-area">
          <img src={profileIcon} alt="" />
          <div>
            <h4>
              Hey There, {me?.firstName}
              {(me?.lastName ?? "").trim() !== "" ? ` ${me?.lastName}` : ""}
            </h4>
            <p>{me?.email}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderComponent
