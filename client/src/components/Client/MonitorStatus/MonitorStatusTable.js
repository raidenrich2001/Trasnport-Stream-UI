import React from 'react';
import '../../css/Styles.css';
import { BiSortUp } from 'react-icons/bi'
import Pagination from '../../Pagination';

export default function MonitorStatusTable() {
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
          <thead className='z-10 sticky top-0 uppercase text-xs text-md text-slate-600 bg-gray-200'>
            <tr>
              <th className='py-2 px-3 whitespace-nowrap bg-gray-200 sticky left-0'><div className='flex items-center space-x-1'><p>S.No</p><BiSortUp></BiSortUp></div></th>
              <th className='py-2 px-3 whitespace-nowrap bg-gray-200 sticky left-12'><div className='flex items-center space-x-1'><p>Request ID</p><BiSortUp></BiSortUp></div></th>
              <th className='py-2 px-3 whitespace-nowrap'><div className='flex items-center space-x-1'><p>MSO ID</p><BiSortUp></BiSortUp></div></th>
              <th className='py-2 px-3 whitespace-nowrap'><div className='flex items-center space-x-1'><p>STB ID</p><BiSortUp></BiSortUp></div></th>
              <th className='py-2 px-3 whitespace-nowrap'><div className='flex items-center space-x-1'><p>(Frequency, SymbolRate, Constellation)</p><BiSortUp></BiSortUp></div></th>
              <th className='py-2 px-3 whitespace-nowrap'><div className='flex items-center space-x-1'><p>Lock Status</p><BiSortUp></BiSortUp></div></th>
              <th className='py-2 px-3 whitespace-nowrap'><div className='flex items-center space-x-1'><p>Carrier (Current /Total)</p><BiSortUp></BiSortUp></div></th>
              <th className='py-2 px-3 whitespace-nowrap'><div className='flex items-center space-x-1'><p>No of Services</p><BiSortUp></BiSortUp></div></th>
              <th className='py-2 px-3 whitespace-nowrap'><div className='flex items-center space-x-1'><p>NIT Cycle Status</p><BiSortUp></BiSortUp></div></th>
              <th className='py-2 px-3 whitespace-nowrap'><div className='flex items-center space-x-1'><p>NIT Cycle ID</p><BiSortUp></BiSortUp></div></th>
              <th className='py-2 px-3 whitespace-nowrap'><div className='flex items-center space-x-1'><p>Last CRC Value</p><BiSortUp></BiSortUp></div></th>
              <th className='py-2 px-3 whitespace-nowrap'><div className='flex items-center space-x-1'><p>Current CRC value</p><BiSortUp></BiSortUp></div></th>
              <th className='py-2 px-3 whitespace-nowrap'><div className='flex items-center space-x-1'><p>Over All BIN Length</p><BiSortUp></BiSortUp></div></th>
              <th className='py-2 px-3 whitespace-nowrap'><div className='flex items-center space-x-1'><p>BIN Total Size</p><BiSortUp></BiSortUp></div></th>
              <th className='py-2 px-3 whitespace-nowrap'><div className='flex items-center space-x-1'><p>Valid BIN Struct Size</p><BiSortUp></BiSortUp></div></th>
              <th className='py-2 px-3 whitespace-nowrap'><div className='flex items-center space-x-1'><p>BIN Status</p><BiSortUp></BiSortUp></div></th>
              <th className='py-2 px-3 whitespace-nowrap'><div className='flex items-center space-x-1'><p>Reported Date</p><BiSortUp></BiSortUp></div></th>
              <th className='py-2 px-3 whitespace-nowrap'><div className='flex items-center space-x-1'><p>Monitor Start Time</p><BiSortUp></BiSortUp></div></th>
              <th className='py-2 px-3 whitespace-nowrap'><div className='flex items-center space-x-1'><p>Monitor End Time</p><BiSortUp></BiSortUp></div></th>
              <th className='py-2 px-3 whitespace-nowrap'><div className='flex items-center space-x-1'><p>Monitor Mode</p><BiSortUp></BiSortUp></div></th>
              <th className='py-2 px-3 whitespace-nowrap'><div className='flex items-center space-x-1'><p>Software Version</p><BiSortUp></BiSortUp></div></th>
              <th className='py-2 px-3 whitespace-nowrap'><div className='flex items-center space-x-1'><p>Remote STB IP</p><BiSortUp></BiSortUp></div></th>
              <th className='py-2 px-3 whitespace-nowrap'><div className='flex items-center space-x-1'><p>ProDur (ms)</p><BiSortUp></BiSortUp></div></th>
              <th className='py-2 px-3 whitespace-nowrap bg-gray-200 sticky right-0'><div className='flex items-center space-x-1'><p>Data</p><BiSortUp></BiSortUp></div></th>
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
                <td className='py-2 px-3 whitespace-nowrap'>Monitor Config - Abort</td>
                <td className='py-2 px-3 whitespace-nowrap'>21Jun23 11:05:21</td>
                <td className='py-2 px-3 whitespace-nowrap'>21Jun23 10:45:36 (5s)</td>
                <td className='py-2 px-3 whitespace-nowrap'>STARTED</td>
                <td className='py-2 px-3 whitespace-nowrap'>SCV</td>
                <td className='py-2 px-3 whitespace-nowrap'>Monitor Config - Abort</td>
                <td className='py-2 px-3 whitespace-nowrap'>21Jun23 11:05:21</td>
                <td className='py-2 px-3 whitespace-nowrap'>21Jun23 10:45:36 (5s)</td>
                <td className='py-2 px-3 whitespace-nowrap'>STARTED</td>
                <td className='py-2 px-3 whitespace-nowrap'>SCV</td>
                <td className='py-2 px-3 whitespace-nowrap'>Monitor Config - Abort</td>
                <td className='py-2 px-3 whitespace-nowrap'>21Jun23 11:05:21</td>
                <td className='py-2 px-3 whitespace-nowrap'>21Jun23 10:45:36 (5s)</td>
                <td className='py-2 px-3 whitespace-nowrap'>STARTED</td>
                <td className='py-2 px-3 whitespace-nowrap'>SCV</td>
                <td className='py-2 px-3 whitespace-nowrap bg-white sticky right-0'>SCV</td>
              </tr>)}
          </tbody>
        </table>

      </div>

    </div>
  )
}
