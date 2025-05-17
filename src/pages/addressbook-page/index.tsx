import React, { useState } from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import Icons from '../../components/Icons'

const AddressBookPage = () => {
  const [showForm, setShowForm] = useState(false)

  const handleAddNewClick = () => {
    setShowForm(true)
  }

  const handleSaveOrCancel = () => {
    setShowForm(false)
  }

  return (
    <>
      {!showForm && (
        <div>
          <div className="add-address-area">
            <h6>Default Address:</h6>
            <button type="button" onClick={handleAddNewClick}>
              <Icons name="Plus" /> Add new address
            </button>
          </div>
          <div className="address-card">
            {[1, 2, 3].map((_, index) => (
              <div className="inner" key={index}>
                <h6>Gaurav Mittal</h6>
                <p>
                  Africa Ave, Diplomatic Enclave, Chanakyapuri, New Delhi, Delhi
                  110023, India
                </p>
                <p>
                  <span>Phone Number:</span> 9999988988
                </p>
                <div className="button-group">
                  <button type="button">Edit</button>
                  <button type="button">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {showForm && (
        <div className="new-address-form">
          <h5>Add New Address</h5>
          <form>
            <div className="form-inner">
              <div className="form-group">
                <label>
                  First Name <span>*</span>
                </label>
                <input type="text" className="w-full" defaultValue="Gaurav" />
              </div>
              <div className="form-group">
                <label>
                  Last Name <span>*</span>
                </label>
                <input type="text" className="w-full" defaultValue="Mittal" />
              </div>
              <div className="form-group">
                <label>
                  Company Name <span>*</span>
                </label>
                <input type="text" className="w-full" defaultValue="gaurav" />
              </div>
              <div className="form-group">
                <label>
                  Cell Phone Number <span>*</span>
                </label>
                <input
                  type="text"
                  className="w-full"
                  defaultValue="+9199999999"
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
                defaultValue="Africa Ave, Diplomatic Enclave, Chanakyapuri, New Delhi, Delhi 110023, India"
              />
            </div>
            <div className="form-inner">
              <div className="form-group">
                <label>
                  Zip/Postal Code <span>*</span>
                </label>
                <input type="text" className="w-full" defaultValue="110023" />
              </div>
              <div className="form-group">
                <label>
                  City <span>*</span>
                </label>
                <input
                  type="text"
                  className="w-full"
                  defaultValue="New Delhi"
                />
              </div>
              <div className="form-group">
                <label>
                  State <span>*</span>
                </label>
                <select className="w-full">
                  <option value="">NCT Delhi</option>
                  <option value="">Haryana</option>
                  <option value="">Uttar Pradesh</option>
                </select>
              </div>
              <div className="form-group">
                <label>
                  Country <span>*</span>
                </label>
                <select className="w-full">
                  <option value="">India</option>
                  <option value="">UK</option>
                  <option value="">Australia</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="billing">
                <input type="checkbox" id="billing" />
                This is my default billing address
              </label>
              <br />
              <label htmlFor="shipping">
                <input type="checkbox" id="shipping" />
                This is my default shipping address
              </label>
            </div>
            <div className="button-group">
              <button type="button" onClick={handleSaveOrCancel}>
                Save address
              </button>
              <button type="button" onClick={handleSaveOrCancel}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

export default AddressBookPage
