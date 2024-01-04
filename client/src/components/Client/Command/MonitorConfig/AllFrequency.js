import React from 'react'

export default function AllFrequency() {
    return (
        <div className='border p-4'>
            {/* <div className='flex justify-between'> */}
            <h1 className='font-semibold'>Monitor Config - All Frequency</h1>
            {/* <button className='px-3 py-1 rounded-md bg-blue-500 text-white flex items-center'><i className='mr-1'><MdOutlineRefresh></MdOutlineRefresh> </i>Refresh</button> */}
            {/* </div> */}
            <p className='text-sm mt-2'>By configuring this option the Client is instructed to monitor every individual frequencies one by one for the configured duration and update the report to the Server immediately.</p>
            <div className='mt-7 flex justify-between items-end'>
                <div className='w-1/3'>
                    <label>Individual frequency monitoring duration [sec] *</label>
                    <input type='text' className='form-input'></input>
                </div>
                <div>
                    <button type='button' className='button-input bg-teal-500 text-white'>Update LCN Config Info</button>
                </div>
            </div>
        </div>
    )
}
