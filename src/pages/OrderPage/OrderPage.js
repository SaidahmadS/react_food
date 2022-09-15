import OrderReport from '../../containers/OrderReport';
import OrderInfo from '../../containers/OrderInfo';
import OrderMost from '../../containers/OrderMost/OrderMost';

import './OrderPage.scss';

const OrderPage = () => {
  return(
    <div className="order-page">
      <OrderReport/>
      <div className="most-order-info">
        <OrderInfo/>
        <OrderMost/>
      </div>
    </div>
  )
}

export default OrderPage;