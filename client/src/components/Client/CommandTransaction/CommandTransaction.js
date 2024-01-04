// import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CommandTransTable from './CommandTransTable';
import DropDown from '../../DropDown';

export default function CommandTransaction() {
    const dispatch = useDispatch();
    // const containerRef = useRef(null);

    const Toggle = useSelector(state => state.SideBar.toggle);
    return (
        <main className='w-full'>
            <div className='w-full flex justify-end'>
                <div className={`${Toggle ? "w-full transition-all" : "w-[85%] transition-all"}`}>
                    <h1 className='w-full border h-14 text-xl flex items-center px-4'>
                        Command Transaction
                    </h1>
                    <section className='border py-2 px-5'>
                        <div className='m-3 text-sm grid grid-cols-2 place-content-center place-items-start gap-1'>
                            <div className='w-4/6'>
                                <label>Command</label>
                                <DropDown placeholderName = {'ALL'}></DropDown>
                            </div>
                            <div className='w-4/6'>
                                <label>Status</label>
                                <DropDown placeholderName = {'ALL'}></DropDown>
                            </div>
                            <div className='w-4/6'>
                                <label>STB ID</label>
                                <DropDown placeholderName = {'ALL'}></DropDown>
                            </div>
                            <div className='w-4/6'>
                                <label>Command Sent Time</label>
                                <div className='flex'>
                                    <input type='datetime-local' className='form-input'></input>
                                    <span className='p-2'>to</span>
                                    <input type='datetime-local' className='form-input'></input>
                                </div>
                            </div>
                            <div className='mt-2 space-x-2 w-full'>
                                <button type='submit' className='bg-teal-500 text-white button-input'>Apply</button>
                                <button type='submit' className='bg-teal-500 text-white button-input'>Export</button>
                            </div>
                        </div>

                    </section>
                    <section className='p-2'>
                        <CommandTransTable></CommandTransTable>
                    </section>
                </div>
            </div>
        </main>
    )
}
