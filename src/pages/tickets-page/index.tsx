import ticketImage from '../../assets/images/panel-images/Help & Supports.svg'
import './style.scss'
const TicketPage = () => {
  return (
    <>
      <div>
        <h5>Help & Support</h5>
        <img
          src={ticketImage}
          alt=""
          width={'70%'}
          style={{ margin: '0 auto', marginTop: '2rem' }}
        />
      </div>
      <div className="clickable-area flex justify-center mt-10">
        <button type="button" className="active">
          Help With My Order
        </button>
        <button type="button" className="active">
          Track My Order
        </button>
        <button type="button" className="active">
          Chat Now
        </button>
      </div>
    </>
  )
}

export default TicketPage
