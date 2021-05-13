/* eslint-disable no-implicit-coercion */
import ListItem from './ListItem';
import { connect } from 'react-redux';
import { getDataCategory } from '../../../../store/carState/actions';
import carShop from '../../../../Service/carShopService';
import './CategoriesList.css';

const CategoriesList = ({ data, getCategory }) => (
  <div className='CategoriesList'>
    { !!data.length && data.map(item => (
      <ListItem getCategory={() => getCategory(item.name)} name={item.name} id={item.id} key={item.id} />))}
  </div>
);

const mapStateToProps = ({ reducerCategories: { data } }) => ({ data });

const mapDispatchToProps = dispatch => ({
  getCategory: name => dispatch(getDataCategory(carShop, name)())
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);