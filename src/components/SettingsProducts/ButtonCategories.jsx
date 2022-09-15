import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { FoodContext } from '../../FoodContext/FoodContext';

import classes from './ButtonCategories.module.scss'

function ButtonCategories({text, path, activeBtn, setActiveBtn}) {
    const { setActiveFood } = useContext(FoodContext)

    const handleActiveBtn = () => {
        setActiveBtn(text)
        setActiveFood(() => text)
    }

    return (  
        <div className={classes.dishLinks}>
            <Link 
                onClick={handleActiveBtn} 
                className={activeBtn === text ? [classes.dishLink, classes.active].join(' ') : classes.dishLink} 
                to={path} 
            >{text}</Link>
        </div>
    );
}

export default ButtonCategories;