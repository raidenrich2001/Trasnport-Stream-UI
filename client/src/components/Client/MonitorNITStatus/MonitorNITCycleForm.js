import React from 'react';

export default function MonitorNITCycleForm() {
  return (
          <div className='p-2 border text-sm'>
                <div className='p-2 flex items-end'>
                    <div className='w-2/4'>
                        <label>NIT Cycle ID</label>
                        <div className='w-5/6'>
                           <input type='text' className='form-input' placeholder ='Enter the NIT Cycle ID'></input>
                        </div>
                    </div>
                    <div className='mt-2 space-x-2 w-full'>
                        <button type='submit' className='bg-teal-500 text-white button-input'>Apply</button>
                    </div>
                </div>
            </div>
  )
}
