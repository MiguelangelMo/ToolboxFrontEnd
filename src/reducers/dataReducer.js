import {
    SEND_DATA,
    ERROR_SEND_DATA,
    TEST_LOCAL,
} from '../types';

const initialState = {
    message: null,
    data: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SEND_DATA:
            return {
                ...state,
                data: action.payload
            }
        case ERROR_SEND_DATA:
            return {
                ...state,
                message: action.payload
            }
        case TEST_LOCAL:
            return {
                ...state,
                data: action.data
            }

        default:
            return state;
    }
}