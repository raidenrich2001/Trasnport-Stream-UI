import React from 'react'
import { useSelector } from 'react-redux';
import NetworkDetailsTable from './NetworkDetailsTable';

export default function NetworkDetails() {
  const Toggle = useSelector(state => state.SideBar.toggle);
  return (
    <main className='w-full'>
      <div className='w-full flex justify-end'>
        <div className={`${Toggle ? "w-full transition-all" : "w-[85%] transition-all"}`}>
          <h1 className='w-full border h-14 text-xl flex items-center px-4'>
            Monitor Report
          </h1>
          <section className='border m-3 py-2 px-5'>
            <div className='m-3 text-sm grid grid-cols-2 place-content-center place-items-start gap-1'>
              <div className='w-5/6'>
                <label>State</label>
                  <select type='select' className='form-input w-full'></select>
              </div>
              <div className='w-5/6'>
                <label>MSO ID</label>
                  <select type='select' className='form-input w-full'></select>
              </div>
              <div className='w-5/6'>
                <label>City</label>
                  <select type='select' className='form-input w-full'></select>
              </div>
              <div className='flex items-end h-full space-x-2 w-full'>
                                <button type='submit' className='bg-teal-500 text-white button-input'>Apply</button>
                                <button type='submit' className='bg-teal-500 text-white button-input'>Export</button>
                            </div>
            </div>
          </section>
          <section  className='border m-3 py-2 px-5'>
              <NetworkDetailsTable></NetworkDetailsTable>
          </section>
        </div>
      </div>
    </main>
  )
}
