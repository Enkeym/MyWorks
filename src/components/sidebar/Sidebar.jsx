import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import AndroidOutlinedIcon from '@mui/icons-material/AndroidOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom'
import React, { useContext } from 'react'

import { } from "@mui/icons-material"
import { DarkModeContext } from "../../context/DarkModeContext";

const Sidebar = () => {

    const { dispatch } = useContext(DarkModeContext)

    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">Enkeym</span>
                </Link>
            </div>
            <div className="center">
                <ul>
                    <p className="title">Main</p>
                    <li>
                        <DashboardIcon className="liIcon" />
                        <span className="liName">Dashboard</span>
                    </li>
                    <p className="title">Lists</p>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonOutlineOutlinedIcon className="liIcon" />
                            <span className="liName">Users</span>
                        </li>
                    </Link>
                    <Link to="/products" style={{ textDecoration: "none" }}>
                        <li>
                            <Inventory2OutlinedIcon className="liIcon" />
                            <span className="liName">Products</span>
                        </li>
                    </Link>
                    <li>
                        <CreditCardOutlinedIcon className="liIcon" />
                        <span className="liName">Orders</span>
                    </li>
                    <li>
                        <LocalShippingOutlinedIcon className="liIcon" />
                        <span className="liName">Delivery</span>
                    </li>
                    <p className="title">Useful</p>
                    <li>
                        <BarChartOutlinedIcon className="liIcon" />
                        <span className="liName">Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneOutlinedIcon className="liIcon" />
                        <span className="liName">Notification</span>
                    </li>
                    <p className="title">Service</p>
                    <li>
                        <HealthAndSafetyOutlinedIcon className="liIcon" />
                        <span className="liName">System Health</span>
                    </li>
                    <li>
                        <AndroidOutlinedIcon className="liIcon" />
                        <span className="liName">Logs</span>
                    </li>
                    <li>
                        <SettingsOutlinedIcon className="liIcon" />
                        <span className="liName">Settings</span>
                    </li>
                    <p className="title">User</p>
                    <li>
                        <AssignmentIndOutlinedIcon className="liIcon" />
                        <span className="liName">Profile</span>
                    </li>
                    <li>
                        <LogoutOutlinedIcon className="liIcon" />
                        <span className="liName">Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={()=> dispatch({type:"LIGHT"})}></div>
                <div className="colorOption" onClick={()=> dispatch({type:"DARK"})}></div>
            </div>
        </div>
    )
}

export default Sidebar