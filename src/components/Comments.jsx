import React from 'react'
import styled from 'styled-components'
import Comment from './Comment';

const Container = styled.div`

`;

const NewComment = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
`;

const Avatar = styled.img`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.text};
`;

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src='https://pixelbox.ru/wp-content/uploads/2021/01/game-avatar-youtube-55.jpg' />
        <Input placeholder='Add a comment...' />
      </NewComment>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  )
}

export default Comments