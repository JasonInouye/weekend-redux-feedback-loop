import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FeedbackItem from '../FeedbackItem/FeedbackItem';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/styles'




function FeedbackComponent({ getFeedback }) {
    const feedbackList = useSelector(store => store.feedbackList);
    const history = useHistory();
    const dispatch = useDispatch();

    
    const useStyles = makeStyles({
        table: {
            minWidth: 450,
        },
    });

    const classes = useStyles();

    const handleHome = () => {
        history.push('/')
    }

    return (
        <>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Feeling</TableCell>
                            <TableCell align="right">Understanding</TableCell>
                            <TableCell align="right">Support</TableCell>
                            <TableCell>Comments</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {feedbackList.map(feedbackItem => (
                            <FeedbackItem
                                key={feedbackItem.id}
                                feedbackItem={feedbackItem}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button type="submit" variant="contained" color="primary" size="small" onClick={handleHome}>Home</Button>
        </>
    )
}


export default FeedbackComponent