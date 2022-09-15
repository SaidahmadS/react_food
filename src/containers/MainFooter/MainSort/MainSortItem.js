import { useContext } from 'react';
import { FoodContext } from '../../../FoodContext/FoodContext';
import './MainSortItem.scss'

function MainSortItem({item}) {
    const { handleFunc } = useContext(FoodContext)

    const handleObj = () => {
        handleFunc(item)
    }

    return (  
        <div onClick={handleObj} className="mainsort-item">
            <img src={item.foodImg} alt="" />
            <h3>{item.foodName}</h3>
            <span>$ {item.foodPrice}</span>
            <p>{item.numFood} Bowls available</p>
        </div>
    );
}

export default MainSortItem;