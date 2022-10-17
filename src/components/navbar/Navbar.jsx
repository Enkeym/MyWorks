import "./navbar.scss"
import React, { useContext } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import ListIcon from '@mui/icons-material/List';
import { DarkModeContext } from "../../context/DarkModeContext";

const Navbar = () => {

  const { dispatch } = useContext(DarkModeContext)

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className="icon" onClick={()=>dispatch({type:"TOGGLE"})} />
          </div>
          <div className="item">
            <FullscreenExitIcon />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListIcon className="icon" />
          </div>
          <div className="item">
            <img className="avatar" src="https://pixelbox.ru/wp-content/uploads/2020/11/ava-maincraft-youtube-76.jpg" alt="avatar" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar