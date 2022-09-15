
import { data } from './RouteData';
import ButtonWithIcon from './ButtonWithIcon';
import './SettingsMenu.scss'
import { useState } from 'react';

function SettingsMenu() {
    const [activeBtn, setActiveBtn] = useState('')

    return (  
        <div className="settings-menu">
            {data.map((item, index) => (
                <ButtonWithIcon 
                    activeBtn={activeBtn}
                    setActiveBtn={setActiveBtn}
                    path={item.path}
                    text={item.text}
                    subtext={item.subtext}
                    icon={item.icon}
                    key={index} 
                />
            ))}
        </div>
    );
}

export default SettingsMenu;