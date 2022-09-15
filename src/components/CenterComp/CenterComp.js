import './CenterComp.scss';

const CenterComp = ({icon, item, arrId, removeItem}) => {
  
  arrId = arrId.filter(a => a === item.id)
  const removeCount = () => {
    removeItem(item.id)
  }

  let x = 0
  if(arrId.length <= item.numFood) {
    x = arrId.length
  } else {
    x = item.numFood
  }
  
  let total = 0
  total = Math.round(x * Number(item.foodPrice) * 100)/100


  return (
    <div className="center-comp">
      <div className="added">
        <div className="added-left">
          <div className="added-left__top">
            <div className="img-title">
              <div className="img">
                <img src={item.foodImg} alt=""/>
              </div>
              <div className="food-info">
                <h4>{item.foodName}</h4>
                <span>$ {item.foodPrice}</span>
              </div>
            </div>
            <div className="count">
              <p>{x}</p>
            </div>
          </div>
          <div className="added-left__bottom">
            <input type="text" placeholder="Order Note..."/>
          </div>
        </div>
        <div className="added-right">
          <h3>$ {total}</h3>
          <div onClick={removeCount} className="icon">
            {icon}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CenterComp;