import React from 'react'
import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"
import List from "../../components/table/Table"

const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">
              Eddit
            </div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://bipbap.ru/wp-content/uploads/2015/02/af79990bd32ef52c260480f8e6a2b32d5a446703a0e2c99c3ad12c8e17c9a181.jpg" alt="" className="itemImg" />
              <div className="detalis">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detalItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">Janedoe@gmail.com</span>
                </div>
                <div className="detalItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+17 8434849218</span>
                </div>
                <div className="detalItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Davinton, 17, jone streat 5.</span>
                </div>
                <div className="detalItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">NONAME</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={5/1} title="User Spending ( Last 6 Months )" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  )
}

export default Single