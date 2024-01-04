import React from 'react';
import logo from './img/RURUTEK - Logo Original.svg';
import { BiExitFullscreen, BiFullscreen, BiMenuAltRight } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux';
import { action } from '../store/store';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const dispatch= useDispatch();
    const FullScreen = useSelector(state => state.SideBar.fullScreen)
    const navigate = useNavigate();
    function handleLogout() {
        navigate('/')
    }

    function toggleFullScreen() {    
        if (!document.fullscreenElement && // alternative standard method
            !document.mozFullScreenElement && !document.webkitFullscreenElement) { // current working methods
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
            dispatch(action.setFullScreen(true))
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
            dispatch(action.setFullScreen(false))
        }
    }

    console.log(FullScreen)
    return (
        <nav className='bg-teal-600 shadow w-full h-16 sticky top-0 z-10 text-white'>
            <div className='mx-10 h-full flex justify-between items-center'>
                <div className='flex justify-between items-center w-[13%]'>
                    <div className='w-32'>
                        <img src={logo} alt='RuruTek Logo' className='w-full h-full'></img>
                    </div>
                    <i className='w-8 h-8 rounded-sm p-1 mt-2 cursor-pointer hover:bg-white hover:text-slate-800 transition-all' onClick={() =>dispatch(action.setToggle())}>
                        <BiMenuAltRight className='w-full h-full'></BiMenuAltRight>
                    </i>
                   
                </div>
                <div>
                    <h1 className='text-xl'>Transport Stream Monitor Server</h1>
                </div>
                <div className='flex justify-between items-center w-[10%]'>
                    <i className='w-8 h-8 rounded-sm p-1 cursor-pointer hover:bg-white hover:text-slate-800 transition-all' onClick={toggleFullScreen}>
                        {!FullScreen ? <BiFullscreen className='w-full h-full'></BiFullscreen> : <BiExitFullscreen className='w-full h-full'></BiExitFullscreen>}
                    </i>
                    <button className='bg-red-500 text-white rounded-md py-2 px-3' onClick={handleLogout}>Sign out</button>
                </div>
            </div>
        </nav>
    )
}