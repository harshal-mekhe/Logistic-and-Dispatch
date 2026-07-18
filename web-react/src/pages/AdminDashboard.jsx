// import React from 'react'
import TopBar from '../components/TopBar'
import LeftSideBar from '../components/LeftSideBar'

const AdminDashboard = () => {
  return (
    <div>
      <TopBar title={"LDMS - ADMIN DASHBOARD"} desc={"Effortlessly coordinate orders, drivers, and vehicles through a single, unified dispatch administration matrix"} role={"admin"}/>
      <LeftSideBar />
    </div>
  )
}

export default AdminDashboard
