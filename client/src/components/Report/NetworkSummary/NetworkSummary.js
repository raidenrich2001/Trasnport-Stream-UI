import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DropDown from '../../DropDown';
import { BsFillPersonFill } from 'react-icons/bs'
import { action } from '../../../store/store';
import StuffDetails from './StuffDetails';
import ChannelDetails from './ChannelDetails';
import GenereDetailTable from './GenereDetailTable';
import CASDetailsTable from './CASDetailsTable';
import MUXDetails from './MUXDetails';
import useTablist from '../../customHook/useTablist';

export default function NetworkSummary() {
    const Toggle = useSelector(state => state.SideBar.toggle);
    const Tablist = useSelector(state => state.Common.tablist);
    const dispatch = useDispatch();

    useTablist('CAS Details');
    return (
        <main className='w-full'>
            <div className='w-full flex justify-end'>
                <div className={`${Toggle ? "w-full transition-all" : "w-[85%] transition-all"}`}>
                    <h1 className='w-full border h-14 text-xl flex items-center px-4'>
                        Network Summary
                    </h1>
                    <section className='border m-3 p-2'>
                        <div className='m-3 text-sm grid grid-cols-2 place-content-center place-items-start gap-2'>
                            <div className='w-4/6'>
                                <label>State</label>
                                <select type='select' className='form-input'>
                                    <option>Haryana</option>
                                </select>
                            </div>
                            <div className='w-4/6'>
                                <label>City</label>
                                <select type='select' className='form-input'>
                                    <option>Bhiwani</option>
                                </select>
                            </div>
                            <div className='w-4/6'>
                                <label>MSO Name</label>
                                <select type='select' className='form-input'>
                                    <option>Bhiwani</option>
                                </select>
                            </div>
                            <div className='w-4/6'>
                                <label>STB ID</label>
                                <select type='select' className='form-input'>
                                    <option>Unicast</option>
                                </select>
                            </div>
                            <div className='w-4/6'>
                                <label>Channels Order By</label>
                                <div className='flex items-center'>
                                    <select type='select' className='form-input '>
                                        <option>Unicast</option>
                                    </select>
                                    <div className='flex items-center space-x-2 ml-2'>

                                        <input type='radio'></input>
                                        <label className='ml-2'>Ascending</label>

                                        <input type='radio'></input>
                                        <label className='ml-2'>Descending</label>
                                    </div>
                                </div>
                            </div>
                            <div className='w-4/6'>
                                <label>NIT Cycle Date</label>
                                <div className='flex'>
                                    <input type='datetime-local' className='form-input'></input>
                                    <span className='p-2'>to</span>
                                    <input type='datetime-local' className='form-input'></input>
                                </div>
                            </div>
                            <div className='w-4/6'>
                                <label>NIT Cycle IDs</label>
                                <div></div>
                                <DropDown placeholderName={'ALL'}></DropDown>

                            </div>
                            <div className='flex items-end h-full  space-x-2 w-full'>
                                <button type='submit' className='bg-teal-500 text-white button-input'>Apply</button>
                                <button type='submit' className='bg-teal-500 text-white button-input'>Export</button>
                            </div>
                        </div>

                    </section>
                    <section className='border m-3 p-3 flex'>
                        <div className='w-3/12 border p-3'>
                
                                <div >
                                    <div className='flex justify-center '>
                                    <i className='h-20 w-20 text-slate-50 bg-blue-500 border p-2 rounded-full'><BsFillPersonFill className='h-full w-full'></BsFillPersonFill></i>
                                    </div>
                                    <div className='flex justify-center mt-1'>
                                    <h1 className='text-xl'>7 Star Cable</h1>
                                    </div>
                                    <div className='flex justify-center mt-1'>
                                    <p>Master Satellite Operator</p>
                                    </div>
                                </div>
                            
                            <div className='text-sm mt-2'>
                                <div className='flex justify-between border py-2 px-2'>
                                    <p>NIT Cycle Status</p>
                                    <p>0</p>
                                </div>
                                <div className='flex justify-between border-b border-l border-r py-2 px-2'>
                                    <p>Total Unique CAS Names</p>
                                    <p>0</p>
                                </div>
                                <div className='flex justify-between border-b border-l border-r py-2 px-2'>
                                    <p>Used Bitrate (Mbps)</p>
                                    <p>0</p>
                                </div>
                                <div className='flex justify-between border-b border-l border-r py-2 px-2'>
                                    <p>Stuff Bitrate (Mbps)</p>
                                    <p>0</p>
                                </div>
                                <div className='flex justify-between border-b border-l border-r py-2 px-2'>
                                    <p>Possible Channels to Add (Approx)</p>
                                    <p>0</p>
                                </div>
                                <div className='flex justify-between border-b border-l border-r py-2 px-2'>
                                    <p>Total Channels</p>
                                    <p>0</p>
                                </div>
                                <div className='flex justify-between border-b border-l border-r py-2 px-2'>
                                    <p>Total Channels (TV,Radio,Data)</p>
                                    <p>0</p>
                                </div>
                                <div className='flex justify-between border-b border-l border-r py-2 px-2'>
                                    <p>Monitor Mode</p>
                                    <p>-</p>
                                </div>
                                <div className='flex justify-between border-b border-l border-r py-2 px-2'>
                                    <p>STB ID</p>
                                    <p>-</p>
                                </div>
                                <div className='flex justify-between border-b border-l border-r py-2 px-2'>
                                    <p>No of Carrier(s)</p>
                                    <p>-</p>
                                </div>
                                <div className='flex justify-between border-b border-l border-r py-2 px-2'>
                                    <p>Started Date</p>
                                    <p>-</p>
                                </div>
                                <div className='flex justify-between border-b border-l border-r py-2 px-2'>
                                    <p>Last Updated Date</p>
                                    <p>-</p>
                                </div>
                                <div className='flex justify-between border-b border-l border-r py-2 px-2'>
                                    <p>Contact Person</p>
                                    <p>7 Star Cable</p>
                                </div>
                                <div className='flex justify-between border-b border-l border-r py-2 px-2'>
                                    <p>E-Mail ID</p>
                                    <p>-</p>
                                </div>
                                <div className='w-full py-2 mt-2'>
                                    <button className='button-input text-white bg-teal-500 w-full'>No Mobile Number</button>
                                </div>
                                <div>
                                    <h2 className='text-xl'>About MSO</h2>
                                    <div className='p-2'>
                                        <p className='p-2'>Contact Address</p>
                                        <p className='p-2'>Location</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                        <div className='w-9/12'>
                        <nav className='border border-l-0'>
                                <ul className="flex items-center justify-center flex-wrap text-sm h-full text-slate-600">
                                    <li className="mr-2" onClick={() => dispatch(action.setTablist('CAS Details'))}>
                                        <button type='button' className={`px-7 py-3 border-b-2 border-transparent font-semibold ${Tablist === "CAS Details" && "text-blue-600  border-blue-600  dark:text-blue-500 dark:border-blue-500"}`} >CAS Details</button>
                                    </li>
                                    <li className="mr-2" onClick={() => dispatch(action.setTablist('Stuff Details'))}>
                                        <button type='button' className={`px-7 py-3 border-b-2 border-transparent font-semibold ${Tablist === "Stuff Details" && "text-blue-600  border-blue-600  dark:text-blue-500 dark:border-blue-500"}`} >Stuff Details</button>
                                    </li>
                                    <li className="mr-2" onClick={() => dispatch(action.setTablist('Channel Details'))}>
                                        <button type='button' className={`px-7 py-3 border-b-2 border-transparent font-semibold ${Tablist === "Channel Details" && "text-blue-600  border-blue-600  dark:text-blue-500 dark:border-blue-500"}`} >Channel Details</button>
                                    </li>
                                    <li className="mr-2" onClick={() => dispatch(action.setTablist('Genere Details'))}>
                                        <button type='button' className={`px-7 py-3 border-b-2 border-transparent font-semibold ${Tablist === "Genere Details" && "text-blue-600  border-blue-600  dark:text-blue-500 dark:border-blue-500"}`} >Genere Details</button>
                                    </li>
                                    <li className="mr-2" onClick={() => dispatch(action.setTablist('Mux Details'))}>
                                        <button type='button' className={`px-7 py-3 border-b-2 border-transparent font-semibold ${Tablist === "Mux Details" && "text-blue-600  border-blue-600  dark:text-blue-500 dark:border-blue-500"}`} >Mux Details</button>
                                    </li>
                                </ul>
                        </nav>
                        <div className='mt-3 p-3'>
                        {Tablist === 'CAS Details' && <CASDetailsTable></CASDetailsTable>}
                        {Tablist === 'Stuff Details' && <StuffDetails></StuffDetails>}
                        {Tablist === 'Channel Details' && <ChannelDetails></ChannelDetails>}
                        {Tablist === 'Genere Details' && <GenereDetailTable></GenereDetailTable>}
                        {Tablist === 'Mux Details' && <MUXDetails></MUXDetails>}
                        </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}
