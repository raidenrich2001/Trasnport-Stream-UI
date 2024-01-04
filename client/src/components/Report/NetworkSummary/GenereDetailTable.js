import React from 'react'
import { BiSortUp } from 'react-icons/bi'

export default function GenereDetailTable() {
    const loop = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className='max-h-[115vh] overflow-auto StylesOverflow border'>
    <table className='w-full h-full table-auto rounded-sm shadow-md bg-white'>
        <thead className='sticky top-0 uppercase text-xs text-md text-slate-600 bg-gray-200'>
            <tr>
                <th className='py-2 px-3 whitespace-nowrap'><div className='flex justify-center items-center space-x-1'><p>S.No</p> <BiSortUp></BiSortUp></div></th>
                <th className='py-2 px-3 whitespace-nowrap'><div className='flex justify-center items-center space-x-1'><p>Genere ID</p><BiSortUp></BiSortUp></div></th>
                <th className='py-2 px-3 whitespace-nowrap'><div className='flex justify-center items-center space-x-1'><p>Genere Name</p><BiSortUp></BiSortUp></div></th>
                <th className='py-2 px-3 whitespace-nowrap'><div className='flex justify-center items-center space-x-1'><p>No of Channels</p><BiSortUp></BiSortUp></div></th>
            </tr>
        </thead>
        <tbody className='text-center text-sm'>
            {loop.map(() =>
                <tr className='border-b'>
                    <td className='py-2 px-3 whitespace-nowrap'>1</td>
                    <td className='py-2 px-3 whitespace-nowrap'>1836636</td>
                    <td className='py-2 px-3 whitespace-nowrap'>RAY192700000827</td>
                    <td className='py-2 px-3 whitespace-nowrap'>Monitor Config - Abort</td>
                </tr>)}
        </tbody>
    </table>
</div>
  )
}
