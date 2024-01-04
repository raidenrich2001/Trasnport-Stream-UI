import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useTablist from '../../customHook/useTablist';
import { action } from '../../../store/store';
import MonitorNITTable from './MonitorNITTable';
import MonitorNITFilterForm from './MonitorNITFilterForm';
import MonitorNITCycleForm from './MonitorNITCycleForm';


export default function MonitorNITStatus() {
    const dispatch = useDispatch();
    const Toggle = useSelector(state => state.SideBar.toggle);
    const Tablist = useSelector(state => state.Common.tablist);
    
    useTablist('Monitor NIT Filter')
    return (
        <main className='w-full'>
            <div className='w-full flex justify-end'>
                <div className={`${Toggle ? "w-full transition-all" : "w-[85%] transition-all"}`}>
                    <h1 className='w-full border h-14 text-xl flex items-center px-4'>
                         Monitor NIT Status
                    </h1>
                    <section>
                    <nav className='border'>
                                <ul className="flex items-center justify-center flex-wrap text-sm h-full text-slate-600">
                                    <li className="mr-2" onClick={() => dispatch(action.setTablist('Monitor NIT Filter'))}>
                                        <button type='button' className={`px-7 py-3 border-b-2 border-transparent font-semibold ${Tablist === "Monitor NIT Filter" && "text-blue-600  border-blue-600  dark:text-blue-500 dark:border-blue-500"}`} >Filter</button>
                                    </li>
                                    <li className="mr-2" onClick={() => dispatch(action.setTablist('NIT Cycle ID Filter'))}>
                                        <button type='button' className={`px-7 py-3 border-b-2 border-transparent font-semibold ${Tablist === "NIT Cycle ID Filter" && "text-blue-600  border-blue-600  dark:text-blue-500 dark:border-blue-500"}`} >NIT Cycle ID Filter</button>
                                    </li>
                                    </ul>
                        </nav>
                    </section>
                    <section className='border py-2 px-5'>
                       {Tablist === 'Monitor NIT Filter' && <MonitorNITFilterForm></MonitorNITFilterForm>}
                       {Tablist === 'NIT Cycle ID Filter' && <MonitorNITCycleForm></MonitorNITCycleForm>}
                    </section>
                    <section className='p-2'>
                       <MonitorNITTable></MonitorNITTable>
                    </section>
                </div>
            </div>
        </main>
    )
}
