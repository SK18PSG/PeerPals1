import React from 'react';
import SignIn from './SignIn'
import LogOut from './LogOut'
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'

const style = {
    nav: `bg-gray-800 h-20 flex justify-between items-center`,
    heading: `px-10 py-3 text-white text-3xl`
}

const Navbar = () => {
    const [user] = useAuthState(auth)
    console.log(user)
    return (
    <div className={style.nav}>
        <h1 className={style.heading}>PeerPals</h1>
        {user ? <LogOut /> : <SignIn />}
    </div>
    )
}

export default Navbar