import React from 'react'
import { UserContext, ChannelContext } from '../App'

function ContextE() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    username => {
                        return (
                            <ChannelContext.Consumer>
                                {
                                    channelName => {
                                        return (
                                            <div>
                                                Welcome, {username} - your channel is : {channelName}
                                            </div>)
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ContextE
