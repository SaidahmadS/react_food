import { Link } from 'react-router-dom';
import SidebarBtn from '../SidebarBtn/SidebarBtn'

import SidebarLogoIcon from '../../assets/images/icons/Logo.svg'
import './SideBar.scss';
import { useState } from 'react';
import { dataUrl } from '../../data/DataUrl';

const SideBar = () => {
  const [activeBtn, setActiveBtn] = useState('')

  return (
    <div className="sidebar">
      <Link to="/" className="sidebar-logo">
        <img src={SidebarLogoIcon} alt=""/>
      </Link>
      {dataUrl.map((item, index) => (
        <SidebarBtn 
          activeBtn={activeBtn} 
          setActiveBtn={setActiveBtn}
          item={item} 
          key={index} 
        />
      ))}
    </div>
  )
}

export default SideBar;