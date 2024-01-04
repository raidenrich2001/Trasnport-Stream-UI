import React from 'react'

export default function TestTool() {
  return (
    <div className='border p-4'>
        <label>Test Tool Command*</label>
        <textarea className='w-full border border-slate-300' rows='4' placeholder='Test Tool Command'></textarea>
        <button type='button' className='button-input bg-teal-500 text-white text-sm mt-3'>Update</button>
    </div>
  )
}
