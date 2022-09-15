import ButtonCategories from "./ButtonCategories";
import './ProductHeader.scss'
import manageIcon from '../../assets/images/icons/manageCategories.svg'
import { useState } from "react";

const dataLink = [
    { path: '/settings/managment/hotdishes', text: 'Hot Dishes' },
    { path: '/settings/managment/colddishes', text: 'Cold Dishes' },
    { path: '/settings/managment/soup', text: 'Soup' },
    { path: '/settings/managment/grill', text: 'Grill' },
    { path: '/settings/managment/appetizer', text: 'Appetizer' },
    { path: '/settings/managment/dessert', text: 'Dessert' },
]


function ProductHeader() {
    const [activeBtn, setActiveBtn] = useState('')

    return (  
        <div className="product-header">
            <div className="categories">
                <h1>Products Management</h1>
                <div className="manage-categories">
                    <img src={manageIcon} alt="" />
                    <p>Manage Categories</p>
                </div>
            </div>
            <div className="links">
                {dataLink.map((item, index) => (
                    <ButtonCategories
                        key={index}
                        path={item.path} 
                        text={item.text} 
                        activeBtn={activeBtn}
                        setActiveBtn={setActiveBtn}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProductHeader;