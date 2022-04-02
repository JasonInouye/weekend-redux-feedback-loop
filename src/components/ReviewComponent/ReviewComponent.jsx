import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

function reviewFeedback () {
    console.log( 'inside of reviewFeedback' );

    const history = useHistory();
    const dispatch = useDispatch();

    //STORE data from reducers
    const feeling = useSelector( store => store.feelingReducer );
    const under = useSelector( store => store.underReducer );
    const support = useSelector( store => store.supportReducer );
    const comment = useSelector( store => store.commentReducer );

    const handleSubmit = () => {
        console.log( 'inside of handleSubmit', feeling, under, support, comment );

        axios.post('/api/feedback', {
            feeling: feeling,
            understanding: under,
            support: support,
            comments: comment
        }).then( response => {
            console.log( 'feedback submitted' );
        }).catch( err => {
            console.log( err );
        })
        // clear feedback data from store after sending to database
        //dispatch({ type: 'CLEAR_FEEDBACK_DATA' });
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

