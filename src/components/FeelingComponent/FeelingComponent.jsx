import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function FeelingComponent() {
    //console.log('inside of FeelingComponent');

    const history = useHistory();
    const dispatch = useDispatch();
    const [feeling, setFeeling] = useState('');
    //const [ edit, setEdit ] = useState(false);
    const edit = useSelector(store => store.editReducer);


    const handleChange = (event) => {
        const target = event.target;
        if (target.checked) {
            setFeeling(target.value);
        }
    };

    const handleFeeling = (event) => {
        event.preventDefault();
        console.log('Does this get logged');
        //Validate value is not empty before dispatching
        if (feeling == '') {
            alert('A value must be selected');
            return false
        }
        { edit ? history.push('/review') : history.push('/understanding') };
        dispatch({ type: 'SET_FEELING', payload: feeling });
        setFeeling('');
    };

    return (
        <form name="feelingForm" onSubmit={handleFeeling}>
            <p>How are you feeling today?</p>
            {/*<input
                required
                placeholder = "Feeling"
                value = {feeling}
                type = "text"
                onChange = {(event) => setFeeling(event.target.value)}
            /> */}
            <label htmlFor="feeling">Not so Great</label>
            <input type="radio"
                name="chooseFeeling"
                id="1"
                value="1"
                checked={feeling === '1'}
                onChange={(event) => setFeeling(event.target.value)}
            />
            <input type="radio"
                name="chooseFeeling"
                id="2"
                value="2"
                checked={feeling === '2'}
                onChange={handleChange}
            />
            <input type="radio"
                name="chooseFeeling"
                id="3"
                value="3"
                checked={feeling === '3'}
                onChange={handleChange}
            />
            <input type="radio"
                name="chooseFeeling"
                id="4"
                value="4"
                checked={feeling === '4'}
                onChange={handleChange}
            />
            <input type="radio"
                name="chooseFeeling"
                id="5"
                value="5"
                checked={feeling === '5'}
                onChange={handleChange}
            />
            <label htmlFor="feeling">Great!</label>
            <button type="submit">Next</button>
        </form>
    )
}

export default FeelingComponent