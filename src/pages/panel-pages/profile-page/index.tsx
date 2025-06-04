import { useState } from 'react'

import passwordIcon from '../../../assets/images/panel-images/Change My Password.svg'
import userIcon from '../../../assets/images/panel-images/My Profile.svg'
import user2Icon from '../../../assets/images/panel-images/My Profile_1.svg'
import ChangePasswordTab from './parts/change-password-tab'
import MyProfileTab from './parts/my-profile-tab'
import './style.scss'

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile') // 'profile' or 'password'

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
        <MyProfileTab />
      )}

      {activeTab === 'password' && (
        <ChangePasswordTab />
      )}
    </>
  )
}

export default ProfilePage
