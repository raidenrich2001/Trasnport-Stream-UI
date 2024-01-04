import React from 'react'
import {MdOutlineRefresh} from 'react-icons/md'
export default function GetSIPSIdump() {
  return (
    <div  className='border p-4'>
            <h1 className='font-semibold text-sm'>GET INFO - SIPSI DUMP</h1>
            <div className='mt-3 text-sm grid grid-cols-2 place-content-center place-items-start gap-5'>
                <div className='w-5/6'>
                    <label>Frequency[Khz]</label>
                    <input type='text' className='form-input'></input>
                </div>
                <div className='w-5/6'>
                    <label>Constellatin[QAM]</label>
                    <select type='select' className='form-input'></select>
                </div>
                <div className='w-5/6'>
                    <label>Symbol Rate [KSps]</label>
                    <input type='text' className='form-input'></input>
                </div>
                <div className='w-5/6'>
                    <label>Recording duration [Seconds]</label>
                    <input type='text' className='form-input'></input>
                </div>
            </div>
            <div className='flex justify-between mt-5'>
          <button type='button' className='button-input bg-teal-500 text-white'>Update Channel DB</button>
          <button className='button-input bg-blue-500 text-white flex items-center'><i className='mr-1'><MdOutlineRefresh></MdOutlineRefresh> </i>Refresh</button>
        </div>
        </div>
  )
}
