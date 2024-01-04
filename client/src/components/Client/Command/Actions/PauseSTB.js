import React from 'react'

export default function PauseSTB() {
    return (
        <div className='border p-4'>
            <div className='bg-red-500 text-white p-5 rounded-sm'>
                <h1 className='text-lg font-semibold'>CAUTION!</h1>
                <p className='mt-2'>
                    This command will stop STB and server communication to certain time limit for server maintanence
                    Do you want pause all STB communications with SCMT server?
                </p>
            </div>
            <div className='flex items-end justify-between w-2/5'>
                <div className='mt-5 w-4/6'>
                    <label>Pause Duration in Seconds *</label>
                    <p className='text-xs mt-1'>Max-Duration 172800sec (2 Days)</p>
                    <input type='text' className='form-input'></input>
                </div>
                <div>
                    <button type='button' className='button-input bg-teal-500 text-white text-sm mt-3'>Update</button>
                </div>
            </div>
        </div>
    )
}
