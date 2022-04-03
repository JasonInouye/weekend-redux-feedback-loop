import axios from 'axios';
import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

function reviewFeedback() {
    //console.log('inside of reviewFeedback');
    const history = useHistory();
    const dispatch = useDispatch();
    const [edit, setEdit] = useState('');

    //STORE data from reducers
    const feeling = useSelector(store => store.feelingReducer);
    const under = useSelector(store => store.underReducer);
    const support = useSelector(store => store.supportReducer);
    const comment = useSelector(store => store.commentReducer);

    const handleSubmit = () => {
        //console.log('inside of handleSubmit', feeling, under, support, comment);
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
        //console.log('clicked inside of edit');
        dispatch({ type: 'EDIT_RESPONSES' });
        history.push('/');
    }
    const handleEditUnder = () => {
        //console.log('clicked inside of edit');
        dispatch({ type: 'EDIT_RESPONSES' });
        history.push('/understanding');
    }
    const handleEditSupport = () => {
        //console.log('clicked inside of edit');
        dispatch({ type: 'EDIT_RESPONSES' });
        history.push('/support');
    }
    const handleEditComment = () => {
        //console.log('clicked inside of edit');
        dispatch({ type: 'EDIT_RESPONSES' });
        history.push('/comment');
    }

    return (
        <div>
            <Typography
                variant="h4"
            >
                Review your feedback
            </Typography>
            <Typography
                variant="h5"
                align="center"
                gutterBottom
            >
                <p>Feelings: {feeling}</p><Button type="submit" variant="contained" color="default" size="small" onClick={handleEditFeeling}>Edit</Button>
                <p>Understanding: {under}</p><Button type="submit" variant="contained" color="default" size="small" onClick={handleEditUnder}>Edit</Button>
                <p>Support: {support}</p><Button type="submit" variant="contained" color="default" size="small" onClick={handleEditSupport}>Edit</Button>
                <p>Comments: {comment}</p><Button type="submit" variant="contained" color="default" size="small" onClick={handleEditComment}>Edit</Button>
            </Typography>

            <br />
            <Button type="submit" variant="contained" color="primary" size="small" onClick={handleSubmit} endIcon={<SendIcon />}>Submit</Button>
        </div>
    )
}

export default reviewFeedback;

