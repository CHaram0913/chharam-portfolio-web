import { combineReducers } from 'redux';

import portfolioSlideIndexReducer from './reducer_portfolio_slide_index';

export default combineReducers({
    activeIndex: portfolioSlideIndexReducer,
});
