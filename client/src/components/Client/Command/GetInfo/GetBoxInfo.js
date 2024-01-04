import React from 'react'
import {MdOutlineRefresh} from 'react-icons/md'
export default function GetBoxInfo() {
  return (
    <div className='border p-4'>
        <p>By configuring this option the Server is updated by the client with the latest box information.</p>
        <div className='flex justify-between mt-7'>
          <button type='button' className='button-input bg-teal-500 text-white'>Update Box Info</button>
          <button className='button-input bg-blue-500 text-white flex items-center'><i className='mr-1'><MdOutlineRefresh></MdOutlineRefresh> </i>Refresh</button>
        </div>
    </div>
  )
}