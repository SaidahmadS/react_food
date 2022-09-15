import {Switch, Route, Redirect} from 'react-router-dom'
import AppereancePage from '../../pages/SettingsMenuPages/AppereancePage'
import RestaurantPage from '../../pages/SettingsMenuPages/RestaurantPage'
import AboutPage from '../../pages/SettingsMenuPages/AboutPage'
import BellPage from '../../pages/SettingsMenuPages/BellPage'
import ProductsPage from '../../pages/SettingsMenuPages/ProductsPage'
import SecurePage from '../../pages/SettingsMenuPages/SecurePage'

import './SettingsLayout.scss'

function SettingsLayout() {
  return (  
     <div className="settings-layout">
       <Switch>
         <Route path="/settings/appereance">
            <AppereancePage />
         </Route>
         <Route path="/settings/restaurant">
           <RestaurantPage />
         </Route>
         <Route path="/settings/managment">
           <ProductsPage />
         </Route>
         <Route path="/settings/notification">
           <BellPage />
         </Route>
         <Route path="/settings/security">
           <SecurePage />
         </Route>
         <Route path="/settings/aboutus">
           <AboutPage />
         </Route>
         <Redirect to="/settings/managment" />
       </Switch>
     </div>   
  );
}

export default SettingsLayout;