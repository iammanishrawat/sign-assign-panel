import './style.scss'
import { Link } from 'react-router-dom'
import Icons from '../../components/Icons'
const AddressBookPage = () => {
  return (
    <>
      <div style={{ display: 'none' }}>
        <div className="add-address-area">
          <h6>Default Address:</h6>
          <Link to="/add-new-address">
            <button type="button">
              <Icons name="Plus" /> Add new address
            </button>
          </Link>
        </div>
        <div className="address-card">
          <div className="inner">
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
          <div className="inner">
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
          <div className="inner">
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
        </div>
      </div>

      <div className="new-address-form">
        <h5>Add New Address</h5>
        <form action="" id="">
          <div className="form-inner">
            <div className="form-group">
              <label htmlFor="">
                First Name <span>*</span>
              </label>
              <input type="text" className="w-full" defaultValue="Gaurav" />
            </div>
            <div className="form-group">
              <label htmlFor="">
                Last Name <span>*</span>
              </label>
              <input type="text" className="w-full" defaultValue="Mittal" />
            </div>
            <div className="form-group">
              <label htmlFor="">
                Company Name <span>*</span>
              </label>
              <input type="text" className="w-full" defaultValue="gaurav" />
            </div>
            <div className="form-group">
              <label htmlFor="">
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
            <label htmlFor="">
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
              <label htmlFor="">
                Zip/Postal Code <span>*</span>
              </label>
              <input type="text" className="w-full" defaultValue="110023" />
            </div>
            <div className="form-group">
              <label htmlFor="">
                City <span>*</span>
              </label>
              <input type="text" className="w-full" defaultValue="New Delhi" />
            </div>
            <div className="form-group">
              <label htmlFor="">
                State <span>*</span>
              </label>
              <select name="" className="w-full" id="">
                <option value="">NCT Delhi</option>
                <option value="">Haryana</option>
                <option value="">Uttar Pradesh</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="">
                Country <span>*</span>
              </label>
              <select name="" className="w-full" id="">
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
            <button type="button">Save address</button>
            <button type="button">Cancel</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddressBookPage
