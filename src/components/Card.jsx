import { Link } from "react-router-dom";
import styled from 'styled-components'

const Container = styled.div`
  width: ${(props)=>props.type !== "sm" && "360px"};
  margin: ${(props)=>props.type === "sm" ? "0 25px 25px" : "50px"};
  cursor: pointer;
  display: ${(props)=>props.type === "sm" && "flex"};
  gap: 10px;
`;
const Image = styled.img`
  width: ${(props)=>props.type === "sm" && "220px"};
  height: ${(props)=>props.type === "sm" ? "120px" : "202px"};
  background-color: #999;
  flex: 1;
`;
const Details = styled.div`
  display: flex;
  margin-top: ${(props)=>props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;
const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props)=>props.type === "sm" && "none"};
`;
const Texts = styled.div`
  
`;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 10px 0;
`;
const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({type}) => {
  return (
    <Link to="/video/test" style={{textDecoration:"none"}}>
      <Container type={type}>
        <Image type={type} src='https://avatars.mds.yandex.net/get-zen_doc/3373796/pub_5fdf1c31c80827600f3bd35b_5fdf22e9f5a6f429fc323654/scale_1200' />
        <Details type={type}>
          <ChannelImage type={type} src="http://file.mobilmusic.ru/e6/b6/09/1144826-240.jpg" />
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>Enkeym</ChannelName>
            <Info>789, 432 views - 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  )
}

export default Card