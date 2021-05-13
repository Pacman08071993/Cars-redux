import './CarItem.css';
import Button from '../../../../../baseComponent/Button';
import { NavLink } from 'react-router-dom';

const CarItem = ({ model, name, showMore, id }) => {
  const setCurCar = id => {
    localStorage.setItem('curCarId', id);
  };

  return (
    <div className='CarItem'>
      <h3>Mark: {name}</h3>
      <h4>Model: {model}</h4>
      <NavLink to='/car'><Button showMore={() => setCurCar(id)} nameButton='More'/></NavLink>
    </div>
  );
};

export default CarItem;