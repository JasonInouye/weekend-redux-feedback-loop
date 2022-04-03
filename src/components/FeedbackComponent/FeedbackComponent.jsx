import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FeedbackItem from '../FeedbackItem/FeedbackItem';
import  Button from '@material-ui/core/Button';

function FeedbackComponent({getFeedback}) {
    const feedbackList = useSelector(store => store.feedbackList);
    const history = useHistory();
    const dispatch = useDispatch();
    //console.log('this is what the feedbackList looks like', feedbackList);
    const handleHome = () => {
        history.push('/')
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Understanding</th>
                        <th>Support</th>
                        <th>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    {feedbackList.map(feedbackItem => (
                        <FeedbackItem
                            key={feedbackItem.id}
                            feedbackItem={feedbackItem}
                        />
                    ))}
                </tbody>
            </table>
            <Button type="submit" variant="contained" color="primary" size="small" onClick={handleHome}>Home</Button>
        </div >
    )
}

export default FeedbackComponent