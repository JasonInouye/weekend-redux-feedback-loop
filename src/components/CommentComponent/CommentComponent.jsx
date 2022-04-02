import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function commentComponent() {
    console.log( 'inside of commentComponent' );

    const history = useHistory();
    const dispatch = useDispatch();
    const [ comment, setComment ] = useState('');

    const handleComment = () => {
        event.preventDefault();
        console.log( 'inside handleComment' );
        dispatch({ type: 'SET_COMMENT', payload: comment });
        setComment('');
    }

    return (
        <form onSubmit={handleComment}>
            <p>Any comments you want to leave?</p>
            <input 
                required
                placeholder = "Comment"
                value = {comment}
                type = "text"
                onChange = {(event) => setComment(event.target.value)}
            />
            <button type="submit">Next</button>
        </form>  
    )
}

export default commentComponent;