import styled from "styled-components";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import Comments from "../components/Comments";
import Card from "../components/Card";

const Container = styled.div`
  display: flex;
  margin: 25px 50px;
`;
const Content = styled.div`
  flex: 5;
`;
const VideoWrapper = styled.div`
  display: block;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Hr = styled.hr`
  margin: 15px 0;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Recommendation = styled.div`
  flex: 2;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 13px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="720"
            src="https://www.youtube.com/embed/Fr1dswzoxhw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>789, 432 views - 1 day ago</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlinedIcon /> 543
            </Button>
            <Button>
              <ThumbDownOutlinedIcon /> Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <LibraryAddOutlinedIcon /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src="https://pixelbox.ru/wp-content/uploads/2021/01/game-avatar-youtube-55.jpg" />
            <ChannelDetail>
              <ChannelName>Enkeym</ChannelName>
              <ChannelCounter>200k subscribe</ChannelCounter>
              <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet.
                Fugiat ducimus corrupti temporibus reiciendis? Iste, consectetur!
                Amet praesentium enim facilis eaque nemo dolorum cumque similique
                ipsa, odio sunt, cupiditate quis magnam?
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommendation>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recommendation>
    </Container>
  );
};

export default Video;
