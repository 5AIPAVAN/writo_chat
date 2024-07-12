import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  _id : "",
  name : "",
  email : "",
  profile_pic : "",
  token : "",
  onlineUser : [],
  socketConnection : null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser : (state,action)=>{
        state._id = action.payload._id
        state.name = action.payload.name 
        state.email = action.payload.email 
        state.profile_pic = action.payload.profile_pic 
    },
    setToken : (state,action)=>{
        state.token = action.payload
    },
    logout : (state,action)=>{
        state._id = ""
        state.name = ""
        state.email = ""
        state.profile_pic = ""
        state.token = ""
        state.socketConnection = null
    },
    setOnlineUser : (state,action)=>{
      state.onlineUser = action.payload
    },
    setSocketConnection : (state,action)=>{
      state.socketConnection = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUser, setToken ,logout, setOnlineUser,setSocketConnection } = userSlice.actions

export default userSlice.reducer







// userSlice.js

// import { createSlice } from '@reduxjs/toolkit';
// import socket from '../../server/socket'; // Import your Socket.io instance

// const initialState = {
//   _id: '',
//   name: '',
//   email: '',
//   profile_pic: '',
//   token: '',
//   onlineUsers: [],
//   socketConnection: null,
// };

// export const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     setUser: (state, action) => {
//       state._id = action.payload._id;
//       state.name = action.payload.name;
//       state.email = action.payload.email;
//       state.profile_pic = action.payload.profile_pic;
//     },
//     setToken: (state, action) => {
//       state.token = action.payload;
//     },
//     logout: (state) => {
//       state._id = '';
//       state.name = '';
//       state.email = '';
//       state.profile_pic = '';
//       state.token = '';
//       state.socketConnection = null;
//       state.onlineUsers = [];
//     },
//     setOnlineUsers: (state, action) => {
//       state.onlineUsers = action.payload;
//     },
//     setSocketConnection: (state, action) => {
//       state.socketConnection = action.payload;
//     },
//   },
// });

// // Action creators
// export const { setUser, setToken, logout, setOnlineUsers, setSocketConnection } = userSlice.actions;

// // Thunks for handling socket actions

// // Join common channel action
// export const joinCommonChannel = () => (dispatch, getState) => {
//   const { user } = getState();
//   socket.emit('joinCommonChannel');
// };

// // Leave common channel action
// export const leaveCommonChannel = () => (dispatch, getState) => {
//   const { user } = getState();
//   socket.emit('leaveCommonChannel');
// };

// // Send message to common channel action
// export const sendCommonChannelMessage = (message) => (dispatch, getState) => {
//   const { user } = getState();
//   socket.emit('commonChannelMessage', message);
// };

// export default userSlice.reducer;
