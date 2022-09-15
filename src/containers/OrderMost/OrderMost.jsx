import circle from '../../assets/images/Circle.png'
import './OrderMost.scss'

function OrderMost() {
    return (
        <div className="order-most">
            <div className="most-order">
                <h1>Most Type of Order</h1>
                <select>
                    <option value="today">Today</option>
                    <option value="week">Week</option>
                    <option value="month">Month</option>
                </select>
            </div>
            <div className="rounding">
                <img src={circle} alt="" />
                <div className="customers">
                    <div className="span">
                        <span className="span1"></span>
                        <div className="title">
                            <h4>Dine In</h4>
                            <p>200 customers</p>
                        </div>
                    </div>
                    <div className="span">
                        <span className="span2"></span>
                        <div className="title">
                            <h4>Dine In</h4>
                            <p>122 customers</p>
                        </div>
                    </div>
                    <div className="span">
                        <span className="span3"></span> 
                        <div className="title">
                            <h4>Dine In</h4>
                            <p>264 customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderMost;