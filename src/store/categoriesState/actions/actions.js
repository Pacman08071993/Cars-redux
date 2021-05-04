import * as Types from '../types';

const requestCategoriesList = () => ({ type: Types.requestCategories });
const getCategories = data => ({ type: Types.getCategories, payload: data });
const getCategoriesError = error => ({ type: Types.getCategoriesError, payload: error });

export const getDataCategories = carShop => () => dispatch => {
  dispatch(requestCategoriesList);
  carShop.getListCategories()
    .then(r => dispatch(getCategories(r)))
    .catch(e => dispatch(getCategoriesError(e)));
};