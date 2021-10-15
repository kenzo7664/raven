import React from 'react'
import styled  from 'styled-components'
import Inbox from './Inbox'

const Text = styled.h1`
color:white;
font-size:1rem;
text-decoration:underline #5458F7;
text-decoration-thickness:3px;
padding-left:30px;
`
const Div = styled.div`
// border: 1px solid white;
width:100%;
height: 100vh;
margin-top:10%;
margin-left:5%;
`

const SubDiv = styled.div`
border: 1px solid white;
width:100%;
height: 90vh;
display:flex;

`


const Message = () => {
    return (
        <Div>
            <Text>Messages</Text>
            <SubDiv>
                <Inbox></Inbox>
            </SubDiv>
        </Div>
    )
}

export default Message
