import './Total.scss';

const Total = (props) => {
  const {
    iconImg,
    status,
    statusImg,
    totalNumber,
    totalContent
  } = props;

  return (
    <div className="total">
      <div className="total-top">
        <img src={iconImg} alt=""/>
        <span>{status}</span>
        <img src={statusImg} alt=""/>
      </div>
      <h1>{totalNumber}</h1>
      <p>{totalContent}</p>
    </div>
  )
}

export default Total;