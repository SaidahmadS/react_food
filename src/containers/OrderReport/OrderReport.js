import Dashboard from '../Dashboard';
import OrderFilter from '../OrderFilter';

import './OrderReport.scss';

const OrderReport = () => {

  return (
    <div className="order-report">
      <Dashboard/>
      <OrderFilter />
    </div>
  )
}

export default OrderReport;