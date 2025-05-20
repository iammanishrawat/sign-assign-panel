import { useState } from 'react'
import './style.scss'
import Icons from '../../components/Icons'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react'

const AddressBookPage = () => {
  const [showForm, setShowForm] = useState(false)
  const [open, setOpen] = useState(false)

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
                <div className="button-group" onClick={() => setOpen(true)}>
                  <button type="button" onClick={handleAddNewClick}>
                    Edit
                  </button>
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

      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:size-10">
                    <i className="fi fi-rr-triangle-warning"></i>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="text-base font-semibold text-gray-900"
                    >
                      Delete address
                    </DialogTitle>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure you want to delete your address? All of
                        your data will be permanently removed. This action
                        cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto cursor-pointer"
                >
                  Delete
                </button>
                <button
                  type="button"
                  data-autofocus
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default AddressBookPage
