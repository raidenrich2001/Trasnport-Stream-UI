import React from 'react'
import { CgDatabase } from 'react-icons/cg';
import { FaRegEye } from 'react-icons/fa';
import '../../css/Styles.css';
import { BiSortUp } from 'react-icons/bi';
import Pagination from '../../Pagination';

export default function CommandTransTable() {
    const loop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return (
        <div className='px-2 z-10 mt-1'>
        <div className='flex justify-between mb-2'>
          <div className='w-1/2 space-x-2 flex items-center text-sm'>
            <p>Showing</p>
            <div className='w-16'>
              <select type='select' className='text-xs w-full form-input'>
                <option className='text-xs'>10</option>
                <option className='text-xs'>20</option>
                <option className='text-xs'>50</option>
                <option className='text-xs'>100</option>
              </select>
            </div>
            <p>Entries</p>
          </div>
          <Pagination></Pagination>
        </div>
            <div className='max-h-[51vh] overflow-auto StylesOverflow border'>
                <table className='w-full h-full table-auto rounded-sm shadow-md bg-white'>
                    <thead className='sticky top-0 uppercase text-xs text-md text-slate-600 bg-gray-200'>
                        <tr>
                            <th className='py-2 px-3 whitespace-nowrap'><div className='flex items-center space-x-1'><p>S.No</p> <BiSortUp></BiSortUp></div></th>
                            <th className='py-2 px-3 whitespace-nowrap'><div className='flex items-center space-x-1'><p>Session SeqID</p><BiSortUp></BiSortUp></div></th>
                            <th className='py-2 px-3 whitespace-nowrap'><div className='flex items-center space-x-1'><p>STB Serial No</p><BiSortUp></BiSortUp></div></th>
                            <th className='py-2 px-3 whitespace-nowrap'><div className='flex items-center space-x-1'><p>Command</p><BiSortUp></BiSortUp></div></th>
                            <th className='py-2 px-3 whitespace-nowrap'><div className='flex items-center space-x-1'><p>Command Sent Time</p><BiSortUp></BiSortUp></div></th>
                            <th className='py-2 px-3 whitespace-nowrap'><div className='flex items-center space-x-1'><p>Command Completed Time</p><BiSortUp></BiSortUp></div></th>
                            <th className='py-2 px-3 whitespace-nowrap'><div className='flex items-center space-x-1'><p>Status</p><BiSortUp></BiSortUp></div></th>
                            <th className='py-2 px-3 whitespace-nowrap'><div className='flex items-center space-x-1'><p>Command By</p><BiSortUp></BiSortUp></div></th>
                            <th className='py-2 px-3 whitespace-nowrap'><div className='flex items-center space-x-1'><p>View By CMD</p><BiSortUp></BiSortUp></div></th>
                            <th className='py-2 px-3 whitespace-nowrap'><div className='flex items-center space-x-1'><p>View By STB</p><BiSortUp></BiSortUp></div></th>
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
                                <td className='py-2 px-3 whitespace-nowrap'><button className='py-1 px-2 rounded bg-blue-500 text-white'><FaRegEye></FaRegEye></button></td>
                                <td className='py-2 px-3 whitespace-nowrap'><button className='py-1 px-2 rounded bg-blue-500 text-white'><CgDatabase></CgDatabase></button></td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
