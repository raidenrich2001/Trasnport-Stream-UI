import React from 'react'
import { useSelector } from 'react-redux';
import DropDown from '../../DropDown';
import STBOnlineTable from './STBOnlineTable';

export default function STBOnlineStatus() {
    const Toggle = useSelector(state => state.SideBar.toggle);
    return (
        <main className='w-full'>
            <div className='w-full flex justify-end'>
                <div className={`${Toggle ? "w-full transition-all" : "w-[85%] transition-all"}`}>
                    <h1 className='w-full border h-14 text-xl flex items-center px-4'>
                        STB Online Status
                    </h1>
                    <section className='border py-2 px-5'>
                        <div className='m-3 text-sm grid grid-cols-1 place-content-center place-items-start gap-3'>
                            <div className='w-4/6'>
                                <label>STB ID</label>
                                <DropDown placeholderName = {'STB ID'}></DropDown>
                            </div>
                            
                            <div className='w-4/6'>
                                <label>Command Sent Time</label>
                                <div className='flex'>
                                    <input type='datetime-local' className='form-input'></input>
                                    <span className='p-2'>to</span>
                                    <input type='datetime-local' className='form-input'></input>
                                </div>
                            </div>
                            <div className='w-4/6 flex items-center'>
                                <label>Filter Bulk STB IDs By Excel</label>
                                <div className='flex space-x-3 text-sm ml-5'>
                                <button type='submit' className='bg-emerald-600 text-white button-input'>Download Sample STB ID Excel Sheet</button>
                                <button type='submit' className='bg-emerald-600 text-white button-input'>Upload STB ID Excel Sheet</button>
                                </div>
                            </div>
                            <div className='space-x-2 w-full'>
                                <button type='submit' className='bg-teal-500 text-white button-input'>Apply</button>
                                <button type='submit' className='bg-teal-500 text-white button-input'>Export</button>
                            </div>
                        </div>

                    </section>
                    <section className='p-2'>
                        <STBOnlineTable></STBOnlineTable>
                    </section>
                </div>
            </div>
        </main>
    )
}
