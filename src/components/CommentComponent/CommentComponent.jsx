import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { TextField, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import { Container } from '@material-ui/core';

function commentComponent() {
    //console.log('inside of commentComponent');
    const history = useHistory();
    const dispatch = useDispatch();
    const [comment, setComment] = useState('');

    const useStyles = makeStyles({
        field: {
            marginTop: 20,
            marginBottom: 20,
            display: 'block'
        }
    })

    const handleComment = () => {
        event.preventDefault();
        //console.log('inside handleComment');
        history.push('/review');
        dispatch({ type: 'SET_COMMENT', payload: comment });
        setComment('');
    }

    return (
        <Container maxWidth="md">
            <form onSubmit={handleComment}>
                <Typography
                    variant="h3"
                    align="center"
                    gutterBottom
                >
                    Any comments you want to leave?
                </Typography>
                <TextField
                    onChange={(event) => setComment(event.target.value)}
                    label="Comments"
                    variant="outlined"
                    multiline
                    rows={3}
                    fullWidth
                />
                <br />
                <Button type="submit" variant="contained" color="primary" size="small">Next</Button>
            </form>
        </Container>

    )
}

export default commentComponent;