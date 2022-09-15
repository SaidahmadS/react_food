import editIcon from '../../assets/images/icons/edit.svg'

import './ProductMainItem.scss'

function ProductMainItem({img, name, price, bowls}) {

    return (  
        <div className="product-main-item">
            <div className="wrapper">
                <img src={img} alt="" />
                <h4>{name}</h4>
                <div className="price-bowl">
                    <span className="price">$ {price}</span>
                    <span className="dot"></span>
                    <span className="bowl">{bowls} Bowls</span>
                </div>
            </div>
            <div className="edit">
                <img src={editIcon} alt="" />
                <p>Edit dish</p>
            </div>
        </div>
    );
}

export default ProductMainItem;