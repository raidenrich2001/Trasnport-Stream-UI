import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { action } from '../../../store/store';
import ThresholdConfig from './ThresholdConfig';
import MonitorConfig from './MonitorConfig';
import useTablist from '../../customHook/useTablist';

export default function Configuration() {
  const Toggle = useSelector(state => state.SideBar.toggle);
  const dispatch = useDispatch();
  const Tablist = useSelector(state => state.Common.tablist);
  useTablist('Monitor Config')
  return (
    <main className='w-full'>
    <div className='w-full flex justify-end'>
      <div className={`${Toggle ? "w-full transition-all" : "w-[85%] transition-all"}`}>
        <h1 className='w-full border h-14 text-xl flex items-center px-4'>
          Notification / Info
        </h1>
        <section>
          <nav className='border'>
            <ul className="flex items-center justify-center flex-wrap text-sm h-full text-slate-600">
              <li className="mr-2" onClick={() => dispatch(action.setTablist('Monitor Config'))}>
                <button type='button' className={`px-7 py-3 border-b-2 border-transparent font-semibold ${Tablist === "Monitor Config" && "text-blue-600  border-blue-600  dark:text-blue-500 dark:border-blue-500"}`} >Monitor Config</button>
              </li>
              <li className="mr-2" onClick={() => dispatch(action.setTablist('Threshold Config'))}>
                <button type='button' className={`px-7 py-3 border-b-2 border-transparent font-semibold ${Tablist === "Threshold Config" && "text-blue-600  border-blue-600  dark:text-blue-500 dark:border-blue-500"}`} >Threshold Config</button>
              </li>
            </ul>
          </nav>
        </section>
        <section className='w-full p-5'>
            {Tablist === 'Monitor Config' && <MonitorConfig></MonitorConfig>}
            {Tablist === 'Threshold Config' && <ThresholdConfig></ThresholdConfig>}
        </section>
        </div>
        </div>
        </main>
  )
}
