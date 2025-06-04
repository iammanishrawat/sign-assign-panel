import { useState } from "react";

import { createUserAddress, updateUserAddress, type UserAddress } from '../../../../../features/user-address/userAddressSlice';
import { useAppDispatch } from '../../../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../../../hooks/useAppSelector';
import '../../style.scss';

type Props = {
    setShowForm: Function
    selectedUserAddress: UserAddress | null
}

const CreateAddressForm = ({ setShowForm, selectedUserAddress }: Props) => {
    const dispatch = useAppDispatch();
    const { me, status, error } = useAppSelector((state) => state.auth);

    const [userAddress, setUserAddress] = useState<any | null>(selectedUserAddress ?? null)

    const onHandleChange = (key: string, value: string | number | boolean) => {
        setUserAddress((prev) => {
            if (!prev) return { [key]: typeof value === "string" ? value.trim() : value }

            return {
                ...prev ?? {},
                [key]: typeof value === "string" ? value.trim() : value
            };
        });
    }

    const validateForm = () => {
        if (!userAddress?.firstName?.trim()?.length) {
            alert("Please enter valid first name!")
            return false
        }

        if (!userAddress?.lastName?.trim()?.length) {
            alert("Please enter valid last name!")
            return false
        }

        if (!userAddress?.phoneNumber?.trim()?.length) {
            alert("Please enter valid phone number!")
            return false
        }

        if (!userAddress?.streetAddress?.trim()?.length) {
            alert("Please enter valid street address!")
            return false
        }

        if (!userAddress?.postal?.trim()?.length) {
            alert("Please enter valid postal!")
            return false
        }

        if (!userAddress?.city?.trim()?.length) {
            alert("Please enter valid city!")
            return false
        }

        if (!userAddress?.state?.trim()?.length) {
            alert("Please enter valid state!")
            return false
        }

        if (!userAddress?.country?.trim()?.length) {
            alert("Please enter valid country!")
            return false
        }

        return true
    }

    const onClickSubmit = async () => {
        try {
            if (me && userAddress && validateForm()) {
                if (userAddress.userAddressId) {
                    const response = await dispatch(updateUserAddress({
                        ...userAddress,
                    }))
                    if (updateUserAddress.fulfilled.match(response)) {
                        alert("Address updated successfully!");
                        setShowForm(false)
                    } else if (updateUserAddress.rejected.match(response)) {
                        // Handle error here
                        alert(response.payload); // this is what you returned with rejectWithValue
                    }
                } else {
                    const response = await dispatch(createUserAddress({
                        ...userAddress,
                        userId: me.userId,
                    }))
                    if (createUserAddress.fulfilled.match(response)) {
                        alert("Address added successfully!");
                        setShowForm(false)
                    } else if (createUserAddress.rejected.match(response)) {
                        // Handle error here
                        alert(response.payload); // this is what you returned with rejectWithValue
                    }
                }
            }
        } catch (error) {
            console.log(`error ===`, error)
        }
    }

    return (
        <div className="new-address-form">
            <h5>Add New Address</h5>
            <form>
                <div className="form-inner">
                    <div className="form-group">
                        <label>
                            First Name <span>*</span>
                        </label>
                        <input type="text" className="w-full" defaultValue={userAddress?.firstName} onChange={(e) => onHandleChange("firstName", e.target.value ?? "")} />
                    </div>
                    <div className="form-group">
                        <label>
                            Last Name <span>*</span>
                        </label>
                        <input type="text" className="w-full" defaultValue={userAddress?.lastName} onChange={(e) => onHandleChange("lastName", e.target.value ?? "")} />
                    </div>
                    {/* <div className="form-group">
                <label>
                  Company Name <span>*</span>
                </label>
                <input type="text" className="w-full" defaultValue={userAddress?.companyName} />
              </div> */}
                    <div className="form-group">
                        <label>
                            Cell Phone Number <span>*</span>
                        </label>
                        <input
                            type="text"
                            className="w-full"
                            defaultValue={userAddress?.phoneNumber}
                            onChange={(e) => onHandleChange("phoneNumber", e.target.value ?? "")}
                        />
                    </div>
                </div>
                <div className="form-group mb-8">
                    <label>
                        Street Address <span>*</span>
                    </label>
                    <input
                        type="text"
                        className="w-full"
                        defaultValue={userAddress?.streetAddress}
                        onChange={(e) => onHandleChange("streetAddress", e.target.value ?? "")}
                    />
                </div>
                <div className="form-inner">
                    <div className="form-group">
                        <label>
                            Zip/Postal Code <span>*</span>
                        </label>
                        <input type="text" className="w-full" defaultValue={userAddress?.postal} onChange={(e) => onHandleChange("postal", e.target.value ?? "")} />
                    </div>
                    <div className="form-group">
                        <label>
                            City <span>*</span>
                        </label>
                        <input
                            type="text"
                            className="w-full"
                            defaultValue={userAddress?.city}
                            onChange={(e) => onHandleChange("city", e.target.value ?? "")}
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            State <span>*</span>
                        </label>
                        <input
                            type="text"
                            className="w-full"
                            defaultValue={userAddress?.state}
                            onChange={(e) => onHandleChange("state", e.target.value ?? "")}
                        />
                        {/* <select className="w-full">
                  <option value="">NCT Delhi</option>
                  <option value="">Haryana</option>
                  <option value="">Uttar Pradesh</option>
                </select> */}
                    </div>
                    <div className="form-group">
                        <label>
                            Country <span>*</span>
                        </label>
                        <input
                            type="text"
                            className="w-full"
                            defaultValue={userAddress?.country}
                            onChange={(e) => onHandleChange("country", e.target.value ?? "")}
                        />
                        {/* <select className="w-full">
                  <option value="">India</option>
                  <option value="">UK</option>
                  <option value="">Australia</option>
                </select> */}
                    </div>
                </div>
                {/* <div className="form-group">
              <label htmlFor="billing">
                <input type="checkbox" id="billing" />
                This is my default billing address
              </label>
              <br />
              <label htmlFor="shipping">
                <input type="checkbox" id="shipping" />
                This is my default shipping address
              </label>
            </div> */}
                <div className="button-group">
                    <button type="button" onClick={onClickSubmit}>
                        Save address
                    </button>
                    <button type="button" onClick={() => setShowForm(false)}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateAddressForm
