import Icons from '../../components/Icons'
import './style.scss'

const OrderPage = () => {
  return (
    <>
      <h6>My Orders</h6>
      <div className="order-card">
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
                <p>Size (W X H): 3' X 2'(FT)</p>
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
                <p>Size (W X H): 3' X 2'(FT)</p>
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
                <p>Size (W X H): 3' X 2'(FT)</p>
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
    </>
  )
}

export default OrderPage
