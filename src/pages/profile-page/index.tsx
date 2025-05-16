import './style.scss'
import userIcon from '../../assets/images/My Profile.svg'
import passwordIcon from '../../assets/images/Change My Password.svg'
const ProfilePage = () => {
    return (
        <>
            <div className="clickable-area">
                <button type="button" className="active">
                    <img src={userIcon} alt="" />
                    My Profile
                </button>
                <button type="button" className="">
                    <img src={passwordIcon} alt="" />
                    Change My Password
                </button>
            </div>
            <form action="">
                <div className="form-inner">
                    <div className="form-group">
                        <label htmlFor="">First Name <span>*</span></label>
                        <input type="text" className='w-full' value={'Gaurav'} contentEditable />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Last Name <span>*</span></label>
                        <input type="text" className='w-full' placeholder='Enter your last name' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Cell Phone Number <span>*</span></label>
                        <input type="text" className='w-full' placeholder='Enter your mobile number' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email Address <span>*</span></label>
                        <input type="text" className='w-full' placeholder='Enter your email id' />
                    </div>
                </div>
                <button type="button" className=''>Edit</button>
            </form>
        </>
    )
}

export default ProfilePage
