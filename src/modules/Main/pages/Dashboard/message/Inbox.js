import React from 'react'
import styled from 'styled-components'
import { SolidButtonStyle } from 'components/Common/Button/style'
import ChatIcon from 'components/Icons/Sidebar/ChatIcon'

const MessageBox = styled.div`
padding: 10px;
border: 1px solid white;
width:30%;
`
const Text = styled.div`
color:white;
font-size:1rem;
`
const In = styled.div`
display:flex;
justify-content:space-between


`
const Inbox = () => {
    return (
        <MessageBox>
            <In>
                <Text>Inbox</Text>
                <SolidButtonStyle>0 Unread Messages</SolidButtonStyle>
            </In>
            <ChatIcon></ChatIcon>
        </MessageBox>
    )
}

export default Inbox
