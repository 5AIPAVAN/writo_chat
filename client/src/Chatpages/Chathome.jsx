// import axios from 'axios'
// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Outlet, useLocation, useNavigate } from 'react-router-dom'
// import { logout, setOnlineUser, setSocketConnection, setUser } from '../redux/userSlice'
// import Sidebar from '../Chatcomponents/Sidebar'
// import logo from '../assets/writo_logo.png'
// import io from 'socket.io-client'

// const Chathome = () => {
//   const user = useSelector(state => state.user)
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const location = useLocation()

//   console.log('user',user)
//   const fetchUserDetails = async()=>{
//     try {
//         const URL = `${process.env.REACT_APP_BACKEND_URL}/api/user-details`
//         const response = await axios({
//           url : URL,
//           withCredentials : true
//         })

//         dispatch(setUser(response.data.data))

//         if(response.data.data.logout){
//             dispatch(logout())
//             navigate("/email")
//         }
//         console.log("current user Details",response)
//     } catch (error) {
//         console.log("error",error)
//     }
//   }

//   useEffect(()=>{
//     fetchUserDetails()
//   },[])

//   /***socket connection */
//   useEffect(()=>{
//     const socketConnection = io(process.env.REACT_APP_BACKEND_URL,{
//       auth : {
//         token : localStorage.getItem('token')
//       },
//     })

//     socketConnection.on('onlineUser',(data)=>{
//       console.log(data)
//       dispatch(setOnlineUser(data))
//     })

//     dispatch(setSocketConnection(socketConnection))

//     return ()=>{
//       socketConnection.disconnect()
//     }
//   },[])


//   const basePath = location.pathname === '/'
//   return (
//     <div className='grid lg:grid-cols-[300px,1fr] h-screen max-h-screen'>
//         <section className={`bg-white ${!basePath && "hidden"} lg:block`}>
//            <Sidebar/>
//         </section>

//         {/**message component**/}
//         <section className={`${basePath && "hidden"}`} >
//             <Outlet/>
//         </section>


//         <div className={`justify-center items-center flex-col gap-2 hidden ${!basePath ? "hidden" : "lg:flex" }`}>
//             <div>
//               <h1 style={{fontSize:'30px',color:'#006756',fontWeight:'500'}}> Welcome to Writo Chat, Clear Your Doubts With Our Experts</h1>
//             </div>
//             <p className='text-lg mt-2 text-slate-500'>Select Mentors To Ask Your Doubts</p>
//         </div>
//     </div>
//   )
// }

// export default Chathome


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { logout, setOnlineUser, setSocketConnection, setUser } from '../redux/userSlice';
import Sidebar from '../Chatcomponents/Sidebar';
import logo from '../assets/writo_logo.png';
import io from 'socket.io-client';

const Chathome = () => {
  const user = useSelector(state => state.user);
  const socketConnection = useSelector(state => state.socketConnection);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [currentChannel, setCurrentChannel] = useState(null); // Track current channel

  // Fetch user details from backend
  const fetchUserDetails = async () => {
    try {
      const URL = `${process.env.REACT_APP_BACKEND_URL}/api/user-details`;
      const response = await axios({
        url: URL,
        withCredentials: true
      });

      dispatch(setUser(response.data.data));

      if (response.data.data.logout) {
        dispatch(logout());
        navigate("/email");
      }
      console.log("Current user details:", response.data);
    } catch (error) {
      console.log("Error fetching user details:", error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  // Socket connection setup
  useEffect(() => {
    const socket = io(process.env.REACT_APP_BACKEND_URL, {
      auth: {
        token: localStorage.getItem('token')
      }
    });

    socket.on('onlineUser', (data) => {
      console.log('Online users:', data);
      dispatch(setOnlineUser(data));
    });

    dispatch(setSocketConnection(socket));

    return () => {
      socket.disconnect();
    };
  }, []);

  // Function to join a channel
  const joinChannel = (channelId) => {
    if (currentChannel !== channelId) {
      if (currentChannel) {
        // Leave current channel if exists
        socketConnection.emit('leaveChannel', currentChannel);
      }
      // Join new channel
      socketConnection.emit('joinChannel', channelId);
      setCurrentChannel(channelId);
    }
  };

  // Function to leave the current channel
  const leaveCurrentChannel = () => {
    if (currentChannel) {
      socketConnection.emit('leaveChannel', currentChannel);
      setCurrentChannel(null);
    }
  };

  // Render the component
  return (
    <div className='grid lg:grid-cols-[300px,1fr] h-screen max-h-screen'>
      <section className={`bg-white ${location.pathname !== '/' && "hidden"} lg:block`}>
        <Sidebar joinChannel={joinChannel} leaveChannel={leaveCurrentChannel} currentChannel={currentChannel} />
      </section>

      <section className={`${location.pathname === '/' ? "hidden" : ""}`}>
        <Outlet />
      </section>

      <div className={`justify-center items-center flex-col gap-2 hidden ${location.pathname !== '/' ? "hidden" : "lg:flex"}`}>
        <div>
          <h1 style={{ fontSize: '30px', color: '#006756', fontWeight: '500' }}>Welcome to Writo Chat, Clear Your Doubts With Our Experts</h1>
        </div>
        <p className='text-lg mt-2 text-slate-500'>Select Mentors To Ask Your Doubts</p>
      </div>
    </div>
  );
};

export default Chathome;
