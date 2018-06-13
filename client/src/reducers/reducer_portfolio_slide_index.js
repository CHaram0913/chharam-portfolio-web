import * as TYPES from './../actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case TYPES.CHANGE_PORTFOLIO_SLIDE_INDEX:
            return action.payload

        default:
            return state;
    }
};