import React from 'react'
import logo from '../assets/logo.png'

const AuthLayouts = ({children}) => {
  return (
    <>
   <header className='flex justify-center items-center py-3 h-20 shadow-md bg-white' style={{
   color:'white',
   backgroundColor:"#006756",
    fontSize: '1.6rem',
    fontFamily: '"Overlock", sans-serif',
    fontWeight: 700,
    fontStyle: 'normal'
  }}>
            Writo Education Private Limited
        </header>

        { children }
    </>
  )
}

export default AuthLayouts
