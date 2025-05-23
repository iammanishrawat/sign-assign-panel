import Icons from '../../components/Icons'
import visaIcon from '../../assets/images/panel-images/visa.svg'
import ratingIcon from '../../assets/images/panel-images/Rating.svg'
import './style.scss'
import { useState } from 'react'

const OrderPage = () => {
  const [showDetails, setShowDetails] = useState(false)

  const handleViewDetails = () => {
    setShowDetails(true)
  }

  // const handleBackToOrders = () => {
  //   setShowDetails(false)
  // }
  return (
    <>
      {!showDetails && (
        <div className="order-card">
          <h6>My Orders</h6>
          <div className="inner">
            <div className="top-area">
              <div className="left-area">
                <p>Order ID: #123456</p>
              </div>
              <div className="right-area">
                <button type="button">Estimate Arrival: 15 June, 2025</button>
                <button type="button" className="delivered-btn">
                  Delivered
                </button>
              </div>
            </div>
            <div className="bottom-area">
              <div className="left-area">
                <img src="https://placehold.co/300x200" alt="" />
                <div>
                  <h5>Rectangle Flag</h5>
                  <p>
                    Size (W X H): <span>3' X 2'(FT)</span>
                  </p>
                  <h4>$12.00</h4>
                </div>
              </div>
              <div className="right-area">
                <button type="button" onClick={handleViewDetails}>
                  View Details
                </button>
                <h6>
                  <Icons name="MapPin" />
                  London, UK
                </h6>
              </div>
            </div>
          </div>
          <div className="inner">
            <div className="top-area">
              <div className="left-area">
                <p>Order ID: #123456</p>
              </div>
              <div className="right-area">
                <button type="button">Estimate Arrival: 15 June, 2025</button>
                <button type="button" className="processed-btn">
                  On Process
                </button>
              </div>
            </div>
            <div className="bottom-area">
              <div className="left-area">
                <img src="https://placehold.co/300x200" alt="" />
                <div>
                  <h5>Rectangle Flag</h5>
                  <p>
                    Size (W X H): <span>3' X 2'(FT)</span>
                  </p>
                  <h4>$12.00</h4>
                </div>
              </div>
              <div className="right-area">
                <button type="button" onClick={handleViewDetails}>
                  View Details
                </button>
                <h6>
                  <Icons name="MapPin" />
                  London, UK
                </h6>
              </div>
            </div>
          </div>
          <div className="inner">
            <div className="top-area">
              <div className="left-area">
                <p>Order ID: #123456</p>
              </div>
              <div className="right-area">
                <button type="button">Estimate Arrival: 15 June, 2025</button>
                <button type="button" className="cancelled-btn">
                  Cancelled
                </button>
              </div>
            </div>
            <div className="bottom-area">
              <div className="left-area">
                <img src="https://placehold.co/300x200" alt="" />
                <div>
                  <h5>Rectangle Flag</h5>
                  <p>
                    Size (W X H): <span>3' X 2'(FT)</span>
                  </p>
                  <h4>$12.00</h4>
                </div>
              </div>
              <div className="right-area">
                <button type="button" onClick={handleViewDetails}>
                  View Details
                </button>
                <h6>
                  <Icons name="MapPin" />
                  London, UK
                </h6>
              </div>
            </div>
          </div>
        </div>
      )}

      {showDetails && (
        <div className="order-detail-page">
          <div className="track-order-area">
            <div className="left-area">
              <h2>Order ID: #1234567</h2>
              <h6>Order date: 05 May, 2025</h6>
            </div>
            <div className="right-area">
              <button type="button">
                <Icons name="ReceiptText" />
                Invoice
              </button>
              <button type="button" className="track-btn">
                Track order
              </button>
            </div>
          </div>
          <div className="product-detail-area">
            <div className="inner">
              <div className="left-area">
                <img src="https://placehold.co/300x200" alt="" />
                <div>
                  <h5>Custom Vinyl Banner</h5>
                  <p>
                    Size (W X H): <span>3' X 2'(FT)</span> | Choose Material:
                    <span>Vinyl Print</span>
                  </p>
                  <p>
                    Sides: <span>Single Sided</span> | Upgrade to Premium:
                    <span>Standard 13 Oz</span>
                  </p>
                  <p>
                    Hanging OPtions: <span>Metal Grommets</span>
                  </p>
                </div>
              </div>
              <div className="right-area">
                <h4>$2500.00</h4>
                <h6>Qty: 10</h6>
              </div>
            </div>
            <div className="inner">
              <div className="left-area">
                <img src="https://placehold.co/300x200" alt="" />
                <div>
                  <h5>Custom Vinyl Banner</h5>
                  <p>
                    Size (W X H): <span>3' X 2'(FT)</span> | Choose Material:
                    <span>Vinyl Print</span>
                  </p>
                  <p>
                    Sides: <span>Single Sided</span> | Upgrade to Premium:
                    <span>Standard 13 Oz</span>
                  </p>
                  <p>
                    Hanging OPtions: <span>Metal Grommets</span>
                  </p>
                </div>
              </div>
              <div className="right-area">
                <h4>$2500.00</h4>
                <h6>Qty: 10</h6>
              </div>
            </div>
          </div>
          <div className="address-area">
            <div className="inner-area">
              <p>Billing</p>
              <h6>Address</h6>
              <h5>
                Africa Ave, Diplomatic Enclave, Chanakyapuri, New Delhi, Delhi
                110023, India
              </h5>
              <h6>Delivery Method</h6>
              <h5>Free (30 days)</h5>
            </div>
            <div className="inner-area">
              <p>Delivery</p>
              <h6>Address</h6>
              <h5>
                Africa Ave, Diplomatic Enclave, Chanakyapuri, New Delhi, Delhi
                110023, India
              </h5>
              <h6>Delivery Method</h6>
              <h5>Free (30 days)</h5>
            </div>
          </div>
          <div className="rating-area">
            <h4>Rate your deliver experience</h4>
            <div className="star-div">
              <span className="checked">
                <Icons name="Star" size={34} />
              </span>
              <span className="checked">
                <Icons name="Star" size={34} />
              </span>
              <span className="checked">
                <Icons name="Star" size={34} />
              </span>
              <Icons name="Star" size={34} />
              <Icons name="Star" size={34} />
            </div>
          </div>
          <div className="help-area">
            <div className="left-area">
              <p>Need help?</p>
            </div>
            <div className="right-area">
              <button type="button" className="active">
                <i className="fi fi-sr-question-square"></i>
                Help With My Order
                <Icons name="ArrowUpRight" />
              </button>
              <button type="button" className="active">
                <i className="fi fi-sr-question-square"></i>
                Track My Order
                <Icons name="ArrowUpRight" />
              </button>
              <button type="button" className="active">
                <i className="fi fi-sr-question-square"></i>
                Chat Now
                <Icons name="ArrowUpRight" />
              </button>
            </div>
          </div>
          <div className="payment-mode-area">
            <div className="left-area">
              <p>Payment</p>
              <h6>
                Visa **40 <img src={visaIcon} alt="" />
              </h6>
            </div>
            <div className="right-area">
              <h4>Order Summary</h4>
              <div className="inner">
                <div className="table-flex">
                  <p>Subtotal</p>
                  <p>$50000.00</p>
                </div>
                <div className="table-flex">
                  <h6>Discount</h6>
                  <h6>$1000.00</h6>
                </div>
                <div className="table-flex">
                  <h6>Delivery</h6>
                  <h6>$0.00</h6>
                </div>
                <div className="table-flex">
                  <h6>Tax</h6>
                  <h6>+$300.00</h6>
                </div>
                <div className="table-flex">
                  <p>Total</p>
                  <p>$43000.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default OrderPage
