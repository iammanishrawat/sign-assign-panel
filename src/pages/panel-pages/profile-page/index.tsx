import './style.scss'
import { useState } from 'react'
import userIcon from '../../../assets/images/panel-images/My Profile.svg'
import user2Icon from '../../../assets/images/panel-images/My Profile_1.svg'
import passwordIcon from '../../../assets/images/panel-images/Change My Password.svg'
import Icons from '../../../components/Icons'
const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile') // 'profile' or 'password'
  const [editMode, setEditMode] = useState(false) // for making profile fields editable
  return (
    <>
      <div className="clickable-area">
        <button
          type="button"
          className={activeTab === 'profile' ? 'active' : ''}
          onClick={() => setActiveTab('profile')}
        >
          <img src={activeTab === 'profile' ? userIcon : user2Icon} alt="" />
          My Profile
        </button>
        <button
          type="button"
          className={activeTab === 'password' ? 'active' : ''}
          onClick={() => setActiveTab('password')}
        >
          <img src={passwordIcon} alt="" />
          Change My Password
        </button>
      </div>
      {activeTab === 'profile' && (
        <form action="" id="myProfileForm">
          <div className="form-inner">
            <div className="form-group">
              <label htmlFor="">
                First Name <span>*</span>
              </label>
              <input
                type="text"
                className="w-full"
                defaultValue="Gaurav"
                readOnly={!editMode}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">
                Last Name <span>*</span>
              </label>
              <input
                type="text"
                className="w-full"
                defaultValue="Mittal"
                readOnly={!editMode}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">
                Cell Phone Number <span>*</span>
              </label>
              <input
                type="text"
                className="w-full"
                defaultValue="+9199999999"
                readOnly={!editMode}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">
                Email Address <span>*</span>
              </label>
              <input
                type="text"
                className="w-full"
                defaultValue="gaurav@gmail.com"
                readOnly={!editMode}
              />
            </div>
          </div>

          <div className="button-group">
            <button type="button" onClick={() => setEditMode(!editMode)}>
              {editMode ? 'Save' : 'Edit'}
            </button>

            {editMode && (
              <button type="button" onClick={() => setEditMode(false)}>
                Cancel
              </button>
            )}
          </div>
        </form>
      )}

      {activeTab === 'password' && (
        <form action="" id="changeMyPasswordForm">
          <div className="form-inner" id="threeColLayout">
            <div className="form-group">
              <label htmlFor="">
                Current Password <span>*</span>
              </label>
              <input type="password" className="w-full" />
            </div>
            <div className="form-group">
              <label htmlFor="">
                New Password <span>*</span>
              </label>
              <input type="password" className="w-full" />
            </div>
            <div className="form-group">
              <label htmlFor="">
                Confirm Password <span>*</span>
              </label>
              <input type="password" className="w-full" />
            </div>
          </div>
          <div className="password-norms-area">
            <p>Password must meet the following requirements:</p>
            <h6>
              <Icons name="CircleArrowRight" /> Password must have at least 6
              characters.
            </h6>
          </div>
          <div className="button-group">
            <button type="button">Submit</button>
          </div>
        </form>
      )}
    </>
  )
}

export default ProfilePage
