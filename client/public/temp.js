import React from 'react';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useClickOutside = (containerRef, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [containerRef, callback]);
};



export default function temp() {
  const dispatch = useDispatch();
  const containerRef = useRef();
  const Toggle = useSelector(state => state.SideBar.toggle);
  const DropDownSearch = useSelector(state => state.Common.dropdownSearch)

  const handleOutsideClick = () => {
    dispatch(action.setDropdownSearch('close'));
};

useClickOutside(containerRef, handleOutsideClick);

function handleDropDownSearch(inputname) {
  dispatch(action.setDropdownSearch(DropDownSearch === inputname ? 'close' : inputname));
}
  return (<>
    <button type='button' className='w-full flex items-center border-slate-300 text-slate-600 cursor-pointer px-3'  ref={containerRef} onClick={() => handleDropDownSearch('Select STB ID')}>
      // some dropdown code here
      </button>
      <button type='button' className='w-full flex items-center border-slate-300 text-slate-600 cursor-pointer px-3'  ref={containerRef} onClick={() => handleDropDownSearch('Select STB ID')}>
     // some dropdown code here
     </button>
     </>)


}
the first div is not working properly but the second div works perfectly when i click the first div it opens and if reclick that it closes and reopens automatically

