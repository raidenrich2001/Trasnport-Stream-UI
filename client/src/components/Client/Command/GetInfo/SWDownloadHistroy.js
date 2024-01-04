import React from 'react'
import {MdOutlineRefresh} from 'react-icons/md'
export default function SWDownloadHistroy() {
  return (
    <div className='border p-4'>
    <p>By configuring this option the Server is updated by the client with the latest Software Download History information.</p>
    <div className='flex justify-between items-center mt-7'>
      <button type='button' className='button-input bg-teal-500 text-white'>Update SW History</button>
      <p className='text-sm'>Tu- Total Updates</p>
      <p className='text-sm'>LDI- Last Download Index</p>
      <p className='text-sm'>NOFH- Number of History</p>
      <button className='button-input bg-blue-500 text-white flex items-center'><i className='mr-1'><MdOutlineRefresh></MdOutlineRefresh> </i>Refresh</button>
    </div>
</div>
  )
}
