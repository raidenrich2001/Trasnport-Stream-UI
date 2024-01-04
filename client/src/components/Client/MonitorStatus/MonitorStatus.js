import React from 'react';
import { useSelector } from 'react-redux';
import MonitorStatusTable from './MonitorStatusTable';
import DropDown from '../../DropDown';


export default function MonitorStatus() {
    const Toggle = useSelector(state => state.SideBar.toggle);
    return (
        <main className='w-full'>
            <div className='w-full flex justify-end'>
                <div className={`${Toggle ? "w-full transition-all" : "w-[85%] transition-all"}`}>
                    <h1 className='w-full border h-14 text-xl flex items-center px-4'>
                         Monitor Status
                    </h1>
                    <section className='border py-2 px-5'>
                        <div className='m-3 text-sm grid grid-cols-3 place-content-center place-items-start gap-1'>
                            <div className='w-5/6'>
                                <label>MSO ID</label>
                                <DropDown placeholderName = {'ALL'}></DropDown>
                            </div>
                            <div className='w-5/6'>
                                <label>STB ID</label>
                                <DropDown placeholderName = {'ALL'}></DropDown>
                            </div>
                            <div className='w-5/6'>
                                <label>Frequency</label>
                                <input type='text' className='form-input'></input>
                            </div>
                            <div className='w-5/6'>
                                <label>Symbol Rate</label>
                                <input type='text' className='form-input'></input>
                            </div>
                            <div className='w-5/6'>
                                <label>Software Version</label>
                                <input type='text' className='form-input'></input>
                            </div>
                            <div className='w-5/6'>
                                <label>NIT Cycle ID</label>
                                <input type='text' className='form-input'></input>
                            </div>
                            <div className='w-5/6'>
                                <label>Lock Status</label>
                                <DropDown placeholderName = {'ALL'}></DropDown>
                            </div>
                            <div className='w-5/6'>
                                <label>BIN Status</label>
                                 <DropDown placeholderName = {'ALL'}></DropDown>
                            </div>
                            <div className='w-5/6'>
                                <label>Command Sent Time</label>
                                <div className='flex'>
                                    <input type='datetime-local' className='form-input'></input>
                                    <span className='p-2'>to</span>
                                    <input type='datetime-local' className='form-input'></input>
                                </div>
                            </div>
                            <div className='w-5/6'>
                                <label>Result Limit</label>
                                <input type='number' className='form-input'></input>
                            </div>
                            <div className='w-5/6'>
                                <label>Bin Type</label>
                                <DropDown placeholderName = {'Select STB ID'}></DropDown>
                            </div>
                            <div className='mt-5 space-x-2 w-full'>
                            <button type='submit' className='bg-teal-500 text-white button-input'>Apply</button>
                            <button type='submit' className='bg-teal-500 text-white button-input'>Export</button>
                            <button type='submit' className='bg-teal-500 text-white button-input'>Reset</button>
                        </div>
                        </div>
                    </section>
                    <section className='p-2'>
                        <MonitorStatusTable></MonitorStatusTable>
                    </section>
                </div>
            </div>
        </main>
    )
}
