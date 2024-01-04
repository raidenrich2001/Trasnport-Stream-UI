import React from 'react';

export default function HomeScan() {
    return (
        <div  className='border p-4'>
            <h1 className='font-semibold'>Scan-Home Scan</h1>
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
            </div>
            <div className='mt-5 w-full'>
                <button type='submit' className='bg-teal-500 text-white button-input'>Scan</button>
            </div>
        </div>
    )
}
