import * as TYPES from './types';

export function changeSlideIndex(slide_index) {
    return dispatch => {

        dispatch({
            type: TYPES.CHANGE_PORTFOLIO_SLIDE_INDEX, 
            payload: slide_index
        });
    };
}