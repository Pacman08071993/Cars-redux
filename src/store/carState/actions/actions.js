import * as Types from '../types';

const requestCarsList = () => ({ type: Types.requestCarsList });
const getCarList = data => ({ type: Types.getCarList, payload: data });
const getCarListError = error => ({ type: Types.getCarListError, payload: error });

const requestCategory = () => ({ type: Types.requestCarsList });
const getCategory = data => ({ type: Types.getCategory, payload: data });
const getCategoryError = error => ({ type: Types.getCategoryError, payload: error });

const requestCar = () => ({ type: Types.requestCar });
const getCar = carId => ({ type: Types.getCar, payload: carId });
const getCarError = error => ({ type: Types.getCarError, payload: error });

export const showModal = () => ({ type: Types.showModal });
export const hideModal = () => ({ type: Types.hideModal });

export const getDataCarList = carShop => () => dispatch => {
  dispatch(requestCarsList);
  carShop.getCarList()
    .then(r => dispatch(getCarList(r)))
    .catch(e => dispatch(getCarListError(e)));
};

export const getDataCategory = (carShop, name) => () => dispatch => {
  dispatch(requestCategory);
  carShop.getCarCategory(name)
    .then(r => dispatch(getCategory(r)))
    .catch(e => dispatch(getCategoryError(e)));
};

export const getDataCar = (carShop, carId) => () => dispatch => {
  dispatch(requestCar);
  carShop.getCar(carId)
    .then(r => dispatch(getCar(r)))
    .catch(e => dispatch(getCarError(e)));
};


