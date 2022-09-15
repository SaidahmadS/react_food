
import './SectionTop.scss';

const SectionTop = () => {
  return (
    <div className="section-top">
      <h2>Orders #34562</h2>
      <div className="links">
        <div className="link">
          <h4>Dine In</h4>
        </div>
        <div className="link">
          <h4>To Go</h4>
        </div>
        <div className="link">
          <h4>Delivery</h4>
        </div>
      </div>
      <div className="titles">
        <h3>Item</h3>
        <div className="titles-right">
          <h3>Qty</h3>
          <h3>Price</h3>
        </div>
      </div>
    </div>
  )
}

export default SectionTop;
