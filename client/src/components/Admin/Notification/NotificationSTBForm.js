import React from 'react'
import DropDown from '../../DropDown'

export default function NotificationSTBForm() {
  return (
    <div className='m-3 text-sm grid grid-cols-3 place-content-center place-items-start gap-1'>
     <div className='w-5/6'>
        <label>Select STB</label>
        <DropDown placeholderName = {'MSO\'S Location'}></DropDown>
    </div>
    <div className='w-5/6'>
        <label>Select Name</label>
        <DropDown placeholderName = {'ALL'}></DropDown>
    </div>
    <div className='w-5/6'>
        <label>Select Email Address</label>
        <DropDown placeholderName = {'ALL'}></DropDown>
    </div>
    <div className='w-5/6'>
        <label>Select Mobile Number</label>
        <DropDown placeholderName = {'ALL'}></DropDown>
    </div>
    <div className='mt-5 space-x-2 w-full'>
    <button className='button-input text-white text-sm bg-teal-500'>Save User Details</button>
    </div>
    
    </div>
  )
}
