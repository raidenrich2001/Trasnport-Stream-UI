import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { action } from '../../../store/store';
import AddressBookForm from './AddressBookForm';
import NotificationEmailMobileForm from './NotificationEmailMobileForm';
import NotificationSTBForm from './NotificationSTBForm';
import AddressBookTable from './AddressBookTable';
import NotificationEmailMobileTable from './NotificationEmailMobileTable';
import NotificationSTBTable from './NotificationSTBTable';
import useTablist from '../../customHook/useTablist'

export default function Notification() {
  const Toggle = useSelector(state => state.SideBar.toggle);
  const dispatch = useDispatch();
  const Tablist = useSelector(state => state.Common.tablist);

  useTablist("Address Book")
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
                <li className="mr-2" onClick={() => dispatch(action.setTablist('Address Book'))}>
                  <button type='button' className={`px-7 py-3 border-b-2 border-transparent font-semibold ${Tablist === "Address Book" && "text-blue-600  border-blue-600  dark:text-blue-500 dark:border-blue-500"}`} >Address Book</button>
                </li>
                <li className="mr-2" onClick={() => dispatch(action.setTablist('Notification Mapping by STB'))}>
                  <button type='button' className={`px-7 py-3 border-b-2 border-transparent font-semibold ${Tablist === "Notification Mapping by STB" && "text-blue-600  border-blue-600  dark:text-blue-500 dark:border-blue-500"}`} >Notification Mapping by STB</button>
                </li>
                <li className="mr-2" onClick={() => dispatch(action.setTablist('Notification Mapping by Email/Mobile'))}>
                  <button type='button' className={`px-7 py-3 border-b-2 border-transparent font-semibold ${Tablist === "Notification Mapping by Email/Mobile" && "text-blue-600  border-blue-600  dark:text-blue-500 dark:border-blue-500"}`} >Notification Mapping by Email/Mobile</button>
                </li>
              </ul>
            </nav>
          </section>
          <section className='border py-2 px-5'>
            {Tablist === 'Address Book' && <AddressBookForm></AddressBookForm>}
            {Tablist === 'Notification Mapping by STB' && <NotificationSTBForm></NotificationSTBForm>}
            {Tablist === 'Notification Mapping by Email/Mobile' && <NotificationEmailMobileForm></NotificationEmailMobileForm>}
          </section>
          <section className='border py-2 px-5'>
            {Tablist === 'Address Book' && <AddressBookTable></AddressBookTable>}
            {Tablist === 'Notification Mapping by STB' && <NotificationSTBTable></NotificationSTBTable>}
            {Tablist === 'Notification Mapping by Email/Mobile' && <NotificationEmailMobileTable></NotificationEmailMobileTable>}
          </section>
        </div>
      </div>
    </main>
  )
}
