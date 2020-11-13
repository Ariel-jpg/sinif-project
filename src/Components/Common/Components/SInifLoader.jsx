import React from 'react';
import { Sentry } from "react-activity";
import 'react-activity/dist/react-activity.css';

const ActivityWrapper = ({ component: Component, pending = false, pendingColor, pendingSize }) => {
    return <>
        {pending ? <Sentry size={pendingSize} color={pendingColor} /> : Component}
    </>
}

export default ActivityWrapper;