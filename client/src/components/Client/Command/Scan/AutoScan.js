import React from 'react'

export default function AutoScan() {
    return (
        <div className='border p-4'>
            <h1 className='font-semibold'>Scan-Auto Scan</h1>
            <div className='mt-3 text-sm grid grid-cols-2 place-content-center place-items-start gap-5'>
                <div className='w-5/6'>
                    <label>Start Frequency [KHz]</label>
                    <input type='text' className='form-input'></input>
                </div>
                <div className='w-5/6'>
                    <label>SR1 [KSps]</label>
                    <input type='text' className='form-input'></input>
                </div>
                <div className='w-5/6'>
                    <label>SR3 [KSps]</label>
                    <input type='text' className='form-input'></input>
                </div>
                <div className='w-5/6'>
                    <label>End Frequency [KHz]</label>
                    <input type='text' className='form-input'></input>
                </div>
                <div className='w-5/6'>
                    <label>SR2 [KSps]</label>
                    <input type='text' className='form-input'></input>
                </div>
                <div className='w-5/6'>
                    <label>Constellation</label>
                    <input type='text' className='form-input'></input>
                </div>
            </div>
            <div className='mt-5 w-full'>
                <button type='submit' className='bg-teal-500 text-white button-input'>Scan</button>
            </div>
        </div>
    )
}
