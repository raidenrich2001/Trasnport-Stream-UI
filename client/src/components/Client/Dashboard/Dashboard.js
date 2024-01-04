import React from 'react'
import { useSelector } from 'react-redux';

export default function Dashboard() {
    const Toggle = useSelector(state => state.SideBar.toggle);
    const loop = [...Array(20 + 1).keys()].slice(1)

    return (
        <main className='w-full'>
            <div className='w-full flex justify-end'>
                <div className={`${Toggle ? "w-full transition-all" : "w-[85%] transition-all"}`}>
                    <h1 className='w-full border h-14 text-xl flex items-center px-4'>
                        Dashboard
                    </h1>
                    <section className='border py-2 px-1'>
                        <div className='m-3 text-sm grid grid-cols-4 place-content-center place-items-center text-white gap-1'>

                            {loop.map((num) => (
                                <div className='w-11/12 my-2 rounded-md scale-100 ease-out duration-200 hover:shadow-xl hover:scale-105 hover:ease-in hover:duration-200 bg-gradient-to-r from-cyan-500 to-teal-400'>
                                    <div className='p-4'>
                                        <div className='flex justify-between'>
                                        <h1 className='text-4xl'>{num}</h1>
                                        <h1 className='text-4xl'>[0]</h1>
                                        </div>
                                        <p className='text-base my-1'>TamilNadu Arasu Cable TV</p>
                                        
                                        <button className='w-full text-sm py-1 hover:bg-teal-400 transition-all duration-500 rounded-md'>More Info</button>
                                    </div>
                                </div>
                            ))}


                        </div>

                    </section>
                </div>
            </div>
        </main>
    )
}
