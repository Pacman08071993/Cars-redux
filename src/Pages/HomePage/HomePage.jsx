/* eslint-disable no-console */
import { Component } from 'react';
import { connect } from 'react-redux';
import { getDataCategories } from '../../store/categoriesState/actions';
import { getDataCarList } from '../../store/carState/actions';
import carShop from '../../Service/carShopService';
import CarList from './components/CarList';
import CategoriesList from './components/CategoriesList';
import './HomePage.css';

class HomePage extends Component {
  componentDidMount = () => {
    this.props.getDataListCategories();
    this.props.getDataListCars();
  }

  render() {
    return (
      <div className='HomePage'>
        <CategoriesList/>
        <CarList/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
}

const mapDispatchToProps = dispatch => ({
  getDataListCategories: () => dispatch(getDataCategories(carShop)()),
  getDataListCars: () => dispatch(getDataCarList(carShop)())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);