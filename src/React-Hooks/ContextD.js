import React, { useContext } from 'react'
import ContextE from './ContextE'
import { UserContext, ChannelContext } from '../App'
function ContextD() {
    const username = useContext(UserContext);
    const channelName = useContext(ChannelContext);
    return (
        <div>
            {/* <ContextE /> */}
            <p>Welcome, {username} - Channel Name: {channelName}</p>
        </div>
    )
}

export default ContextD
