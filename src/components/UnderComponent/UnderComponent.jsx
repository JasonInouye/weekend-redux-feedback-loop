import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function underComponent () {
    //console.log( 'inside of underComponent' );

    const history = useHistory();
    const dispatch = useDispatch();
    const [ under, setUnder ] = useState('');

    const handleChange = (event) => {
        const target = event.target;
        if (target.checked) {
            setUnder(target.value);
        }
     };

    const handleUnder = (event) => {
        event.preventDefault();
        console.log( 'inside of handleUnder' );
        //Validate value is not empty before dispatching
        if ( under == ''){
            alert('A value must be selected');
            return false
        }
        history.push('/support');
        dispatch({ type: 'SET_UNDER', payload: under})
        setUnder('');
    }

    return (
        <form onSubmit={handleUnder}>
            <p>How well are you understanding the talent?</p>
            {/* <input
                required
                placeholder = "Understanding"
                value = {under}
                type = "text"
                onChange = {(event) => setUnder(event.target.value)}
            /> */}
            <label htmlFor="support">Don't Understand</label>
            <input type="radio" 
                name ="chooseUnderstanding" 
                id="1" 
                value="1" 
                checked={under === '1'} 
                onChange={handleChange}
                />
            <input type="radio" 
                name ="chooseUnderstanding" 
                id="2" 
                value="2"
                checked={under === '2'} 
                onChange={handleChange}
                />
            <input type="radio" 
                name ="chooseUnderstanding" 
                id="3" 
                value="3" 
                checked={under === '3'} 
                onChange={handleChange}
                />
            <input type="radio" 
                name ="chooseUnderstanding" 
                id="4" 
                value="4" 
                checked={under === '4'} 
                onChange={handleChange}
                />
            <input type="radio" 
                name ="chooseUnderstanding" 
                id="5" 
                value="5" 
                checked={under === '5'} 
                onChange={handleChange}
                />     
             <label htmlFor="under">Fully Understand</label>
            <button type="submit">Next</button>
        </form>
    )
}

export default underComponent