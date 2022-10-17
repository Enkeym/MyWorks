import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0;
`;

const Avatar = styled.img`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;

const Name = styled.span`
  display: flex;
  font-size: 14px;
  font-weight: 500;
`;
const Date = styled.div`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;
const Text = styled.div`
  font-size: 14px;
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src='https://pixelbox.ru/wp-content/uploads/2021/01/game-avatar-youtube-55.jpg'/>
      <Details>
        <Name>Nikita Korolev <Date>1 day ago</Date></Name>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti doloremque facere saepe quis id placeat cumque repudiandae culpa est illo dolore nihil deserunt quisquam molestiae nemo, magnam inventore fugiat accusantium.</Text>
      </Details>
    </Container>
  )
}

export default Comment