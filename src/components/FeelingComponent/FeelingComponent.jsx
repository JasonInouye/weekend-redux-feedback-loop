import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';



function FeelingComponent() {
    console.log('inside of FeelingComponent');

    const history = useHistory();
    const dispatch = useDispatch();
    const [feeling, setFeeling] = useState('');

    const handleFeeling = () => {
        console.log( 'CLICKED' );
    }

    return (
        <div>
            <form onSubmit={handleFeeling}>
                <p>How are you feeling today?</p>
                <input
                    required
                    placeholder='Feeling'
                    value={feeling}
                    type="text"
                    onChange={(event) => setFeeling(event.target.value)}
                />
                <button type="submit">Next</button>
            </form>
        </div>
    )
}

export default FeelingComponent