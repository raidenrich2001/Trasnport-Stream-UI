import React from 'react'
import DropDown from '../../DropDown'

export default function MonitorNITFilterForm() {
  return (
    <div className='m-3 text-sm grid grid-cols-3 place-content-center place-items-start gap-1'>
    <div className='w-5/6'>
        <label>Location By</label>
        <DropDown placeholderName = {'MSO\'S Location'}></DropDown>
    </div>
    <div className='w-5/6'>
        <label>State</label>
        <DropDown placeholderName = {'ALL'}></DropDown>
    </div>
    <div className='w-5/6'>
        <label>MSO ID</label>
        <DropDown placeholderName = {'ALL'}></DropDown>
    </div>
    <div className='w-5/6'>
        <label>Change Status</label>
        <DropDown placeholderName = {'ALL'}></DropDown>
    </div>
    <div className='w-5/6'>
        <label>City</label>
         <DropDown placeholderName = {'ALL'}></DropDown>
    </div>
    <div className='w-5/6'>
        <label>STB ID</label>
         <DropDown placeholderName = {'ALL'}></DropDown>
    </div>
    <div className='w-5/6'>
        <label>NIT Cycle Status</label>
         <DropDown placeholderName = {'ALL'}></DropDown>
    </div>
    <div className='w-5/6'>
        <label>Duplicate Status</label>
         <DropDown placeholderName = {'ALL'}></DropDown>
    </div>
    <div className='w-5/6'>
        <label>Result Limit</label>
        <input type='number' className='form-input' placeholder='100'></input>
    </div>
    <div className='w-5/6'>
        <label>Reported Date</label>
        <div className='flex'>
            <input type='datetime-local' className='form-input'></input>
            <span className='p-2'>to</span>
            <input type='datetime-local' className='form-input'></input>
        </div>
    </div>
    <div className='mt-5 space-x-2 w-full'>
    <button type='submit' className='bg-teal-500 text-white button-input'>Apply</button>
    <button type='submit' className='bg-teal-500 text-white button-input'>Export</button>
</div>
</div>
  )
}
