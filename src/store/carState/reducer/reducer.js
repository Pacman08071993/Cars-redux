import * as Actions from '../types';

const initialState = {
  loading: false,
  error: false,
  data: [],
  currentCar: {}
};

const reducer = (state = initialState, action) => {
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

  case Actions.currentCar: {
    return { ...state, currentCar: state.data.find(item => item === action.payload) };
  }

  default: return state;
  }
};

export default reducer;