import Total from '../../components/Total';

import rasm1 from '../../assets/images/icons/image1.svg';
import rasm2 from '../../assets/images/icons/image2.svg';
import rasm3 from '../../assets/images/icons/image3.svg';
import arrow1 from '../../assets/images/icons/arrow1.svg';
import arrow2 from '../../assets/images/icons/arrow2.svg';

import './Dashboard.scss';

const totalInfo = [
  {
    iconImg: rasm1,
    status: '+32.40%',
    statusImg: arrow1,
    totalNumber: '$10,243.00',
    totalContent: 'Total Revenue'
  },
  {
    iconImg: rasm2,
    status: '-12.40%',
    statusImg: arrow2,
    totalNumber: '23,456',
    totalContent: 'Total Dish Ordered'
  },
  {
    iconImg: rasm3,
    status: '+2.40%',
    statusImg: arrow1,
    totalNumber: '1,234',
    totalContent: 'Total Customer'
  }
]

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="title">
        <h1>Dashboard</h1>
        <p>Tuesday 2 Feb, 2021</p>
      </div>
      
      <div className="total-item">
        {
          totalInfo.map((item, index) => (
            <Total
              key={index}
              iconImg={item.iconImg}
              status={item.status}
              statusImg={item.statusImg}
              totalNumber={item.totalNumber}
              totalContent={item.totalContent}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Dashboard;