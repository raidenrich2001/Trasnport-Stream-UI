import React from 'react';
import '../../css/Styles.css';
import { BiSortUp } from 'react-icons/bi';
import Pagination from '../../Pagination';

export default function NetworkDetailsTable() {
    const loop = [...Array(10).keys()];
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
        <thead className='z-10 sticky top-0 uppercase text-xs text-md text-slate-600 bg-gray-200'>
          <tr>
            <th className='py-2 px-3 whitespace-nowrap'><div className='flex justify-center items-center space-x-1'><p>S.No</p><BiSortUp></BiSortUp></div></th>
            <th className='py-2 px-3 whitespace-nowrap'><div className='flex justify-center items-center space-x-1'><p>MSO Name</p><BiSortUp></BiSortUp></div></th>
            <th className='py-2 px-3 whitespace-nowrap'><div className='flex justify-center items-center space-x-1'><p>Total STB</p><BiSortUp></BiSortUp></div></th>
            <th className='py-2 px-3 whitespace-nowrap'><div className='flex justify-center items-center space-x-1'><p>Address</p> <BiSortUp></BiSortUp></div></th>
            <th className='py-2 px-3 whitespace-nowrap'><div className='flex justify-center items-center space-x-1'><p>State</p> <BiSortUp></BiSortUp></div></th>
            <th className='py-2 px-3 whitespace-nowrap'><div className='flex justify-center items-center space-x-1'><p>City</p> <BiSortUp></BiSortUp></div></th>
            <th className='py-2 px-3 whitespace-nowrap'><div className='flex justify-center items-center space-x-1'><p>Contact Person</p> <BiSortUp></BiSortUp></div></th>
            <th className='py-2 px-3 whitespace-nowrap'><div className='flex justify-center items-center space-x-1'><p>Mobile</p> <BiSortUp></BiSortUp></div></th>
          </tr>
        </thead>
        <tbody className='text-center text-sm'>
          {loop.map(() =>
            <tr className='border-b'>
              <td className='py-2 px-3 whitespace-nowrap bg-white sticky left-0'>1</td>
              <td className='py-2 px-3 whitespace-nowrap bg-white sticky left-12'>1836636</td>
              <td className='py-2 px-3 whitespace-nowrap'>RAY192700000827</td>
              <td className='py-2 px-3 whitespace-nowrap'>Monitor Config - Abort</td>
              <td className='py-2 px-3 whitespace-nowrap'>21Jun23 11:05:21</td>
              <td className='py-2 px-3 whitespace-nowrap'>21Jun23 10:45:36 (5s)</td>
              <td className='py-2 px-3 whitespace-nowrap'>STARTED</td>
              <td className='py-2 px-3 whitespace-nowrap'>SCV</td>
            </tr>)}
        </tbody>
      </table>
    </div>
  </div>
  )
}
