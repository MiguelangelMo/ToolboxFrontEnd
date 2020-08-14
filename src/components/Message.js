import React from 'react';
import { useSelector } from 'react-redux';

const Message = () => {

    const frase = useSelector((state) => state.data.data);
    const message = useSelector((state) => state.data.message);

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-body">
                    {frase ? (<p className="lead text-center">{frase.msg}</p>) : <p className="lead text-center">Cargando...</p>}
                    {message ? (<div class="alert alert-danger" role="alert">
                        {message}
                    </div>) : null}
                </div>
            </div>
        </div>
    );
}

export default Message;