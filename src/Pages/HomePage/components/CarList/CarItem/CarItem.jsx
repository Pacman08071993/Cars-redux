import { Component } from 'react';
import './CarItem.css';
import Button from '../../../../../baseComponent/Button';
import { NavLink } from 'react-router-dom';

class CarItem extends Component {
  render() {
    const setCurCar = id => {
      localStorage.setItem('curCarId', id);
    };

    return (
      <div className='CarItem'>
        <h3>Mark: {this.props.name}</h3>
        <h4>Model: {this.props.model}</h4>
        <NavLink to='/car'>
          <Button showMore={() => setCurCar(this.props.id)} nameButton='More'/>
        </NavLink>
      </div>
    );
  }
}

export default CarItem;