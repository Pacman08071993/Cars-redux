import * as Actions from '../types';

const initialState = {
  loading: false,
  error: false,
  data: [],
  currentCar: {},
  isShowModal: false
};

const reducerCar = (state = initialState, action) => {
  switch (action.type) {
  case Actions.requestCarsList: {
    return { ...state, loading: true };
  }

  case Actions.getCarList: {
    return { ...state, loading: false, data: action.payload };
  }

  case Actions.getCarListError: {
    return { ...state, loading: false, error: action.payload };
  }

  case Actions.requestCategory: {
    return { ...state, loading: true };
  }

  case Actions.getCategory: {
    return { ...state, loading: false, data: action.payload };
  }

  case Actions.getCategoryError: {
    return { ...state, loading: false, error: action.error };
  }

  case Actions.requestCar: {
    return { ...state, loading: true };
  }

  case Actions.getCar: {
    return { ...state, loading: false, currentCar: action.payload };
  }

  case Actions.getCarError: {
    return { ...state, loading: false, error: action.payload };
  }

  case Actions.showModal: {
    return { ...state, isShowModal: true };
  }

  case Actions.hideModal: {
    return { ...state, isShowModal: false };
  }

  default: return state;
  }
};

export default reducerCar;