import axios from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

function reviewFeedback () {
    console.log( 'inside of reveiewFeedback' );

    const history = useHistory();
    const dispatch = useDispatch();

    //STORE data from reducers
    const feeling = useSelector( store => store.feelingReducer );
    const under = useSelector( store => store.underReducer );
    const support = useSelector( store => store.supportReducer );
    const comment = useSelector( store => store.commentReducer );

    const handleSubmit = () => {
        console.log( 'inside of handleSubmit' );
    }

    return (
        <div>
            <h3>Review your feedback</h3>
            <p>Feelings: {feeling}</p>
            <p>Understanding: {under}</p>
            <p>Support: {support}</p>
            <p>Comments: {comment}</p>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default reviewFeedback;

