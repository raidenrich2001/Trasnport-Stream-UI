import React, { useRef, useState } from 'react'
import useClickOutside from '../../customHook/useClickOutside';
import { useDispatch, useSelector } from 'react-redux';
import { action } from '../../../store/store';

export default function SmallDropdown(props) {
    const containerRef = useRef(null);
    const Tablist = useSelector(state => state.Common.tablist);
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch()
    const handleOutsideClick = () => {
        setIsOpen(false);
    };
    
    useClickOutside(containerRef, handleOutsideClick);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };

    return (
        <li className="mr-2 relative" ref={containerRef}>
            <button type='button' className={`px-7 py-3 border-b-2 border-transparent font-semibold ${props.whichDropdown.includes(Tablist) && "text-blue-600  border-blue-600  dark:text-blue-500 dark:border-blue-500"}`} onClick={(e) => toggleDropdown(props.DropDownName)}>{props.DropDownName}</button>
            <ul className={`${!isOpen ? 'hidden' : 'block'} border absolute bg-white px-1 py-1`}>
                {props.whichDropdown.map((options) => 
                <li><button type='button' className='hover:bg-blue-500 hover:text-white py-1 whitespace-nowrap w-full text-start px-2 rounded-sm' onClick={() => dispatch(action.setTablist(options))}>{options}</button></li>
                )}
            </ul>
        </li>
    )
}
