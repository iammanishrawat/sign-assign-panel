import "./style.scss"
import plusIcon from "../../../assets/images/panel-images/Create new designs.svg"
import Icons from "../../../components/Icons"

const DesignPage = () => {
  const onClickCreateNewDesign = () => {
    window.open("http://3.109.198.252/editor/", "_blank")
  }

  const onClickEditDesign = () => {
    window.open("http://3.109.198.252/editor/", "_blank")
  }

  return (
    <div className="design-list-area">
      <h6>My Designs</h6>
      <div className="create-design-area" onClick={() => onClickCreateNewDesign()}>
        <p>Create new designs</p>
        <img src={plusIcon} alt="" />
      </div>
      <div className="design-card">
        <div className="inner" onClick={() => onClickEditDesign()}>
          <img src="https://placehold.co/300x200" alt="" />
          <div className="inner-button-area">
            <h6>Customer Vinyl Banner</h6>
            <Icons name="ArrowRight" />
          </div>
        </div>
        <div className="inner" onClick={() => onClickEditDesign()}>
          <img src="https://placehold.co/300x200" alt="" />
          <div className="inner-button-area">
            <h6>Customer Vinyl Banner</h6>
            <Icons name="ArrowRight" />
          </div>
        </div>
        <div className="inner" onClick={() => onClickEditDesign()}>
          <img src="https://placehold.co/300x200" alt="" />
          <div className="inner-button-area">
            <h6>Customer Vinyl Banner</h6>
            <Icons name="ArrowRight" />
          </div>
        </div>
        <div className="inner" onClick={() => onClickEditDesign()}>
          <img src="https://placehold.co/300x200" alt="" />
          <div className="inner-button-area">
            <h6>Customer Vinyl Banner</h6>
            <Icons name="ArrowRight" />
          </div>
        </div>
        <div className="inner" onClick={() => onClickEditDesign()}>
          <img src="https://placehold.co/300x200" alt="" />
          <div className="inner-button-area">
            <h6>Customer Vinyl Banner</h6>
            <Icons name="ArrowRight" />
          </div>
        </div>
        <div className="inner" onClick={() => onClickEditDesign()}>
          <img src="https://placehold.co/300x200" alt="" />
          <div className="inner-button-area">
            <h6>Customer Vinyl Banner</h6>
            <Icons name="ArrowRight" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesignPage
