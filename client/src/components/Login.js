import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import logo from './img/RURUTEK - Logo Original.svg'
import useClickOutside from './customHook/useClickOutside';
import {MdOutlineLogin} from 'react-icons/md'

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [translate, setTranslate] = useState('')
    const containerRef = useRef(null)
    const UNRef = useRef(null)
    const PWRef = useRef(null)
    function handleLogin(){
        navigate('/client/command')
    }
    function handleFocus(foc) {
        foc.current.focus();
    }
 console.log(translate)
    useClickOutside(containerRef,() => setTranslate(''))
    return (
        <div className='bg-gradient-to-r from-teal-600 to-cyan-500 h-screen w-full'>
            <div className='flex'>
                 <img src={logo} className='py-5 px-10'/>
            </div>
           
            <div className='flex justify-center items-center h-[80vh]'>
                
                <form className='bg-white w-1/4 shadow-md rounded' onSubmit={handleLogin}>
                    <div  className='text-lg text-center rounded-t tracking-widest bg-gradient-to-r from-teal-500 to-cyan-400 py-3 text-white shadow-md font-semibold'>
                        <h1>Transport Stream Monitor Server</h1>
                    </div>
                
                <div className='p-8 space-y-4'  ref={containerRef}>
                    <h1 className='text-2xl font-semibold text-slate-700'>Login <div className='bg-teal-500 h-1 w-6'></div></h1>

                    <div className='w-full relative pt-2'>
                        <input type='text' className={`border-0 border-b border-slate-400 w-full focus:ring-0`} onChange={e => setUsername(e.target.value)} onFocus={() => setTranslate('UN')} ref={UNRef}/>
                        <label className={`text-slate-500 ${(username !== '' ||  translate === 'UN') ? 'text-sm transition-all absolute left-0 -translate-y-3 duration-150' : 'absolute left-0 bottom-1 transition-all duration-150'}`} onClick={() => handleFocus(UNRef)}>Username</label>
                    </div>
                    <div className='w-full relative pt-2'>
                        <input type='text' className={`border-0 border-b border-slate-400 w-full focus:ring-0`} onChange={e => setPassword(e.target.value)} onFocus={() => setTranslate('PW')} ref={PWRef}/>
                        <label className={`text-slate-500 ${(password !== '' ||  translate === 'PW') ? 'text-sm transition-all absolute left-0 -translate-y-3 duration-150' : 'absolute left-0 bottom-1 transition-all duration-150'}`} onClick={() => handleFocus(PWRef)}>Password</label>
                    </div>
                    <h1 className='font-semibold text-slate-700'>Delivery Mode</h1>
                    <div className='space-x-3 flex items-center'>
                        <input type='radio'></input>
                        <label>Production</label>
                        <input type='radio'></input>
                        <label>Test</label>
                    </div>
                    <h1 className='font-semibold text-slate-700'>Backup Database</h1>
                    <select type='select' className='border border-slate-300 w-full focus:ring-0 text-slate-600' placeholder='Password'>
                        <option>Live Data</option>
                    </select>
                    <div className='pt-3'>
                        <button type='submit' className='w-full text-white py-2 bg-teal-500  hover:bg-teal-600 transition-all duration-300 flex justify-center items-center space-x-1'><p>Continue</p><MdOutlineLogin></MdOutlineLogin></button>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
