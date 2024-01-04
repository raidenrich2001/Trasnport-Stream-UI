import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

export default function Index() {
  return (
    <div>
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <Outlet></Outlet>
    </div>
  )
}
