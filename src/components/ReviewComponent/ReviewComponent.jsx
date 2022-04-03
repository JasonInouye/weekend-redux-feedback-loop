import axios from 'axios';
import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

function reviewFeedback() {
    console.log('inside of reviewFeedback');

    const history = useHistory();
    const dispatch = useDispatch();
    const [edit, setEdit] = useState('');

    //STORE data from reducers
    const feeling = useSelector(store => store.feelingReducer);
    const under = useSelector(store => store.underReducer);
    const support = useSelector(store => store.supportReducer);
    const comment = useSelector(store => store.commentReducer);

    const handleSubmit = () => {
        console.log('inside of handleSubmit', feeling, under, support, comment);

        axios.post('/api/feedback', {
            feeling: feeling,
            understanding: under,
            support: support,
            comments: comment
        }).then(response => {
            console.log('feedback submitted');
        }).catch(err => {
            console.log(err);
        })
        // clear feedback data from store after sending to database
        history.push('/');
        dispatch({ type: 'CLEAR_FEEDBACK_DATA' });
    }

    // button could pass a value to run a switch on history.push?
    const handleEditFeeling = () => {
        console.log('clicked inside of edit');
        dispatch({ type: 'EDIT_RESPONSES' });
        history.push('/');
    }
    const handleEditUnder = () => {
        console.log('clicked inside of edit');
        dispatch({ type: 'EDIT_RESPONSES' });
        history.push('/understanding');
    }
    const handleEditSupport = () => {
        console.log('clicked inside of edit');
        dispatch({ type: 'EDIT_RESPONSES' });
        history.push('/support');
    }
    const handleEditComment = () => {
        console.log('clicked inside of edit');
        dispatch({ type: 'EDIT_RESPONSES' });
        history.push('/comment');
    }

    return (
        <div>
            <h3>Review your feedback</h3>
            <p>Feelings: {feeling}</p><button onClick={handleEditFeeling}>Edit</button>
            <p>Understanding: {under}</p><button onClick={handleEditUnder}>Edit</button>
            <p>Support: {support}</p><button onClick={handleEditSupport}>Edit</button>
            <p>Comments: {comment}</p><button onClick={handleEditComment}>Edit</button>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default reviewFeedback;

