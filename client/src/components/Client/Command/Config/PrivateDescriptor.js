import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

export default function PrivateDescriptor() {
  const [dropDown, setDropDown] = useState(false)
  function showDropDown() {
    setDropDown( prev => !prev)
  }
  return (
    <div>
      <section className='border p-4'>
        <div className='mt-3 text-sm grid grid-cols-3 place-content-center place-items-start gap-2'>
          <div className='w-5/6'>
            <label>Private Descriptor</label>
            <select type='select' className='form-input'></select>
          </div>
          <div className='w-5/6'>
            <label>Mode</label>
            <select type='select' className='form-input'></select>
          </div>
          <div className='w-5/6'>
            <label>Input Type</label>
            <select type='select' className='form-input'></select>
          </div>
        </div>
        <div className='mt-5 w-full'>
          <button type='submit' className='bg-teal-500 text-white button-input'>Add New Descriptor</button>
        </div>
      </section>
      <section className='border p-4 mt-2'>
        <div>
          <div className='flex justify-between'>
            <h1 className='font-semibold'>Private Descriptor Group</h1>
            <i className='h-6 w-8 bg-slate-200' onClick={showDropDown}><BiChevronDown className={`h-full w-full transition-all ease-linear duration-300 ${!dropDown && '-rotate-180'}`}></BiChevronDown></i>
          </div>
         
          <div className={`mt-3 text-sm space-y-3 overflow-y-auto CommandOverflow overflow-hidden transition-all ease-linear duration-300 ${dropDown ? 'max-h-0' : 'max-h-96'}`}>
            <div className='w-1/3 flex justify-between items-end'>
              <div className='w-4/5'>
                <label className='whitespace-nowrap'>Descriptor TAG</label>
                <input type='text' className='form-input'></input>
              </div>
              <div>
                <button type='submit' className='bg-blue-500 text-white button-input'>Add</button>
              </div>
            </div>
            <div className='w-1/3 flex justify-between items-end'>
              <div className='w-4/5'>
                <label className='whitespace-nowrap'>PAT</label>
                <input type='text' className='form-input'></input>
              </div>
              <div>
                <button type='submit' className='bg-blue-500 text-white button-input'>Add</button>
              </div>
            </div>
            <div className='w-1/3 flex justify-between items-end'>
              <div className='w-4/5'>
                <label className='whitespace-nowrap'>PMT</label>
                <input type='text' className='form-input'></input>
              </div>
              <div>
                <button type='submit' className='bg-blue-500 text-white button-input'>Add</button>
              </div>
            </div>
            <div className='w-1/3 flex justify-between items-end'>
              <div className='w-4/5'>
                <label className='whitespace-nowrap'>SDT</label>
                <input type='text' className='form-input'></input>
              </div>
              <div>
                <button type='submit' className='bg-blue-500 text-white button-input'>Add</button>
              </div>
            </div>
            <div className='w-1/3 flex justify-between items-end'>
              <div className='w-4/5'>
                <label className='whitespace-nowrap'>NIT</label>
                <input type='text' className='form-input'></input>
              </div>
              <div>
                <button type='submit' className='bg-blue-500 text-white button-input'>Add</button>
              </div>
            </div>
            <div className='w-1/3 flex justify-between items-end'>
              <div className='w-4/5'>
                <label className='whitespace-nowrap'>BAT</label>
                <input type='text' className='form-input'></input>
              </div>
              <div>
                <button type='submit' className='bg-blue-500 text-white button-input'>Add</button>
              </div>
            </div>
          </div>
  
        </div>
      </section>
      <section className='border p-4 mt-2'>
        <div className='bg-yellow-500 text-white p-5 rounded-sm'>
          <h1 className='text-lg font-semibold'>Important Notes!!</h1>
          <p className='mt-2'>
            Please recheck and ensure given private descriptor TAGs are valid.
          </p>
        </div>
        <div>
          <button type='button' className='button-input bg-teal-500 text-white text-sm mt-3'>Update</button>
        </div>
      </section>
    </div>
  )
}
