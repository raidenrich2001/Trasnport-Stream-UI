import React from 'react'

export default function STBdump() {
  return (
    <div className='border p-4'>
        <div className='w-1/4'>
            <label>DUMB Type</label>
            <select type='select' className='form-input'></select>
        </div>
        <button type='button' className='button-input bg-teal-500 text-white text-sm mt-3'>Update</button>
    </div>
  )
}
