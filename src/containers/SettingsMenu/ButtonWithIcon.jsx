import { Link } from 'react-router-dom';
import classes from './ButtonWithIcon.module.scss'

function ButtonWithIcon({path, text, subtext, icon, activeBtn, setActiveBtn}) {

    return (  
        <Link 
            to={path}
            className={activeBtn === text ? [classes.link, classes.active].join(' ') : classes.link} 
            onClick={() => setActiveBtn(text)} 
        >
            {icon}
            <div className={classes.title}>
                <h4>{text}</h4>
                <p>{subtext}</p>
            </div>
        </Link>
    );
}

export default ButtonWithIcon;