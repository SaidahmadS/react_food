import { useContext } from 'react';
import { FoodContext } from '../../FoodContext/FoodContext';
import './Selection.scss';

const Selection = () => {
  const { sortFood } = useContext(FoodContext)

  return (
    <div className="selection">
      <h2>Choose Dishes</h2>
      <select onChange={(e) => sortFood(e)} name="" id="">
        <option defaultValue value="">Sort by</option>
        <option value="name">name</option>
        <option value="price">price</option>
      </select>
    </div>
  )
}

export default Selection;