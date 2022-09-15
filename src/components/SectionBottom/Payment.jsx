import { CreditCard, Paypal, Cash } from '../../assets/icons/icons';
import classNames from './payment.module.scss'

function Payment() {

    return (
        <div className={classNames.paymentModal}>
            <div className={classNames.paymentTitle}>
                <h1>Payment</h1>
                <p>3 payment method available</p>
                <div className={classNames.line}></div>
            </div>
            <div className={classNames.paymentForm}>
                <h1>Payment Method</h1>
                <div className={classNames.cards}>
                    <div className={classNames.card}>
                        <CreditCard />
                        <p>Credit Card</p>
                    </div>
                    <div className={classNames.card}>
                        <Paypal />
                        <p>Paypal</p>
                    </div>
                    <div className={classNames.card}>
                        <Cash />
                        <p>Cash</p>
                    </div>
                </div>
                <form>
                    <div>
                        <label htmlFor="card-name">Cardholder Name</label> <br />
                        <input id="card-name" type="text" placeholder="Levi Ackerman" />
                    </div>
                    <div>
                        <label htmlFor="card-number">Card Number</label> <br />
                        <input id="card-number" type="number" placeholder="2564 1421 0897 1244" />
                    </div>
                    <div className={classNames.pasDate}>
                        <div className={classNames.date}>
                            <label htmlFor="date">Expiration Date</label> <br />
                            <input id="date" type="date" placeholder="02/2022" />
                        </div>
                        <div>
                            <label htmlFor="password">CVV</label> <br />
                            <input id="password" type="password" placeholder="password" />
                        </div>
                    </div>
                </form>
                <div className={classNames.line}></div>
            </div>
            <div className={classNames.paymentSend}>
                <div className={classNames.inputSelect}>
                    <div>
                        <label htmlFor="">Order Type</label> <br />
                        <select name="" id="">
                            <option value="">Dine In</option>
                            <option value="">Dine In</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Table no.</label> <br />
                        <input id="" type="text" placeholder="password" />
                    </div>  
                </div>
                <div className={classNames.buttons}>
                    <button className={classNames.button}>Cancel</button>
                    <button className={classNames.button1}>Confirm Payment</button>
                </div>
            </div>
        </div>
    );
}

export default Payment;