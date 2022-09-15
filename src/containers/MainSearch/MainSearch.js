import { useContext } from 'react';
import SearchImg from '../../assets/images/icons/Mask.svg'
import { FoodContext } from '../../FoodContext/FoodContext';

import './MainSearch.scss';

const MainSearch = () => {
  const { setSearchInput } = useContext(FoodContext)

  return (
    <div className="main-header">
      <div className="item">
        <h2 className="item-title">Jaegar Resto</h2>
        <div className="item-search">
          <img src={SearchImg} alt=""/>
          <input 
            type="text" 
            placeholder="Search for foods..." 
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}
 
export default MainSearch;
