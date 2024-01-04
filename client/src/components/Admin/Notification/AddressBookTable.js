import React from 'react'
import { BiSearchAlt2, BiSolidEditAlt, BiSortUp } from 'react-icons/bi'
import Pagination from '../../Pagination'

export default function AddressBookTable() {
    const loop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <section className='px-2 z-10 mt-2'>
  <div className='flex justify-between mb-2 mt-2'>
    <div className='space-x-2 flex items-center text-sm'>
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
    <div className='flex items-center'>
      <div className='bg-blue-500 border border-blue-500 p-1.5 text-white'>
        <i className='h-full w-full '><BiSearchAlt2></BiSearchAlt2></i>
      </div>
      <input type='search' className='form-input2'></input>
    </div>
    <Pagination></Pagination>
  </div>
      <div className='max-h-[51vh] overflow-auto StylesOverflow border'>
          <table className='w-full h-full table-auto rounded-sm shadow-md bg-white'>
              <thead className='sticky top-0 uppercase text-xs text-md text-slate-600 bg-gray-200'>
                  <tr>
                      <th className='py-2 px-3 whitespace-nowrap'><div className='flex justify-center items-center space-x-1'><p>S.No</p> <BiSortUp></BiSortUp></div></th>
                      <th className='py-2 px-3 whitespace-nowrap'><div className='flex justify-center items-center space-x-1'><p>User Name</p><BiSortUp></BiSortUp></div></th>
                      <th className='py-2 px-3 whitespace-nowrap'><div className='flex justify-center items-center space-x-1'><p>Email Address</p><BiSortUp></BiSortUp></div></th>
                      <th className='py-2 px-3 whitespace-nowrap'><div className='flex justify-center items-center space-x-1'><p>Mobile Numbers</p><BiSortUp></BiSortUp></div></th>
                      <th className='py-2 px-3 whitespace-nowrap'><div className='flex justify-center items-center space-x-1'><p>Created Date</p><BiSortUp></BiSortUp></div></th>
                      <th className='py-2 px-3 whitespace-nowrap'><div className='flex justify-center items-center space-x-1'><p>Modified Date</p><BiSortUp></BiSortUp></div></th>
                      <th className='py-2 px-3 whitespace-nowrap'><div className='flex justify-center items-center space-x-1'><p>Edit</p><BiSortUp></BiSortUp></div></th>
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
                          <td className='py-2 px-3 whitespace-nowrap'><i className='flex justify-center'><BiSolidEditAlt></BiSolidEditAlt></i></td>
                      </tr>)}
              </tbody>
          </table>
      </div>
  </section>
  )
}
