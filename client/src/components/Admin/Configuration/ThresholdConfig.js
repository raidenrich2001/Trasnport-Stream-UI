import React from 'react'

export default function ThresholdConfig() {

  return (
    <div className='m-3 text-sm grid grid-cols-2 place-content-center place-items-start gap-3'>
    <div className='w-5/6'>
        <label>Video bitrate(Mbps) (+)</label>
        <input type= 'text' className='form-input'></input>
    </div>
    <div className='w-5/6'>
        <label>Video bitrate(Mbps) (-)</label>
        <input type= 'text' className='form-input'></input>
    </div>
    <div className='w-5/6'>
        <label>Overall bitrate(Mbps) (+)</label>
        <input type= 'text' className='form-input'></input>
    </div>
    <div className='w-5/6'>
        <label>Overall bitrate(Mbps) (-)</label>
        <input type= 'text' className='form-input'></input>
    </div>
    <div className='w-5/6'>
        <label>Audio bitrate(Mbps) (+)</label>
        <input type= 'text' className='form-input'></input>
    </div>
    <div className='w-5/6'>
        <label>Audio bitrate(Mbps) (-)</label>
        <input type= 'text' className='form-input'></input>
    </div>
    <div className='w-5/6'>
        <label>ECM PID bitrate(Mbps) (+)</label>
        <input type= 'text' className='form-input'></input>
    </div>
    <div className='w-5/6'>
        <label>ECM PID bitrate(Mbps) (-)</label>
        <input type= 'text' className='form-input'></input>
    </div>
    <div className='space-x-2 w-full'>
    <button className='button-input text-white text-sm bg-teal-500'>Save Config</button>
    </div>
    
    </div>
  )
}
