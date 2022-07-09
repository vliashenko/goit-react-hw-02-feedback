import React from 'react';
import { Message } from "./Notification.styled";
import PropTypes from "prop-types";

const Notification = ({ notification }) => {
    return (
        <Message>
            { notification }
        </Message>
    );
};

Notification.propTypes = {
    notification: PropTypes.string.isRequired
}

export default Notification;