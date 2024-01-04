import React from 'react'
import { useSelector } from 'react-redux';
import DropDown from '../../DropDown';
import {MdOutlineRefresh} from 'react-icons/md';

export default function MonitorReport() {
    const Toggle = useSelector(state => state.SideBar.toggle);
    return (
        <main className='w-full'>
            <div className='w-full flex justify-end'>
                <div className={`${Toggle ? "w-full transition-all" : "w-[85%] transition-all"}`}>
                    <h1 className='w-full border h-14 text-xl flex items-center px-4'>
                        Monitor Report
                    </h1>
                    <section className='border py-2 px-5'>
                        <div className='m-3 text-sm grid grid-cols-2 place-content-center place-items-start gap-1'>
                            <div className='w-5/6'>
                                <label>MSO ID</label>
                                <DropDown placeholderName={'ALL'}></DropDown>
                            </div>
                            <div className='w-5/6'>
                                <label>STB ID</label>
                                <DropDown placeholderName={'ALL'}></DropDown>
                            </div>

                            <div className='w-5/6'>
                                <label>LCN</label>
                                <div className='flex space-x-2 w-full'>
                                    <select type='select' className='form-input w-full'></select>
                                    <input type='text' className='form-input w-full' placeholder='Enter the Service LCN'></input>
                                </div>
                            </div>
                            <div className='w-5/6'>
                                <label>Service Name</label>
                                <div className='flex space-x-2 w-full'>
                                    <select type='select' className='form-input w-full'></select>
                                    <input type='text' className='form-input w-full' placeholder='Enter the Service Name'></input>
                                </div>
                            </div>

                            <div className='w-5/6'>
                                <label>Service ID</label>
                                <div className='flex space-x-2 w-full'>
                                    <select type='select' className='form-input w-full'></select>
                                    <input type='text' className='form-input w-full' placeholder='Enter the Service ID'></input>
                                </div>
                            </div>

                            <div className='w-5/6'>
                                <label>Available Date</label>
                                <div className='flex'>
                                    <input type='date' className='form-input'></input>
                                    <span className='p-2'>to</span>
                                    <input type='date' className='form-input'></input>
                                </div>
                            </div>
                            <div className='mt-2 space-x-2 w-full'>
                                <button type='submit' className='bg-teal-500 text-white button-input'>Apply</button>
                                <button type='submit' className='bg-teal-500 text-white button-input'>Export</button>
                            </div>
                        </div>
                    </section>
                    <section className='p-4'>
                        <div className='border p-4'>
                            <div className='flex justify-between'>
                            <p>Service Monitor</p>
                            <button className='button-input bg-blue-500 text-white flex items-center'><i className='mr-1'><MdOutlineRefresh></MdOutlineRefresh> </i>Refresh</button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}
