/* eslint-disable no-implicit-coercion */
import CarItem from './CarItem';
import { connect } from 'react-redux';
import './CarList.css';

const CarList = ({ data }) => (
  <div className='CarList'>
    {!!data.length && data.map(item => <CarItem name={item.name} model={item.model} id={item.id} key={item.id} />)}
  </div>
);

const mapStateToProps = ({ reducerCar: { data } }) => ({ data });


export default connect(mapStateToProps)(CarList);

