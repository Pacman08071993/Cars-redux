import * as Actions from '../types';

const initialState = {
  loading: false,
  error: false,
  data: [],
  currentCategory: {}
};

const reducerCategories = (state = initialState, action) => {
  switch (action.type) {
  case Actions.requestCategories: {
    return { ...state, loading: true };
  }

  case Actions.getCategories: {
    return { ...state, loading: false, data: action.payload };
  }

  case Actions.getCategoriesError: {
    return { ...state, loading: false, error: action.payload };
  }

  default: return state;
  }
};

export default reducerCategories;