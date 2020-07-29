import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function RequireAuth({ children }) {
    const history = useHistory();
    const auth = useSelector(state => state.auth)

    useEffect(() => {
        if(!auth){
            console.log("able to leave")
            history.push("/")
        }
    }, [auth])

    return (
        <>
            {children}
        </>
    )
}
