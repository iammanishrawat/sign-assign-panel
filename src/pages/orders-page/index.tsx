import Icons from '../../components/Icons'
import './style.scss'

const OrderPage = () => {
  return (
    <>
      <div className="order-card" style={{ display: 'none' }}>
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
              <button type="button">View Details</button>
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
              <button type="button">View Details</button>
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
              <button type="button">View Details</button>
              <h6>
                <Icons name="MapPin" />
                London, UK
              </h6>
            </div>
          </div>
        </div>
      </div>

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
      </div>
    </>
  )
}

export default OrderPage
