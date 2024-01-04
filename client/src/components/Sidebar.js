import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { action } from '../store/store';
import './css/Sidebar.css';
import {BiHomeAlt2} from 'react-icons/bi';
import {GoReport} from 'react-icons/go';
import {RiAdminLine} from 'react-icons/ri' 

export default function Sidebar() {
  const Toggle = useSelector(state => state.SideBar.toggle)
  const SidebarDropdown = useSelector(state => state.SideBar.sidebarDropDown)
  const dispatch = useDispatch();

  function dropdownDispatch(dropdownName){
    dispatch(action.setSidebarDropdown(SidebarDropdown === dropdownName ? 'close' : dropdownName))
  }
  return (
    <div>
      <nav className={`bg-slate-800 min-h-screen max-h-[200vh] ${Toggle ? 'w-[0%] transition-all' : 'w-[15%] transition-all'} fixed overflow-y-auto overflowStyle`}>
        <ul className={`text-slate-400 ${Toggle ? 'hidden transition-all' : 'block transition-all'}`}>
        <li className='m-4 dropdown'>
            <button type="button" className="flex items-center w-full rounded-lg group text-slate-200" onClick={() => dropdownDispatch('Client')}>
                <BiHomeAlt2></BiHomeAlt2>
                <span className="flex-1 text-left whitespace-nowrap ml-5">Client</span>
                <svg sidebar-toggle-item className={`w-6 h-6 transition-all duration-500 ${SidebarDropdown === 'Client' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
            <ul  className={`transition-all duration-500 ${SidebarDropdown === 'Client' ? 'max-h-96 overflow-y-auto' : 'max-h-0'} overflow-hidden ease-in-out sidebarOverflow text-sm`}>
              <li>
                <NavLink to='/client/command' className={({isActive}) => `flex items-center w-full ${isActive && 'text-white'} hover:text-white rounded-lg my-4 mx-3 group`}>Command</NavLink>
              </li>
              <li>
                <NavLink to='/client/command_transaction' className={({isActive}) => `flex items-center w-full ${isActive && 'text-white'} hover:text-white rounded-lg my-4 mx-3 group`}>Command Transaction</NavLink>
              </li>
              <li>
                <NavLink to='/client/stbmonitoraction' className={({isActive}) => `flex items-center w-full ${isActive && 'text-white'} hover:text-white rounded-lg my-4 mx-3 group`}>STB Monitor Action</NavLink>
              </li>
              <li>
                <NavLink to='/client/monitorstatus' className={({isActive}) => `flex items-center w-full ${isActive && 'text-white'} hover:text-white rounded-lg my-4 mx-3 group`}>Monitor Status</NavLink>
              </li>
              <li>
                <NavLink to='/client/monitorreport' className={({isActive}) => `flex items-center w-full ${isActive && 'text-white'} hover:text-white rounded-lg my-4 mx-3 group`}>Monitor Report</NavLink>
              </li>
              <li>
                <NavLink to='/client/monitornitstatus' className={({isActive}) => `flex items-center w-full ${isActive && 'text-white'} hover:text-white rounded-lg my-4 mx-3 group`}>Monitor NIT Status</NavLink>
              </li>
              <li>
                <NavLink to='/client/stbonlinestatus' className={({isActive}) => `flex items-center w-full ${isActive && 'text-white'} hover:text-white rounded-lg my-4 mx-3 group`}>STB Online Status</NavLink>
              </li>
              <li>
                <NavLink to='/client/dashboard' className={({isActive}) => `flex items-center w-full ${isActive && 'text-white'} hover:text-white rounded-lg my-4 mx-3 group`}>Dashboard</NavLink>
              </li>
            </ul>
          </li>
          <li className='m-4 dropdown'>
            <button type="button" className="flex items-center w-full rounded-lg group text-slate-200" onClick={() => dropdownDispatch('Reports')}>
                <GoReport></GoReport>
                <span className="flex-1 text-left whitespace-nowrap ml-5">Reports</span>
                <svg sidebar-toggle-item className={`w-6 h-6 transition-all duration-500 ${SidebarDropdown === 'Reports' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
            <ul  className={`transition-all duration-500 ${SidebarDropdown === 'Reports' ? 'max-h-96 overflow-y-auto' : 'max-h-0'} overflow-hidden ease-in-out sidebarOverflow text-sm`}>
              <li>
                <NavLink to='/reports/changemonitorreport' className={({isActive}) => `flex items-center w-full ${isActive && 'text-white'} hover:text-white rounded-lg my-4 mx-3 group`}>Change Monitor Report</NavLink>
              </li>
              <li>
                <NavLink to='/reports/networksummary' className={({isActive}) => `flex items-center w-full ${isActive && 'text-white'} hover:text-white rounded-lg my-4 mx-3 group`}>Network Summary</NavLink>
              </li>
              <li>
                <NavLink to='/reports/networkdetails' className={({isActive}) => `flex items-center w-full ${isActive && 'text-white'} hover:text-white rounded-lg my-4 mx-3 group`}>Network Details</NavLink>
              </li>
            </ul>
          </li>
          <li className='m-4 dropdown'>
            <button type="button" className="flex items-center w-full rounded-lg group text-slate-200" onClick={() => dropdownDispatch('Admin')}>
                <RiAdminLine></RiAdminLine>
                <span className="flex-1 text-left whitespace-nowrap ml-5">Admin</span>
                <svg sidebar-toggle-item className={`w-6 h-6 transition-all duration-500 ${SidebarDropdown === 'Admin' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
            <ul  className={`transition-all duration-500 ${SidebarDropdown === 'Admin' ? 'max-h-96 overflow-y-auto' : 'max-h-0'} overflow-hidden ease-in-out sidebarOverflow text-sm`}>
              <li>
                <NavLink to='/admin/useradmininfo' className={({isActive}) => `flex items-center w-full ${isActive && 'text-white'} hover:text-white rounded-lg my-4 mx-3 group`}>User/Admin Info</NavLink>
              </li>
              <li>
                <NavLink to='/admin/technicianinfo' className={({isActive}) => `flex items-center w-full ${isActive && 'text-white'} hover:text-white rounded-lg my-4 mx-3 group`}>Technician Info</NavLink>
              </li>
              <li>
                <NavLink to='/admin/stbdetails' className={({isActive}) => `flex items-center w-full ${isActive && 'text-white'} hover:text-white rounded-lg my-4 mx-3 group`}>STB Details</NavLink>
              </li>
              <li>
                <NavLink to='/admin/msodetails' className={({isActive}) => `flex items-center w-full ${isActive && 'text-white'} hover:text-white rounded-lg my-4 mx-3 group`}>MSO Details</NavLink>
              </li>
              <li>
                <NavLink to='/admin/notification' className={({isActive}) => `flex items-center w-full ${isActive && 'text-white'} hover:text-white rounded-lg my-4 mx-3 group`}>Notification</NavLink>
              </li>
              <li>
                <NavLink to='/admin/servicelist' className={({isActive}) => `flex items-center w-full ${isActive && 'text-white'} hover:text-white rounded-lg my-4 mx-3 group`}>Service List</NavLink>
              </li>
              <li>
                <NavLink to='/admin/aliasmapping' className={({isActive}) => `flex items-center w-full ${isActive && 'text-white'} hover:text-white rounded-lg my-4 mx-3 group`}>Alias Mapping</NavLink>
              </li>
              <li>
                <NavLink to='/admin/broadcastermapping' className={({isActive}) => `flex items-center w-full ${isActive && 'text-white'} hover:text-white rounded-lg my-4 mx-3 group`}>Broadcaster Mapping</NavLink>
              </li>
              <li>
                <NavLink to='/admin/configuration' className={({isActive}) => `flex items-center w-full ${isActive && 'text-white'} hover:text-white rounded-lg my-4 mx-3 group`}>Configuration</NavLink>
              </li>
              <li>
                <NavLink to='/admin/webapitokeninfo' className={({isActive}) => `flex items-center w-full ${isActive && 'text-white'} hover:text-white rounded-lg my-4 mx-3 group`}>WebAPI Token Info</NavLink>
              </li>
              <li>
                <NavLink to='/admin/help' className={({isActive}) => `flex items-center w-full ${isActive && 'text-white'} hover:text-white rounded-lg my-4 mx-3 group`}>Help</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}
