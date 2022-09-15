import dish1 from '../../assets/images/Cold1.jfif'
import dish2 from '../../assets/images/Cold2.png'
import dish3 from '../../assets/images/Cold3.jfif'

import './OrderInfo.scss';

const OrderInfo = () => {

  return (
    <div className="order-info">
      <div className="most-order">
        <h1>
          Most Order
        </h1>
        <select>
          <option value="today">Today</option>
          <option value="week">Week</option>
          <option value="month">Month</option>
        </select>
      </div>
      <div className="foods">
        <div className="food">
          <img src={dish1} alt="" />
          <div className="food-title">
            <h4>Bowtie Chicken Caesar Salad</h4>
            <span>200 dishes ordered</span>
          </div>
        </div>
        <div className="food">
          <img src={dish2} alt="" />
          <div className="food-title">
            <h4>Veggie burrito bowls with grilled mango</h4>
            <span>140 dishes ordered</span>
          </div>
        </div>
        <div className="food">
          <img src={dish3} alt="" />
          <div className="food-title">
            <h4>Skinny Chicken Salad</h4>
            <span>250 dishes ordered</span>
          </div>
        </div>
        <div className="button">
          <button>View All</button>
        </div>
      </div>
    </div>
  )
}

export default OrderInfo;