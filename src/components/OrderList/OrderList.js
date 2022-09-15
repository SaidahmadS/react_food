import avatar from '../../assets/images/Avatar 1.png';

import './OrderList.scss';

const OrderList = () => {
  return (
    <div className="order-list">
      <div>
        <img src={avatar} alt=""/>
      </div>
      <div>
        <p className="name">Eren Jaegar</p>
      </div>
      <div>
        <p className="text">Spicy seasoned seafood noodles </p>
      </div>
      <div>
        <p className="price">$125</p>
      </div>
      <div>
        <p className="content">Completed</p>
      </div>
    </div>
  )
}

export default OrderList;