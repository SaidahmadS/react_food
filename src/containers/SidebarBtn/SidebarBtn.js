import { Link } from 'react-router-dom';
import classes from './SidebarBtn.module.css';

const SidebarBtn = ({item, activeBtn, setActiveBtn}) => {

  let classesName = []
  const handleActive = () => {
    setActiveBtn(() => item.text)
  }

  if(activeBtn === item.text) {
    classesName = [classes.active]
  } else {
    classesName = [classes.link]
  }

  return (
    <div className={classes.sidebarbtn}>
      <Link 
        className={classesName} 
        to={item.path} 
        onClick={handleActive}
      >{item.icon}</Link>
    </div>
  )
}

export default SidebarBtn;