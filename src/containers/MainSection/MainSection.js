import SectionTop from '../../components/SectionTop';
import SectionCenter from '../../components/SectionCenter';
import SectionBottom from '../../components/SectionBottom';

import './MainSection.scss';

const MainSection = () => {

  return (
    <div className="main-section">
      <SectionTop/>
      <SectionCenter />
      <SectionBottom />
    </div>
  )
}

export default MainSection;