import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import SendIcon from '@material-ui/icons/Send';

function thanksFeedback() {

    const history = useHistory();

    const handleAdmin = () => {
        history.push('/admin')
    }

    const handleHome = () => {
        history.push('/')
    }

    return (
        <>
            <h1 className="animate__animated animate__fadeInDown">Thanks for Feedback!</h1>
            <br />
            <Button type="submit" variant="contained" color="primary" size="large" onClick={handleAdmin} endIcon={<SendIcon />}>Admin</Button>
            <Button type="submit" variant="contained" color="primary" size="large" onClick={handleHome}>Home</Button>
        </>
    )
}

export default thanksFeedback