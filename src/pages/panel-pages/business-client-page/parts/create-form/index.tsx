import { useState } from "react";

import { createBusinessClient, updateBusinessClient, type BusinessClient } from '../../../../../features/business-client/businessClientSlice';
import { useAppDispatch } from '../../../../../hooks/useAppDispatch';
import '../../style.scss';

type Props = {
    setShowForm: Function
    selectedBusinessClient: BusinessClient | null
}

const CreateForm = ({ setShowForm, selectedBusinessClient }: Props) => {
    const dispatch = useAppDispatch();

    const [businessClient, setBusinessClient] = useState<any | null>(selectedBusinessClient ?? null)

    const onHandleChange = (key: string, value: string | number | boolean) => {
        setBusinessClient((prev) => {
            if (!prev) return { [key]: typeof value === "string" ? value.trim() : value }

            return {
                ...prev ?? {},
                [key]: typeof value === "string" ? value.trim() : value
            };
        });
    }

    const validateForm = () => {
        if (!businessClient?.firstName?.trim()?.length) {
            alert("Please enter valid first name!")
            return false
        }

        if (!businessClient?.lastName?.trim()?.length) {
            alert("Please enter valid last name!")
            return false
        }

        if (!businessClient?.mobile?.trim()?.length) {
            alert("Please enter valid phone number!")
            return false
        }

        if (!businessClient?.email?.trim()?.length) {
            alert("Please enter valid email!")
            return false
        }

        if (!businessClient?.address?.trim()?.length) {
            alert("Please enter valid address!")
            return false
        }

        if (!businessClient?.pinCode?.trim()?.length) {
            alert("Please enter valid postal!")
            return false
        }

        if (!businessClient?.city?.trim()?.length) {
            alert("Please enter valid city!")
            return false
        }

        if (!businessClient?.state?.trim()?.length) {
            alert("Please enter valid state!")
            return false
        }

        if (!businessClient?.country?.trim()?.length) {
            alert("Please enter valid country!")
            return false
        }

        return true
    }

    const onClickSubmit = async () => {
        try {
            if (businessClient && validateForm()) {
                if (businessClient.businessClientId) {
                    const response = await dispatch(updateBusinessClient({
                        ...businessClient,
                    }))
                    if (updateBusinessClient.fulfilled.match(response)) {
                        alert("Client updated successfully!");
                        setShowForm(false)
                    } else if (updateBusinessClient.rejected.match(response)) {
                        // Handle error here
                        alert(response.payload); // this is what you returned with rejectWithValue
                    }
                } else {
                    const response = await dispatch(createBusinessClient({
                        ...businessClient
                    }))
                    if (createBusinessClient.fulfilled.match(response)) {
                        alert("Client added successfully!");
                        setShowForm(false)
                    } else if (createBusinessClient.rejected.match(response)) {
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
            <h5>Add New Client</h5>
            <form>
                <div className="form-inner">
                    <div className="form-group">
                        <label>
                            First Name <span>*</span>
                        </label>
                        <input type="text" className="w-full" defaultValue={businessClient?.firstName} onChange={(e) => onHandleChange("firstName", e.target.value ?? "")} />
                    </div>
                    <div className="form-group">
                        <label>
                            Last Name <span>*</span>
                        </label>
                        <input type="text" className="w-full" defaultValue={businessClient?.lastName} onChange={(e) => onHandleChange("lastName", e.target.value ?? "")} />
                    </div>
                    <div className="form-group">
                        <label>
                            Cell Phone Number <span>*</span>
                        </label>
                        <input
                            type="text"
                            className="w-full"
                            defaultValue={businessClient?.mobile}
                            onChange={(e) => onHandleChange("mobile", e.target.value ?? "")}
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            Email ID <span>*</span>
                        </label>
                        <input
                            type="text"
                            className="w-full"
                            defaultValue={businessClient?.email}
                            onChange={(e) => onHandleChange("email", e.target.value ?? "")}
                        />
                    </div>
                </div>
                <div className="form-group mb-8">
                    <label>
                        Address <span>*</span>
                    </label>
                    <input
                        type="text"
                        className="w-full"
                        defaultValue={businessClient?.address}
                        onChange={(e) => onHandleChange("address", e.target.value ?? "")}
                    />
                </div>
                <div className="form-inner">
                    <div className="form-group">
                        <label>
                            Zip/Postal Code <span>*</span>
                        </label>
                        <input type="text" className="w-full" defaultValue={businessClient?.pinCode} onChange={(e) => onHandleChange("pinCode", e.target.value ?? "")} />
                    </div>
                    <div className="form-group">
                        <label>
                            City <span>*</span>
                        </label>
                        <input
                            type="text"
                            className="w-full"
                            defaultValue={businessClient?.city}
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
                            defaultValue={businessClient?.state}
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
                            defaultValue={businessClient?.country}
                            onChange={(e) => onHandleChange("country", e.target.value ?? "")}
                        />
                        {/* <select className="w-full">
                  <option value="">India</option>
                  <option value="">UK</option>
                  <option value="">Australia</option>
                </select> */}
                    </div>
                </div>
                <div className="button-group">
                    <button type="button" onClick={onClickSubmit}>
                        Save client
                    </button>
                    <button type="button" onClick={() => setShowForm(false)}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateForm
