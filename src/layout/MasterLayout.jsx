import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/shared/SideBar'

const MasterLayout = () => {
  return (
    <div>
        <SideBar/>
        <Outlet/>
    </div>
  )
}

export default MasterLayout