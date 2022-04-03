import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FeedbackItem from '../FeedbackItem/FeedbackItem';

function FeedbackComponent() {
    const feedbackList = useSelector(store => store.feedbackList);
    const history = useHistory();
    //console.log('this is what the feedbackList looks like', feedbackList);

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
        </div >
    )
}

export default FeedbackComponent