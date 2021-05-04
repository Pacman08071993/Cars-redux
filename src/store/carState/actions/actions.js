import * as Types from '../types';


const requestCarsList = () => ({ type: Types.requestCarsList });
const getCarList = data => ({ type: Types.getCarList, payload: data });
const getCarListError = error => ({ type: Types.getCarListError, payload: error });

export const getCurrentCar = car => ({ type: Types.currentCar, payload: car });


export const getDataCarList = carShop => () => dispatch => {
  dispatch(requestCarsList);
  carShop.getCarList()
    .then(r => dispatch(getCarList(r)))
    .catch(e => dispatch(getCarListError(e)));
};
