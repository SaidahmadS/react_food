import { useContext } from 'react';
import {
    coldDishes, 
    hotDishes,
    soup,
    grill,
    appetizer,
    dessert
} from '../../data/Dishes'

import { FoodContext } from '../../FoodContext/FoodContext';
import ProductMainItem from './ProductsMainItem';
import './ProductMain.scss'

function ProductMain() {
    const { activeFood } = useContext(FoodContext)
    let foods = []

    if(activeFood === 'Cold Dishes') {
        foods = coldDishes
    } else if(activeFood === 'Soup') {
        foods = soup
    } else if(activeFood === 'Grill') {
        foods = grill
    } else if(activeFood === 'Appetizer') {
        foods = appetizer
    } else if(activeFood === 'Dessert') {
        foods = dessert
    } else {
        foods = hotDishes
    }

    return (  
        <div className="product-main">
            <div className="added-products">
                <div className="add-food">
                    <span>+</span>
                    <p>Add new dish</p>
                </div>
                {foods.map(item => (
                    <ProductMainItem 
                        img={item.foodImg}
                        name={item.foodName}
                        price={item.foodPrice}
                        bowls={item.numFood} 
                    />
                ))}
            </div>
            <div className="buttons">
                <button>Discard Changes</button>
                <button>Save Changes</button>
            </div>
        </div>
    );
}

export default ProductMain;