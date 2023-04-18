import React from 'react'
import {auth} from '../firebase'

const style = {
    button: `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full`,
}

const LogOut = () => {
const signOut =() => {
    signOut(auth)
}
    return (
    <button onClick={() => auth.signOut()} className={style.button}>
        Logout
    </button>
    )
}

export default LogOut