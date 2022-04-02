import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function supportComponent () {
    console.log( 'inside of supportComponent' );

    const history = useHistory();
    const dispatch = useDispatch();
    const [ support, setSupport ] = useState('');

    const handleSupport = (event) => {
        event.preventDefault();
        console.log( 'inside of handleSupport component' );
        dispatch({ type: 'SET_SUPPORT', payload: support });
        setSupport('');
    }

    return (
        <form onSubmit={handleSupport}>
            <p>How well are you being supported?</p>
            <input
                required
                placeholder = "Support"
                value = { support }
                type = "text"
                onChange = {(event) => setSupport(event.target.value)}
            />
            <button type="submit">Next</button>
        </form>
    )
}

export default supportComponent;