import { useState } from 'react';
import { useContext } from 'react';
import { FoodContext } from '../../FoodContext/FoodContext';
import Payment from './Payment';
import classes from './sectionBottom.module.scss';

const SectionBottom = () => {
  const {priceArr} = useContext(FoodContext)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let newClass = [];
    if(open) {
        newClass = [classes.modal, classes.open];
    } else {
        newClass = [classes.modal];
    }

    let subTotal = 0
  priceArr.forEach(i => {
    subTotal += i.price
  })

  return (
    <div className={classes.sectionBottom}>
      <div className={classes.discount}>
        <p>Discount</p>
        <h3>$ 0</h3>
      </div>
      <div className={classes.discount}>
        <p>Sub total</p>
        <h3>$ {subTotal.toFixed(2)}</h3>
      </div>
      <div onClick={handleClose} className={newClass.join(' ')}></div>
      <div onClick={handleOpen} className={classes.button}>
        Continue to Payment
        {open ? 
          <Payment />
          : null
        }
      </div>
    </div>
  )
};

export default SectionBottom;