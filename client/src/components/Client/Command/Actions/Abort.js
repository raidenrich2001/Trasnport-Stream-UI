import React from 'react'

export default function Abort() {
  return (
    <div className='border p-4'>
        <p className='text-sm'>By configuring this option the Client is instructed to stop the current monitor activity and go for ideal. The Client resumes it operation after getting the updated command from the Server.</p>
        <button type='button' className='button-input bg-teal-500 text-white text-sm mt-2'>Yes</button>
    </div>
  )
}
