import React, { useRef, useState } from 'react';
import useClickOutside from './customHook/useClickOutside';
import { BiCaretDown, BiSearchAlt2 } from 'react-icons/bi';
import './css/Styles.css'

export default function DropDown(props) {

    const containerRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleOutsideClick = () => {
        setIsOpen(false);
    };
    
    useClickOutside(containerRef, handleOutsideClick);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };

    return (
        <div className='relative border border-slate-300 w-full' ref={containerRef}>
            <div className='flex items-center border-slate-300 text-slate-600 cursor-pointer px-3 py-1.5' onClick={() => toggleDropdown()}>
                <div className="w-full focus:ring-0 text-start">{props.placeholderName}</div>
                <i className={`${isOpen ? 'transition-all duration-300 -rotate-180' : 'transition-all duration rotate-0'}`}><BiCaretDown></BiCaretDown></i>
            </div>
            <div className={`absolute z-20 overflow-y-auto StylesOverflow top-9 w-full bg-white rounded-sm shadow-md overflow-hidden transition-all ease-linear duration-200 ${isOpen ? 'max-h-72 ' : 'max-h-0'}`}>
                <div className="px-3 py-2">
                    <label className="sr-only">Search</label>
                    <div className="relative">
                        <div className="w-10 absolute inset-y-0 left-0 flex items-center pointer-events-none">
                            <i className='w-full h-full text-white bg-blue-500 border-blue-500 flex justify-center' ><BiSearchAlt2 className='w-4 h-full' /></i>
                        </div>
                        <input type="text" className="block p-2 pl-12 text-sm form-input focus:ring-0" placeholder="Search user" />
                    </div>
                </div>
                <ul className="max-h-72 px-3 pb-2 text-sm" >
                    <li>
                        <div className="flex items-center pl-2 rounded hover:bg-blue-500 hover:text-white border">
                            <label htmlFor="checkbox-item-11" className="w-full py-1 ml-2 text-sm font-medium text-gray-900 rounded hover:text-white">Bonnie Green</label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
