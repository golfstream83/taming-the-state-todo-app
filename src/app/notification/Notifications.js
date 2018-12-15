import React from "react";
import connect from "react-redux/es/connect/connect";
import {getNotifications} from "./selectors";

const Notifications = ({ notifications }) => (
    <div>
        {notifications.map(note => <div key={note}>{note}</div>)}
    </div>
);

const mapStateToPropsNotifications = (state, props) => ({notifications: getNotifications(state)});

export const ConnectedNotifications = connect(mapStateToPropsNotifications)(Notifications);