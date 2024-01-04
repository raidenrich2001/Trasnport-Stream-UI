import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { action } from '../../store/store';

export default function useTablist(callback) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(action.setTablist(callback));
        return () => {
            dispatch(action.setTablist('close'))
              };
    },[callback,dispatch])
}
