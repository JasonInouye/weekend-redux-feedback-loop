import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function supportComponent () {
    console.log( 'inside of supportComponent' );

    const history = useHistory();
    const dispatch = useDispatch();
    const [ support, setSupport ] = useState('');

    const handleChange = (event) => {
        const target = event.target;
        if (target.checked) {
            setSupport(target.value);
        }
     };

    const handleSupport = (event) => {
        event.preventDefault();
        console.log( 'inside of handleSupport component' );
        //Validate value is not empty before dispatching
        if ( support == ''){
            alert('A value must be selected');
            return false
        }
        dispatch({ type: 'SET_SUPPORT', payload: support });
        setSupport('');
    }

    return (
        <form onSubmit={handleSupport}>
            <p>How well are you being supported?</p>
            {/* <input
                required
                placeholder = "Support"
                value = { support }
                type = "text"
                onChange = {(event) => setSupport(event.target.value)}
            /> */}
            <label htmlFor="support">Not Supported</label>
            <input type="radio" 
                name ="chooseSupport" 
                id="1" 
                value="1" 
                checked={support === '1'} 
                onChange={handleChange}
                />
            <input type="radio" 
                name ="chooseSupport" 
                id="2" 
                value="2"
                checked={support === '2'} 
                onChange={handleChange}
                />
            <input type="radio" 
                name ="chooseSupport" 
                id="3" 
                value="3" 
                checked={support === '3'} 
                onChange={handleChange}
                />
            <input type="radio" 
                name ="chooseSupport" 
                id="4" 
                value="4" 
                checked={support === '4'} 
                onChange={handleChange}
                />
            <input type="radio" 
                name ="chooseSupport" 
                id="5" 
                value="5" 
                checked={support === '5'} 
                onChange={handleChange}
                />                
            <label htmlFor="support">Well Supported</label>
            <button type="submit">Next</button>
        </form>
    )
}

export default supportComponent;