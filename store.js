import { createStore } from 'redux';

import reducers from './reducers';

// Connect our store to the reducers
export default createStore(reducers);