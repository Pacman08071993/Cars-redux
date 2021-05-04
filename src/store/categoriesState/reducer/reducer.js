import * as Actions from '../types';

const initialState = {
  loading: false,
  error: false,
  data: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case Actions.requestCategories: {
    return {};
  }

  case Actions.getCategories: {
    return {};
  }

  case Actions.getCategoriesError: {
    return {};
  }

  default: return state;
  }
};

export default reducer;