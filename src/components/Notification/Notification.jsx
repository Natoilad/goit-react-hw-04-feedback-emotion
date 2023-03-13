import PropTypes from 'prop-types';
import { Notif } from './Notification.styled';

export const Notification = ({ message }) => <Notif>{message}</Notif>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
