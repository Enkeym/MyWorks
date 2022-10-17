import styled from 'styled-components';
import React from 'react'
import Enkeym from "../img/logo.png"
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpIcon from '@mui/icons-material/Help';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link, NavLink } from 'react-router-dom';

const Container = styled.div`
  flex: 1;
  height: 100vh;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  padding: 18px 26px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 20px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 25px;
`;
const Img = styled.img`
  display: block;
  height: 25px;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;
const Hr = styled.hr`
  margin: 15px 0;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;
const Login = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
`;
const Title = styled.h2`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={Enkeym} />
            Enkeym
          </Logo>
        </Link>
        <Item><HomeIcon />Home</Item>
        <Item><ExploreIcon />Explore</Item>
        <Item><SubscriptionsIcon />Subscriptions</Item>
        <Hr />
        <Item><VideoLibraryIcon />Library</Item>
        <Item><HistoryIcon />History</Item>
        <Hr />
        <Login>
          Sign in to like videos, comment, and subscribe.
          <Link to="Signin" style={{textDecoration:"none"}}>
            <Button><AccountCircleOutlinedIcon />Sign In</Button>
          </Link>
        </Login>
        <Hr />
        <Title>Best of Enkeym</Title>
        <Item><LibraryMusicIcon />Music</Item>
        <Item><SportsVolleyballIcon />Sports</Item>
        <Item><SportsEsportsIcon />Gaming</Item>
        <Item><MovieCreationIcon />Movies</Item>
        <Item><NewspaperIcon />News</Item>
        <Item><LiveTvIcon />Live</Item>
        <Hr />
        <Item><SettingsIcon />Settings</Item>
        <Item><FlagIcon />Report</Item>
        <Item><HelpIcon />Help</Item>
        <Item onClick={() => setDarkMode(!darkMode)}><SettingsBrightnessIcon />
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
      </Wrapper>
    </Container>
  )
}

export default Menu