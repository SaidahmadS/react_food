import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './pages/HomePage/HomePage';
import OrderPage from './pages/OrderPage/OrderPage'
import MessagePage from './pages/MessagePage/MessagePage'
import NotificationPage from './pages/NotificationPage/NotificationPage'
import SettingsPage from './pages/SettingsPage/SettingsPage';
import LogoutPage from './pages/LogoutPage/LogoutPage'
import SideBar from './containers/SideBar'

import { FoodContext } from './FoodContext/FoodContext';


import './assets/styles/main.scss';

function App() {
  const [activePath, setActivePath] = useState('')
  const [searchInput, setSearchInput] = useState("")
  const [newArr, setNewArr] = useState([])
  const [arrId, setArrId] = useState([])
  const [foodId, setFoodId] = useState(0)
  const [val, setVal] = useState("")
  const [subTotal, setSubTotal] = useState(0)
  const [priceArr, setPriceArr] = useState([])


  const handleFoods = (f) => {
    let bool = newArr.some(i => i.id === f.id)
    if(!bool) {
      setNewArr(a => [...a, f])
    } else {
      return
    }
  }

  const handleFunc = (item) => {
    handleFoods(item) 
    setArrId(a => [...a, item.id])
    setFoodId(() => item.id)
    handleTotal(item)
  }

  const handleTotal = (idFood) => {
    if(typeof idFood === 'object') {
      priceArr.filter(i => i.ID === idFood.id)
      if(priceArr.length < idFood.numFood) {
        setPriceArr(a => [...a, {ID: idFood.id, price: Number(idFood.foodPrice)}])
      } else {
        return
      }
    } else {
      setPriceArr(() => priceArr.filter(i => i.ID !== idFood))
    }
  }


  const sortFood = (e) => {
    setVal(() => e.target.value)
  }



  return (
      <BrowserRouter>
        <FoodContext.Provider value={{
          val, handleFunc, sortFood, 
          arrId, setArrId,
          foodId,
          newArr, setNewArr, 
          searchInput, setSearchInput,
          activePath, setActivePath,
          subTotal, setSubTotal,
          priceArr, setPriceArr,
          handleTotal
        }}>
          <div className="App">
            <div className="container">
            <SideBar/>
                <div className="content">
                <Switch>
                  <Route exact path="/">
                    <HomePage/>
                  </Route>
                  <Route path="/homepage">
                    <HomePage/>
                  </Route>
                  <Route path="/orderpage" >
                    <OrderPage />
                  </Route>
                  <Route path="/messagepage">
                    <MessagePage/>
                  </Route>
                  <Route path="/notificationpage">
                    <NotificationPage/>
                  </Route>
                  <Route path="/settings" >
                    <SettingsPage/>
                  </Route>
                  <Route path="/logoutpage">
                    <LogoutPage/>
                  </Route>
                  <Redirect to="/" />
                </Switch>
              </div>
            </div>
          </div>
        </FoodContext.Provider>
      </BrowserRouter>
  );
}

export default App;
