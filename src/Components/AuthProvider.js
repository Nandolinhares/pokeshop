import React, { useEffect } from 'react';
//Redux
import { useDispatch } from 'react-redux';
//Actions
import { getOldPurchase } from '../Redux/actions/userActions';

export default function AuthProvider({ children }) {

    //Hook do redux
    const dispatch = useDispatch();

    //Aqui eu pego as compras efetuadas anteriormente
    const oldPurchase = JSON.parse(localStorage.getItem("Compras"));

    useEffect(() => {
        if(oldPurchase !== null) {
            dispatch(getOldPurchase(oldPurchase));
        }
    }, [oldPurchase, dispatch])

    return <>{children}</>
}
