import SettingsMenu from '../../containers/SettingsMenu/SettingsMenu.jsx';
import SettingsLayout from '../../containers/SettingsLayout/SettingsLayout.jsx';

import './SettingsPage.scss';

const SettingsPage = () => {
  return(
    <div className="settings">
      <h1>Settings</h1>
      <div className="settings-page">
        <SettingsMenu />
        <SettingsLayout/>
      </div>
    </div>
  )
}

export default SettingsPage;