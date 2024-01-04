import React from 'react'
import { useSelector } from 'react-redux';
import DropDown from '../../DropDown';

export default function STBMonitorAction() {
    const Toggle = useSelector(state => state.SideBar.toggle);
  return (
    <main className='w-full'>
    <div className='w-full flex justify-end'>
        <div className={`${Toggle ? "w-full transition-all" : "w-[85%] transition-all"}`}>
            <h1 className='w-full border h-14 text-xl flex items-center px-4'>
                STB Monitor Action
            </h1>
            <section className='p-2 border text-sm'>
                <div className='p-2 flex items-end'>
                    <div className='w-2/4'>
                        <label>STB ID</label>
                        <div className='w-5/6'>
                            <DropDown placeholderName = {'Search STB ID'}></DropDown>
                        </div>
                    </div>
                    <div className='mt-2 space-x-2 w-full'>
                        <button type='submit' className='bg-teal-500 text-white button-input'>Apply</button>
                    </div>
                </div>
            </section>
            </div>
            </div>
            </main>
  )
}
