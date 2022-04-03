import { useDispatch } from "react-redux";
import { useState } from "react";

function FeedbackItem({ feedbackItem }) {
    return (
        <>
            <tr>
                <td>{feedbackItem.feeling}</td>
                <td>{feedbackItem.understanding}</td>
                <td>{feedbackItem.support}</td>
                <td>{feedbackItem.comments}</td>
            </tr>
        </>
    )
}

export default FeedbackItem