import {useEffect, useState} from "react"

import visaIcon from "../../../assets/images/panel-images/visa.svg"
import Icons from "../../../components/Icons"
import {listOrder, type Order} from "../../../features/order/orderSlice"
import {formatAddressWithName, formatDateWithoutTime} from "../../../helpers"
import {useAppDispatch} from "../../../hooks/useAppDispatch"
import {useAppSelector} from "../../../hooks/useAppSelector"
import "./style.scss"

const OrderPage = () => {
  const dispatch = useAppDispatch()
  const {orders, status, error} = useAppSelector(state => state.order)

  const [showDetails, setShowDetails] = useState<boolean>(false)
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)

  useEffect(() => {
    dispatch(listOrder())
  }, [dispatch])

  const handleViewDetails = (orderId: number) => {
    const order = orders?.find(order => order.orderId === orderId)
    if (order) {
      const transactionResponseDataJson =
        typeof order.transaction?.responseDataJson === "string"
          ? JSON.parse(order.transaction?.responseDataJson)
          : order.transaction?.responseDataJson
      const amountDetailsJson =
        typeof order.amountDetails === "string"
          ? JSON.parse(order.amountDetails)
          : order.amountDetails
      const shippingAddressDetailsJson =
        typeof order.shippingAddressDetails === "string"
          ? JSON.parse(order.shippingAddressDetails)
          : order.shippingAddressDetails

      setSelectedOrder({
        ...order,
        amountDetails: amountDetailsJson,
        shippingAddressDetails: shippingAddressDetailsJson,
        transaction: {
          ...order.transaction,
          responseDataJson: transactionResponseDataJson,
        },
      })

      setShowDetails(true)
    }
  }

  const onClickBackToList = () => {
    setShowDetails(false)
    setSelectedOrder(null)
  }

  return (
    <>
      {!showDetails && (
        <div className="order-card">
          <h6>My Orders</h6>
          {orders?.map(order => {
            const orderFirstProduct = order.orderProducts[0]
            const orderFirstProductDataJson =
              typeof orderFirstProduct.dataJson === "string"
                ? JSON.parse(orderFirstProduct.dataJson)
                : orderFirstProduct.dataJson
            const productFirstImage: string =
              orderFirstProduct.product.productMedias.find(
                productMedia => productMedia.mediaType.indexOf("image") >= 0
              )?.mediaUrl ?? "https://placehold.co/300x200"

            return (
              <div className="inner" key={order.orderId}>
                <div className="top-area">
                  <div className="left-area">
                    <p>Order ID: #{order.referenceNumber}</p>
                  </div>
                  <div className="right-area">
                    <button type="button">Estimate Arrival: 15 June, 2025</button>
                    {order.orderStatus === "delivered" ? (
                      <button type="button" className="delivered-btn">
                        Delivered
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="bottom-area">
                  <div className="left-area">
                    <img src={productFirstImage} alt={orderFirstProduct.product.name} />
                    <div>
                      <h5>{orderFirstProduct.product.name}</h5>
                      <p>
                        Size (W X H): <span>3' X 2'(FT)</span>
                      </p>
                      <h4>${orderFirstProductDataJson.payablePriceByQuantityAfterDiscount}</h4>
                    </div>
                  </div>
                  <div className="right-area">
                    <button type="button" onClick={() => handleViewDetails(order.orderId)}>
                      View Details
                    </button>
                    <h6>
                      <Icons name="MapPin" />
                      {formatAddressWithName(order.shippingAddressDetails)}
                    </h6>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {showDetails && selectedOrder && (
        <div className="order-detail-page">
          <div className="top-actions">
            <button type="button" onClick={() => onClickBackToList()} className="back-btn">
              ← Back to Orders
            </button>
          </div>

          <div className="track-order-area">
            <div className="left-area">
              <h2>Order ID: #{selectedOrder.referenceNumber}</h2>
              <h6>Order date: {formatDateWithoutTime(selectedOrder.createdAt)}</h6>
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
            {selectedOrder.orderProducts.map(orderProduct => {
              const orderProductDataJson =
                typeof orderProduct.dataJson === "string"
                  ? JSON.parse(orderProduct.dataJson)
                  : orderProduct.dataJson
              const productFirstImage: string =
                orderProduct.product.productMedias.find(
                  productMedia => productMedia.mediaType.indexOf("image") >= 0
                )?.mediaUrl ?? "https://placehold.co/300x200"

              const selectedAttrs = orderProductDataJson.selectedAttributes

              // Dynamically create HTML for selected attributes
              const attributesHtml = selectedAttrs
                .map(attr => {
                  let displayValue = attr.value

                  if (attr.attribute.type === "dimension") {
                    try {
                      const val = JSON.parse(attr.value)
                      displayValue = `${val.width} X ${val.height} (FT)`
                    } catch (e) {
                      displayValue = attr.value
                    }
                  }

                  return `${attr.attribute.name}: <span>${displayValue}</span>`
                })
                .reduce((acc: string[], curr, index) => {
                  if (index % 2 === 0) {
                    // Start new line with current item
                    acc.push(curr)
                  } else {
                    // Append to last line
                    acc[acc.length - 1] += ` | ${curr}`
                  }
                  return acc
                }, [])
                .join("<br/>")

              return (
                <div className="inner">
                  <div className="left-area">
                    <img src={productFirstImage} alt={orderProduct.product.name} />
                    <div>
                      <h5>{orderProduct.product.name}</h5>
                      <p dangerouslySetInnerHTML={{__html: attributesHtml}}></p>
                    </div>
                  </div>
                  <div className="right-area">
                    <h4>${orderProductDataJson.payablePriceByQuantityAfterDiscount}</h4>
                    <h6>Qty: {orderProductDataJson.quantity}</h6>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="address-area">
            <div className="inner-area">
              <p>Billing</p>
              <h6>Address</h6>
              <h5>Africa Ave, Diplomatic Enclave, Chanakyapuri, New Delhi, Delhi 110023, India</h5>
              <h6>Delivery Method</h6>
              <h5>Free (30 days)</h5>
            </div>
            <div className="inner-area">
              <p>Delivery</p>
              <h6>Address</h6>
              <h5>{formatAddressWithName(selectedOrder.shippingAddressDetails)}</h5>
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
                {selectedOrder.transaction?.responseDataJson?.source?.brand} **
                {selectedOrder.transaction?.responseDataJson?.source?.last4}{" "}
                {/* <img src={visaIcon} alt="" /> */}
              </h6>

              <div className="inner">
                <div className="table-flex">
                  <p>Transaction ID</p>
                  <p>{selectedOrder.transaction?.responseDataJson?.id}</p>
                </div>
                <div className="table-flex">
                  <p>Paid On</p>
                  <p>
                    {new Date(
                      selectedOrder.transaction?.responseDataJson?.created
                    ).toLocaleString()}
                  </p>
                </div>
                <div className="table-flex">
                  <p>Order Number</p>
                  <p>#{selectedOrder.transaction?.responseDataJson?.external_reference_id}</p>
                </div>
              </div>
            </div>
            <div className="right-area">
              <h4>Order Summary</h4>
              <div className="inner">
                <div className="table-flex">
                  <p>Subtotal</p>
                  <p>${selectedOrder.amountDetails?.subTotalPrice ?? 0}</p>
                </div>
                <div className="table-flex">
                  <h6>Discount</h6>
                  <h6>${selectedOrder.amountDetails?.businessDiscountPrice ?? 0}</h6>
                </div>
                <div className="table-flex">
                  <h6>Delivery</h6>
                  <h6>$0.00</h6>
                </div>
                <div className="table-flex">
                  <h6>Tax</h6>
                  <h6>+$0.00</h6>
                </div>
                <div className="table-flex">
                  <p>Total</p>
                  <p>${selectedOrder.amountDetails?.grandTotalPrice ?? 0}</p>
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
