import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

function FeedbackItem({ feedbackItem }) {
    return (
        <>
            <TableRow>
                <TableCell align="right">{feedbackItem.feeling}</TableCell>
                <TableCell align="right">{feedbackItem.understanding}</TableCell>
                <TableCell align="right">{feedbackItem.support}</TableCell>
                <TableCell>{feedbackItem.comments}</TableCell>
            </TableRow>
        </>
    )
}

export default FeedbackItem