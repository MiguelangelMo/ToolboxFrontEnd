import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { send_msg } from '../actions/sendAction';

const Form = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const [vacio, setvacio] = useState(null);
    const [state, setstate] = useState({
        frase: ''
    });

    const { frase } = state;

    const alerta = () => {
        setTimeout(() => {
            setvacio(false);
        }, 3000);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (!frase.length) {
            setvacio(true);
            alerta();
            return null;
        }

        dispatch(send_msg(state));
        history.push('/message');
    }

    return (
        <div className="container mt-5">
            <div className="card w-50  m-auto">
                <div className="card-body">
                    <h2 className="card-title lead text-center">Escribe una frase</h2>
                    {vacio ?
                        (
                            <div className="alert alert-warning" role="alert">
                                Por favor, complete el campo.
                            </div>
                        )
                        : null}
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="frase" className="lead">Escribe lo que pienses</label>
                            <input type="text"
                                onChange={(e) => setstate({ ...state, [e.target.name]: e.target.value })}
                                value={frase}
                                className="form-control"
                                name="frase"
                                id="frase"
                                aria-describedby="emailHelp"
                                placeholder="¿Qué piensas?" />
                        </div>
                        <div className="form-group">
                            <input type="submit"
                                className="btn btn-primary btn-lg btn-block"
                                name="frase"
                                id="frase"
                                aria-describedby="emailHelp" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;