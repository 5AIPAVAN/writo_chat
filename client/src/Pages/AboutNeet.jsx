import React from 'react'
import NavScrollExample from '../Components_2/NavScrollExample'
import CommunityAim from '../Components_2/CommunityAim'
import Whyjoin from '../Components_2/Whyjoin'
import Whocanjoin from '../Components_2/Whocanjoin'
import Howtojoin from '../Components_2/Howtojoin'
import Contactus from '../Components_2/Contactus'
import Navvv from '../Components_2/Navvv'
import About_Neet from '../Components_2/About_Neet'

export default function AboutNeet() {
    return (
        <div style={{ maxWidth: '1600px' }}>
            <Navvv/>
            <About_Neet/>
            <CommunityAim/>
            <Whyjoin />
            <Whocanjoin />
            <Howtojoin />
            <Contactus />
        </div>
    )
}
