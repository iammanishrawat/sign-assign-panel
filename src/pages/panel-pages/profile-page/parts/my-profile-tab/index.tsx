import {useEffect, useState} from "react"

import {useAppDispatch} from "../../../../../hooks/useAppDispatch"
import {useAppSelector} from "../../../../../hooks/useAppSelector"
import {getMe} from "../../../../../features/auth/authSlice"
import {updateUser, type UpdateUserPayload} from "../../../../../features/user/userSlice"
import "../../style.scss"

const MyProfileTab = () => {
  const dispatch = useAppDispatch()
  const {me, status, error} = useAppSelector(state => state.auth)

  const [editMode, setEditMode] = useState(false) // for making profile fields editable
  const [user, setUser] = useState<UpdateUserPayload | null>(
    me
      ? {
          userId: me?.userId,
          firstName: me?.firstName ?? "",
          lastName: me?.lastName ?? "",
          email: me?.email ?? "",
          mobile: me?.mobile ?? "",
        }
      : null
  )

  const onHandleChange = (key: string, value: string | number | boolean) => {
    setUser(prev => {
      if (!prev) return prev

      return {
        ...(prev ?? {}),
        [key]: typeof value === "string" ? value.trim() : value,
      }
    })
  }

  const validateForm = () => {
    if (!user?.firstName?.trim()?.length) {
      alert("Please enter valid first name!")
      return false
    }

    if (!user?.lastName?.trim()?.length) {
      alert("Please enter valid last name!")
      return false
    }

    if (!user?.mobile?.trim()?.length) {
      alert("Please enter valid mobile!")
      return false
    }

    if (!user?.email?.trim()?.length) {
      alert("Please enter valid email!")
      return false
    }

    return true
  }

  const onClickSubmit = async () => {
    try {
      if (me && validateForm()) {
        const response = await dispatch(
          updateUser({
            userId: me.userId,
            ...user,
          })
        )
        if (updateUser.fulfilled.match(response)) {
          alert("Profile updated successfully!")
          dispatch(getMe())
          setEditMode(!editMode)
        } else if (updateUser.rejected.match(response)) {
          // Handle error here
          alert(response.payload) // this is what you returned with rejectWithValue
        }
      }
    } catch (error) {
      console.log(`error ===`, error)
    }
  }

  return (
    <form action="" id="myProfileForm">
      <div className="form-inner">
        <div className="form-group">
          <label htmlFor="">
            First Name <span>*</span>
          </label>
          <input
            type="text"
            className="w-full"
            defaultValue={user?.firstName}
            onChange={e => onHandleChange("firstName", e.target.value ?? "")}
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
            defaultValue={user?.lastName}
            onChange={e => onHandleChange("lastName", e.target.value ?? "")}
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
            defaultValue={user?.mobile}
            onChange={e => onHandleChange("mobile", e.target.value ?? "")}
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
            defaultValue={user?.email}
            onChange={e => onHandleChange("email", e.target.value ?? "")}
            readOnly={!editMode}
          />
        </div>
      </div>

      <div className="button-group">
        <button type="button" onClick={() => (editMode ? onClickSubmit() : setEditMode(true))}>
          {editMode ? "Save" : "Edit"}
        </button>

        {editMode && (
          <button type="button" onClick={() => setEditMode(false)}>
            Cancel
          </button>
        )}
      </div>
    </form>
  )
}

export default MyProfileTab
