import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AddCardIcon from '@mui/icons-material/AddCard';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { Backdrop } from "@mui/material";

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "users":
      data = {
        title: "USERS",
        isMoney: true,
        link: "See all users",
        icon: (
          <PersonOutlineOutlinedIcon className="icon" style={{
            color: "crimson",
            backgroundColor: "rgba(255, 0, 0, .2)",
          }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: true,
        link: "View all orders",
        icon: (
          <AddCardIcon className="icon" style={{
            color: "goldenrod",
            backgroundColor: "rgba(218, 165, 32, .2)",
          }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "ERARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnIcon className="icon" style={{
            color: "green",
            backgroundColor: "rgba(0, 128, 0, .2)",
          }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletIcon className="icon" style={{
            color: "purple",
            backgroundColor: "rgba(128, 0, 128, .2)",
          }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"} {amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget