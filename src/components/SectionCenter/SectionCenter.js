import CenterComp from '../../components/CenterComp/CenterComp';
import {RemoveIcon} from '../../assets/icons/icons';

import './SectionCenter.scss';
import { useContext } from 'react';
import { FoodContext } from '../../FoodContext/FoodContext';

const SectionCenter = () => {
  const { newArr, setNewArr, arrId, setArrId, handleTotal } = useContext(FoodContext)

  const removeItem = (id) => {
    setNewArr(() => newArr.filter(a => a.id !== id))
    setArrId(() => arrId.filter(i => i !== id))
    handleTotal(id)
  }


  return (
    <div className="section-center">
        {newArr.map((item, index) => (
          <CenterComp 
            item={item} 
            arrId={arrId} 
            removeItem={removeItem} 
            key={index} 
            icon={<RemoveIcon/>}
          />
        ))}
    </div>
  )
}

export default SectionCenter;