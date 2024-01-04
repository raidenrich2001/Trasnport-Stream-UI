import React from 'react'
import { BiSortUp } from 'react-icons/bi'

export default function MUXDetails() {
    const loop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className='max-h-[115vh] overflow-auto StylesOverflow border'>
    <table className='w-full h-full table-auto rounded-sm shadow-md bg-white'>
        <thead className='sticky top-0 uppercase text-xs text-md text-slate-600 bg-gray-200'>
            <tr>
                <th className='py-2 px-3 whitespace-nowrap'><div className='flex justify-center items-center space-x-1'><p>S.No</p> <BiSortUp></BiSortUp></div></th>
                <th className='py-2 px-3 whitespace-nowrap'><div className='flex justify-center items-center space-x-1'><p>Frequency</p><BiSortUp></BiSortUp></div></th>
                <th className='py-2 px-3 whitespace-nowrap'><div className='flex justify-center items-center space-x-1'><p>Symbol Rate(KSps)</p><BiSortUp></BiSortUp></div></th>
                <th className='py-2 px-3 whitespace-nowrap'><div className='flex justify-center items-center space-x-1'><p>Modulation</p><BiSortUp></BiSortUp></div></th>
                <th className='py-2 px-3 whitespace-nowrap'><div className='flex justify-center items-center space-x-1'><p>Network Name</p><BiSortUp></BiSortUp></div></th>
                <th className='py-2 px-3 whitespace-nowrap'><div className='flex justify-center items-center space-x-1'><p>NID</p><BiSortUp></BiSortUp></div></th>
                <th className='py-2 px-3 whitespace-nowrap'><div className='flex justify-center items-center space-x-1'><p>ONID</p><BiSortUp></BiSortUp></div></th>
                <th className='py-2 px-3 whitespace-nowrap'><div className='flex justify-center items-center space-x-1'><p>TSID</p><BiSortUp></BiSortUp></div></th>
                <th className='py-2 px-3 whitespace-nowrap'><div className='flex justify-center items-center space-x-1'><p>Signal Strength(RF Level)</p><BiSortUp></BiSortUp></div></th>
                <th className='py-2 px-3 whitespace-nowrap'><div className='flex justify-center items-center space-x-1'><p>Signal Quality(%)</p><BiSortUp></BiSortUp></div></th>
                <th className='py-2 px-3 whitespace-nowrap'><div className='flex justify-center items-center space-x-1'><p>Lock Status</p><BiSortUp></BiSortUp></div></th>
                <th className='py-2 px-3 whitespace-nowrap'><div className='flex justify-center items-center space-x-1'><p>Lock Lost Count</p><BiSortUp></BiSortUp></div></th>
                <th className='py-2 px-3 whitespace-nowrap'><div className='flex justify-center items-center space-x-1'><p>Total TV Services</p><BiSortUp></BiSortUp></div></th>
                <th className='py-2 px-3 whitespace-nowrap'><div className='flex justify-center items-center space-x-1'><p>Total Radio Services</p><BiSortUp></BiSortUp></div></th>
                <th className='py-2 px-3 whitespace-nowrap'><div className='flex justify-center items-center space-x-1'><p>Total Data Services</p><BiSortUp></BiSortUp></div></th>
                <th className='py-2 px-3 whitespace-nowrap'><div className='flex justify-center items-center space-x-1'><p>Used Bitrate(Mbps)</p><BiSortUp></BiSortUp></div></th>
                <th className='py-2 px-3 whitespace-nowrap'><div className='flex justify-center items-center space-x-1'><p>Stuff Bitrate(Mbps)</p><BiSortUp></BiSortUp></div></th>
                <th className='py-2 px-3 whitespace-nowrap'><div className='flex justify-center items-center space-x-1'><p>Max Bitrate(Mbps)</p><BiSortUp></BiSortUp></div></th>
                <th className='py-2 px-3 whitespace-nowrap'><div className='flex justify-center items-center space-x-1'><p>Avg Bitrate(Mbps)</p><BiSortUp></BiSortUp></div></th>
                <th className='py-2 px-3 whitespace-nowrap'><div className='flex justify-center items-center space-x-1'><p>Total video PID</p><BiSortUp></BiSortUp></div></th>
                <th className='py-2 px-3 whitespace-nowrap'><div className='flex justify-center items-center space-x-1'><p>Total audio PID</p><BiSortUp></BiSortUp></div></th>
                <th className='py-2 px-3 whitespace-nowrap'><div className='flex justify-center items-center space-x-1'><p>No of EMM PID</p><BiSortUp></BiSortUp></div></th>
                <th className='py-2 px-3 whitespace-nowrap'><div className='flex justify-center items-center space-x-1'><p>Total Errors TP</p><BiSortUp></BiSortUp></div></th>
                <th className='py-2 px-3 whitespace-nowrap'><div className='flex justify-center items-center space-x-1'><p>Total Errors CC</p><BiSortUp></BiSortUp></div></th>
                <th className='py-2 px-3 whitespace-nowrap'><div className='flex justify-center items-center space-x-1'><p>Reported Date</p><BiSortUp></BiSortUp></div></th>
            </tr>
        </thead>
        <tbody className='text-center text-sm'>
            {loop.map(() =>
                <tr className='border-b'>
                    <td className='py-2 px-3 whitespace-nowrap'>1</td>
                    <td className='py-2 px-3 whitespace-nowrap'>1836636</td>
                    <td className='py-2 px-3 whitespace-nowrap'>RAY192700000827</td>
                    <td className='py-2 px-3 whitespace-nowrap'>Monitor Config - Abort</td>
                    <td className='py-2 px-3 whitespace-nowrap'>21Jun23 11:05:21</td>
                    <td className='py-2 px-3 whitespace-nowrap'>21Jun23 10:45:36 (5s)</td>
                    <td className='py-2 px-3 whitespace-nowrap'>STARTED</td>
                    <td className='py-2 px-3 whitespace-nowrap'>SCV</td>
                    <td className='py-2 px-3 whitespace-nowrap'>21Jun23 11:05:21</td>
                    <td className='py-2 px-3 whitespace-nowrap'>21Jun23 10:45:36 (5s)</td>
                    <td className='py-2 px-3 whitespace-nowrap'>STARTED</td>
                    <td className='py-2 px-3 whitespace-nowrap'>SCV</td>
                    <td className='py-2 px-3 whitespace-nowrap'>21Jun23 10:45:36 (5s)</td>
                    <td className='py-2 px-3 whitespace-nowrap'>STARTED</td>
                    <td className='py-2 px-3 whitespace-nowrap'>SCV</td>
                    <td className='py-2 px-3 whitespace-nowrap'>21Jun23 11:05:21</td>
                    <td className='py-2 px-3 whitespace-nowrap'>21Jun23 10:45:36 (5s)</td>
                    <td className='py-2 px-3 whitespace-nowrap'>STARTED</td>
                    <td className='py-2 px-3 whitespace-nowrap'>21Jun23 10:45:36 (5s)</td>
                    <td className='py-2 px-3 whitespace-nowrap'>STARTED</td>
                </tr>)}
        </tbody>
    </table>
</div>
  )
}
