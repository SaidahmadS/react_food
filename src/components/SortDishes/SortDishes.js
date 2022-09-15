import { Link } from 'react-router-dom'
import classes from './SortDishes.module.scss'
import { buttonUrl } from '../../data/DataUrl';
import { useContext, useState } from 'react';
import { FoodContext } from '../../FoodContext/FoodContext';

function SortDishes() {
    const { setActivePath } = useContext(FoodContext)
    const [active, setActive] = useState('')
 
    const activeBtn = (item) => {
        setActivePath(item.path)
        setActive(item.text)
    }

    return (  
        <div className={classes.sortdishes}>
            {buttonUrl.map((item, index) => (
                <Link 
                    onClick={() =>  activeBtn(item)} 
                    className={active === item.text ? [classes.sortlink, classes.active].join(' ') : classes.sortlink} 
                    to={item.path}
                    key={index}
                >{item.text}</Link>
            ))}
        </div>
    );
}

export default SortDishes;