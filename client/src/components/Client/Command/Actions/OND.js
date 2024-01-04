import React from 'react'

export default function OND() {
  return (
    <div  className='border p-4'>
            <div className='mt-3 text-sm grid grid-cols-2 place-content-center place-items-start gap-5'>
                <div className='w-5/6'>
                    <label>SW upgrade type</label>
                    <select type='select' className='form-input'></select>
                </div>
                <div className='w-5/6'>
                    <label>Selection Type</label>
                    <select type='select' className='form-input'></select>
                </div>
            </div>
            <div className='mt-5 w-full'>
            <button type='button' className='button-input bg-teal-500 text-white text-sm mt-3'>Update</button>
            </div>
        </div>
  )
}
