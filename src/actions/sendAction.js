import {
    SEND_DATA,
    ERROR_SEND_DATA,
} from '../types';

import axios from 'axios';

export const send_msg = (data) => {
    return async (dispatch) => {
        const qt = await axios.post('http://localhost:4000/', data);
        try {
            dispatch({
                type: SEND_DATA,
                payload: qt.data,
            })
        } catch (error) {
            dispatch({
                type: ERROR_SEND_DATA,
                payload: 'Hubo un Error en el Sistema',
            })
        }
    }
}