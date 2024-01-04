import React from 'react'

export default function Factory() {
  return (
    <div className='border p-4'>
    <div className='mt-3 text-sm grid grid-cols-2 place-content-center place-items-start gap-5'>
        <div className='w-5/6'>
            <label>BAT</label>
            <select type='select' className='form-input'></select>
        </div>
        <div className='w-5/6'>
            <label>NIT</label>
            <select type='select' className='form-input'></select>
        </div>
        <div className='w-5/6'>
            <label>SDT</label>
            <select type='select' className='form-input'></select>
        </div>
    </div>
    <div className='mt-5 w-full'>
        <button type='submit' className='bg-teal-500 text-white button-input'>Update</button>
    </div>
</div>
  )
}
