import React from 'react'

export default function MonitorConfig() {
  return (
    <form className='text-sm m-3 grid grid-cols-2 place-content-center place-items-start gap-5'>
    <div className='flex items-center justify-between text-base w-5/6'>
      <label>Service Name Monitor</label>
      <div className='space-x-5 flex items-center text-sm'>
        <input type='radio'></input>
        <label>ON</label>
        <input type='radio'></input>
        <label>OFF</label>
      </div>
    </div>
    <div className='flex items-center justify-between text-base w-5/6'>
    <label>LCN Monitor</label>
      <div className='space-x-5 flex items-center text-sm'>
        <input type='radio'></input>
        <label>ON</label>
        <input type='radio'></input>
        <label>OFF</label>
      </div>
    </div>
    <div className='flex items-center justify-between text-base w-5/6'>
    <label>Video PID</label>
      <div className='space-x-5 flex items-center text-sm'>
        <input type='radio'></input>
        <label>ON</label>
        <input type='radio'></input>
        <label>OFF</label>
      </div>
    </div>


    <div className='flex items-center justify-between text-base w-5/6'>
    <label>Video PID Bitrate</label>
      <div className='space-x-5 flex items-center text-sm'>
        <input type='radio'></input>
        <label>ON</label>
        <input type='radio'></input>
        <label>OFF</label>
      </div>
    </div>

    <div className='flex items-center justify-between text-base w-5/6'>
    <label>Video PID Scrambled</label>
      <div className='space-x-5 flex items-center text-sm'>
        <input type='radio'></input>
        <label>ON</label>
        <input type='radio'></input>
        <label>OFF</label>
      </div>
    </div>
    <div className='flex items-center justify-between text-base w-5/6'>
    <label>Video Stream Type</label>
      <div className='space-x-5 flex items-center text-sm'>
        <input type='radio'></input>
        <label>ON</label>
        <input type='radio'></input>
        <label>OFF</label>
      </div>
    </div>
    <div className='flex items-center justify-between text-base w-5/6'>
    <label>IMD Valid monitor</label>
      <div className='space-x-5 flex items-center text-sm'>
        <input type='radio'></input>
        <label>ON</label>
        <input type='radio'></input>
        <label>OFF</label>
      </div>
    </div>
    <div className='flex items-center justify-between text-base w-5/6'>
    <label>Overall Bitrate</label>
      <div className='space-x-5 flex items-center text-sm'>
        <input type='radio'></input>
        <label>ON</label>
        <input type='radio'></input>
        <label>OFF</label>
      </div>
    </div>
    <div className='flex items-center justify-between text-base w-5/6'>
    <label>Audio Monitor</label>
      <div className='space-x-5 flex items-center text-sm'>
        <input type='radio'></input>
        <label>ON</label>
        <input type='radio'></input>
        <label>OFF</label>
      </div>
    </div>

    <div className='flex items-center justify-between text-base w-5/6'>
    <label>CASystem Monitor</label>
      <div className='space-x-5 flex items-center text-sm'>
        <input type='radio'></input>
        <label>ON</label>
        <input type='radio'></input>
        <label>OFF</label>
      </div>
    </div>
    <div className='flex items-center justify-between text-base w-5/6'>
    <label>Bouquet Monitor</label>
      <div className='space-x-5 flex items-center text-sm'>
        <input type='radio'></input>
        <label>ON</label>
        <input type='radio'></input>
        <label>OFF</label>
      </div>
    </div>

<div>
<button className='button-input bg-teal-500 text-white'>Save Config</button>
</div>

   
    </form>
  )
}
