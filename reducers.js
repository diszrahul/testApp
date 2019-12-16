import {
  DISPLAY_LOADER,
} from './actions';

const initialState = {
  _showLoader: false,
};

const dataReducer = (state = initialState, action) => {

  switch (action.type) {
    case DISPLAY_LOADER: {
      const newState = Object.assign({}, state, { _showLoader: action.data });
      return newState;
    }
}
}

export default dataReducer;