import React from 'react'

export default function NetLogging() {
  return (
    <div className='border p-4'>
        <div>
            <label>Net Logging</label>
    <div className='flex justify-between w-1/6 mt-2'>
        <div>
        <input type='radio'></input>
        <label className='ml-2'>ON</label>
        </div>
        <div>
        <input type='radio'></input>
        <label className='ml-2'>OFF</label>
        </div>
    </div>
    </div>
    <button type='button' className='button-input bg-teal-500 text-white text-sm mt-3'>Update</button>
    </div>
  )
}
