/* eslint-disable no-implicit-coercion */
import { Component } from 'react';
import CarItem from './CarItem';
import { connect } from 'react-redux';
import './CarList.css';

class CarList extends Component {
  render() {
    return (
      <div className='CarList'>
        {!!this.props.data.length
         && this.props.data.map(item => <CarItem name={item.name} model={item.model} id={item.id} key={item.id} />)}
      </div>
    );
  }
}

const mapStateToProps = ({ reducerCar: { data } }) => ({ data });

export default connect(mapStateToProps)(CarList);

