import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function underComponent () {
    //console.log( 'inside of underComponent' );

    const history = useHistory();
    const dispatch = useDispatch();
    const [ under, setUnder ] = useState('');

    const handleUnder = (event) => {
        event.preventDefault();
        console.log( 'inside of handleUnder' );
        dispatch ({ type: 'SET_UNDER', payload: under})
        setUnder('');
    }

    return (
        <form onSubmit={handleUnder}>
            <p>How well are you understanding the talent?</p>
            <input
                required
                placeholder = "Understanding"
                value = {under}
                type = "text"
                onChange = {(event) => setUnder(event.target.value)}
            />
            <button type="submit">Next</button>
        </form>
    )
}

export default underComponent