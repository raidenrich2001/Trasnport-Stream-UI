import React from 'react'
import DropDown from '../../DropDown'

export default function AddressBookForm() {
  return (
    <div className='m-3 text-sm grid grid-cols-3 place-content-center place-items-start gap-1'>
    <div className='w-5/6'>
        <label>Enter Name</label>
        <input type= 'text' className='form-input'></input>
    </div>
    <div className='w-5/6'>
        <label>Enter Email Address</label>
        <input type= 'text' className='form-input'></input>
    </div>
    <div className='w-5/6'>
        <label>Enter Mobile Number</label>
        <input type= 'text' className='form-input'></input>
    </div>
    <div className='mt-5 space-x-2 w-full'>
    <button className='button-input text-white text-sm bg-teal-500'>Save User Details</button>
    </div>
    
    </div>
  )
}
