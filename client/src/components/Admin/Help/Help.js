import React from 'react'
import { useSelector } from 'react-redux';

export default function Help() {
  const Toggle = useSelector(state => state.SideBar.toggle);
  const headers = ['Operator ID', 'Operator Code', 'Operator Name', 'Token', 'Current Date', 'Status Code', 'Token Status', 'Token Check',
   'Token Block', 'Token Verify Interval', 'Token Verify Grace', '	Token Verify Failure', 'Hits', 'Last Internet Failure', 'Last Internet Success', 'Expiry Time',
  'Internet Failure Hits', 'Remainder PID', 'Remainder Time', 'Request Date', 'Delivery Mode', 'Internet Server', 'Internet Server URL']
  return (
    <main className='w-full'>
    <div className='w-full flex justify-end'>
      <div className={`${Toggle ? "w-full transition-all" : "w-[85%] transition-all"}`}>
        <h1 className='w-full border h-14 text-xl flex items-center px-4'>
          Help
        </h1>
        <section>
        <div className='max-h-[51vh] flex justify-center mt-5'>
          <table className='w-1/2 h-full table-auto rounded-sm shadow-md bg-white'>
              <thead className='sticky top-0 uppercase text-xs text-md text-slate-600 bg-gray-200'>
              <tr className='border border-slate-300'>
                <th colSpan='3' className='py-2'>SCMT VERSION INFO</th>
              </tr>
              <tr className='border border-slate-300'>
                <th className='py-2'>S.No</th>
                <th className='py-2'>Current Version</th>
                <th className='py-2'>Build Date</th>
              </tr>
            </thead>
            <tbody className='text-center text-sm'>
              <tr className='border'>
                <td className='py-1'>1</td>
                <td className='py-1'>SCMT UI Version 2.0.1</td>
                <td className='py-1'>05Jul22 17:10</td>
              </tr>
              <tr className='border'>
                <td className='py-1'>2</td>
                <td className='py-1'>DB VERSION 39</td>
                <td className='py-1'>05Jul22 17:10</td>
              </tr>
            </tbody>
          </table>
          </div>
          <div className='flex justify-center my-5'>
          <table className='w-5/6 h-full table-auto rounded-sm shadow-md bg-white'>
              <thead className='sticky top-0 uppercase text-xs text-md text-slate-600 bg-gray-200'>
              <tr className='border border-slate-300'>
                <th className='py-2'>S.No</th>
                <th className='py-2'>Header</th>
                <th className='py-2'>Description</th>
              </tr>
            </thead>
            <tbody className='text-center text-sm'>
             {headers.map((header, index) => 
              <tr className='border'>
                <td className='py-1'>{index + 1}</td>
                <td className='py-1'>{header}</td>
                <td className='py-1'>05Jul22 17:10</td>
              </tr>
             )}
            </tbody>
          </table>
          </div>
        </section>
        </div>
        </div>
    </main>
  )
}
