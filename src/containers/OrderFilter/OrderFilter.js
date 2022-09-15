import OrderList from '../../components/OrderList/OrderList';

import './OrderFilter.scss';

const OrderFilter = () => {
  const arr = [1,2,3,4,5,6,7,8]

  return (
    <div className="order-filter">
      <div className="filter-info">
        <div className="info-top">
          <h2>Order Report</h2>
          <div className="filtered">
            <img src="" alt=""/>
            <p>Filter Order</p>
          </div>
        </div>
        <div className="info-bottom">
          <h3 className="customer">Customer</h3>
          <h3 className="menu">Menu</h3>
          <h3 className="total-payment">Total Payment</h3>
          <h3 className="status">Status</h3>
        </div>
      </div>
      <div className="ordered">
        {
          arr.map((item, index) => (
            <OrderList key={index} />
          ))
        }
      </div>
    </div>
  )
}

export default OrderFilter;