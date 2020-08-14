import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import axios from 'axios';

const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares)

// You would import the action from your codebase in a real scenario
function success() {
    return {
        type: 'SEND_DATA'
    }
}

function fetchData(data) {
    return dispatch => {
        return axios.post('http://localhost:4000/', data).then(() => dispatch(success()))
    };
}

it('should execute fetch data', () => {
    const store = mockStore({})

    // Return the promise
    return store.dispatch(fetchData({ frase: 'Es un misterio dentro de un enigma envuelto en un acertijo' }))
        .then(() => {
            const actions = store.getActions()
            expect(actions[0]).toEqual(success())
        })
})