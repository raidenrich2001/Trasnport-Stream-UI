import React from 'react'
import DropDown from '../../../DropDown'

export default function Pair() {
  return (
    <div className='shadow-sm p-6 border'>
    <ul className='text-white px-5 bg-teal-600 p-3 rounded'>
        <li>Pairing is a binding operation between specific Client and MSO ID. This is very first operation has to be performed once the Client STB is installed in MSO site and connected with internet (Wired/Wi-fi).</li>
        <li>Without performing the pairing operation the Client won't accept any other commands.</li> 
        <li>Anytime the Client is un-paired and installed in different MSO site and reused again by pairing with the updated MSO ID.</li>
        </ul>
    <div className='w-2/4 flex justify-between mt-4 text-sm'>
        <label>Operations<strong className='text-red-500'>*</strong></label>
        <div className='w-1/6'>
            <div className='flex justify-between items-center'>
            <input type='radio' className='focus:ring-0'></input>
            <label>Pair</label>
            </div>
            <div className='flex justify-between items-center'>
            <input type='radio' className='focus:ring-0'></input>
            <label>Un-Pair</label>
            </div>
            
        </div>
    </div>
    <div className='w-2/4 flex justify-between mt-4 text-sm'>
        <label>MSO ID <strong className='text-red-500'>*</strong></label>
        <div className='w-1/2'>
            <DropDown placeholderName = {'Select MSO ID'}></DropDown>
        </div>
    </div>
    </div>
  )
}
