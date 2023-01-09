import PropTypes from 'prop-types';
import { DefaultMessage } from './Notification.styled';

const Notification = ({ message }) => {
    return <DefaultMessage>{ message}</DefaultMessage>
}

Notification.propTypes = {
    message: PropTypes.string.isRequired
}

export default Notification