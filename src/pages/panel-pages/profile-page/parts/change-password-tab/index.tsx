import {useState} from "react"

import {useAppDispatch} from "../../../../../hooks/useAppDispatch"
import {changePassword} from "../../../../..//features/auth/authSlice"
import Icons from "../../../../../components/Icons"
import "../../style.scss"

const ChangePasswordTab = () => {
  const dispatch = useAppDispatch()

  const [currentPassword, setCurrentPassword] = useState<string>("")
  const [newPassword, setNewPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")

  const validateForm = () => {
    if (!currentPassword.trim().length) {
      alert("Please enter valid current password!")
      return false
    }

    if (!newPassword.trim().length) {
      alert("Please enter valid new password!")
      return false
    }

    if (!confirmPassword.trim().length) {
      alert("Please enter valid confirm password!")
      return false
    }

    if (currentPassword.trim() === newPassword.trim()) {
      alert(
        "New password is same as current password. Please enter a different new password to continue!"
      )
      return false
    }

    if (newPassword.trim() !== confirmPassword.trim()) {
      alert("Please enter confirm password same as new password!")
      return false
    }

    return true
  }

  const onClickSubmit = async () => {
    try {
      if (validateForm()) {
        const response = await dispatch(
          changePassword({
            currentPassword: currentPassword.trim(),
            newPassword: newPassword.trim(),
          })
        )
        if (changePassword.fulfilled.match(response)) {
          alert("Password changed successfully!")
        } else if (changePassword.rejected.match(response)) {
          // Handle error here
          alert(response.payload) // this is what you returned with rejectWithValue
        }
      }
    } catch (error) {
      console.log(`error ===`, error)
    }
  }

  return (
    <form action="" id="changeMyPasswordForm">
      <div className="form-inner" id="threeColLayout">
        <div className="form-group">
          <label htmlFor="">
            Current Password <span>*</span>
          </label>
          <input
            type="password"
            className="w-full"
            value={currentPassword}
            onChange={e => setCurrentPassword(e.target.value ?? "")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">
            New Password <span>*</span>
          </label>
          <input
            type="password"
            className="w-full"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value ?? "")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">
            Confirm Password <span>*</span>
          </label>
          <input
            type="password"
            className="w-full"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value ?? "")}
          />
        </div>
      </div>
      <div className="password-norms-area">
        <p>Password must meet the following requirements:</p>
        <h6>
          <Icons name="CircleArrowRight" /> Password must have at least 6 characters.
        </h6>
      </div>
      <div className="button-group">
        <button type="button" onClick={onClickSubmit}>
          Submit
        </button>
      </div>
    </form>
  )
}

export default ChangePasswordTab
