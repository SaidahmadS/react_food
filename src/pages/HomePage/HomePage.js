import MainSection from '../../containers/MainSection';
import MainSearch from '../../containers/MainSearch';
import Selection from '../../containers/Selection';
import SortDishes from '../../components/SortDishes/SortDishes';
import MainFooter from '../../containers/MainFooter';

import './HomePage.scss';

const HomePage = () => {

  return(
    <div className="home-page">
        <div className="home-center">
            <MainSearch />
            <SortDishes />
            <Selection/>
            <MainFooter/>
          </div>
          <div className="home-right">
            <MainSection/>
          </div>
      </div>
  )
}

export default HomePage;