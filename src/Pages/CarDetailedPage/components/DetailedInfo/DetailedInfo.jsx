import { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getDataCar } from '../../../../store/carState/actions';
import carShop from '../../../../Service/carShopService';
import Button from '../../../../baseComponent/Button';
import './DetailedInfo.css';

class DetailedInfo extends Component {
  componentDidMount() {
    const id = localStorage.getItem('curCarId');
    this.props.getCar(id);
  }

  render() {
    const { carData: data = {}, loading } = this.props;

    if (loading) {
      return (
        <div>Loading...</div>
      );
    }

    return (
      <div className='DetailedInfo'>
        <h2>Name: {data.name}</h2>
        <h3>Model: {data.model}</h3>
        <h3>Year: {data.year}</h3>
        <h3>EC: {data.EC}</h3>
        <h3>Fuel: {data.fuel}</h3>
        <p>Dis: {data.description}</p>
        <NavLink to='/user'><Button nameButton='Buy' /></NavLink>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  getCar: id => dispatch(getDataCar(carShop, id)())
});

const mapStateToProps = ({ reducerCar: { currentCar, loading } }) => ({
  loading,
  carData: currentCar
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailedInfo);