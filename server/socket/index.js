// const express = require('express')
// const { Server } = require('socket.io')
// const http  = require('http')
// const getUserDetailsFromToken = require('../helpers/getUserDetailsFromToken')
// const UserModel = require('../models/UserModel')
// const { ConversationModel,MessageModel } = require('../models/ConversationModel')
// const getConversation = require('../helpers/getConversation')

// const app = express()

// /***socket connection */
// const server = http.createServer(app)
// const io = new Server(server,{
//     cors : {
//         origin : process.env.FRONTEND_URL,
//         credentials : true
//     }
// })

// /***
//  * socket running at http://localhost:8080/
//  */

// //online user
// const onlineUser = new Set()

// io.on('connection',async(socket)=>{
//     console.log("connect User ", socket.id)

//     const token = socket.handshake.auth.token 

//     //current user details 
//     const user = await getUserDetailsFromToken(token)

//     //create a room
//     socket.join(user?._id.toString())
//     onlineUser.add(user?._id?.toString())

//     io.emit('onlineUser',Array.from(onlineUser))

//     socket.on('message-page',async(userId)=>{
//         console.log('userId',userId)
//         const userDetails = await UserModel.findById(userId).select("-password")
        
//         const payload = {
//             _id : userDetails?._id,
//             name : userDetails?.name,
//             email : userDetails?.email,
//             profile_pic : userDetails?.profile_pic,
//             online : onlineUser.has(userId)
//         }
//         socket.emit('message-user',payload)


//          //get previous message
//          const getConversationMessage = await ConversationModel.findOne({
//             "$or" : [
//                 { sender : user?._id, receiver : userId },
//                 { sender : userId, receiver :  user?._id}
//             ]
//         }).populate('messages').sort({ updatedAt : -1 })

//         socket.emit('message',getConversationMessage?.messages || [])
//     })


//     //new message
//     socket.on('new message',async(data)=>{

//         //check conversation is available both user

//         let conversation = await ConversationModel.findOne({
//             "$or" : [
//                 { sender : data?.sender, receiver : data?.receiver },
//                 { sender : data?.receiver, receiver :  data?.sender}
//             ]
//         })

//         //if conversation is not available
//         if(!conversation){
//             const createConversation = await ConversationModel({
//                 sender : data?.sender,
//                 receiver : data?.receiver
//             })
//             conversation = await createConversation.save()
//         }
        
//         const message = new MessageModel({
//           text : data.text,
//           imageUrl : data.imageUrl,
//           videoUrl : data.videoUrl,
//           msgByUserId :  data?.msgByUserId,
//         })
//         const saveMessage = await message.save()

//         const updateConversation = await ConversationModel.updateOne({ _id : conversation?._id },{
//             "$push" : { messages : saveMessage?._id }
//         })

//         const getConversationMessage = await ConversationModel.findOne({
//             "$or" : [
//                 { sender : data?.sender, receiver : data?.receiver },
//                 { sender : data?.receiver, receiver :  data?.sender}
//             ]
//         }).populate('messages').sort({ updatedAt : -1 })


//         io.to(data?.sender).emit('message',getConversationMessage?.messages || [])
//         io.to(data?.receiver).emit('message',getConversationMessage?.messages || [])

//         //send conversation
//         const conversationSender = await getConversation(data?.sender)
//         const conversationReceiver = await getConversation(data?.receiver)

//         io.to(data?.sender).emit('conversation',conversationSender)
//         io.to(data?.receiver).emit('conversation',conversationReceiver)
//     })


//     //sidebar
//     socket.on('sidebar',async(currentUserId)=>{
//         console.log("current user",currentUserId)

//         const conversation = await getConversation(currentUserId)

//         socket.emit('conversation',conversation)
        
//     })

//     socket.on('seen',async(msgByUserId)=>{
        
//         let conversation = await ConversationModel.findOne({
//             "$or" : [
//                 { sender : user?._id, receiver : msgByUserId },
//                 { sender : msgByUserId, receiver :  user?._id}
//             ]
//         })

//         const conversationMessageId = conversation?.messages || []

//         const updateMessages  = await MessageModel.updateMany(
//             { _id : { "$in" : conversationMessageId }, msgByUserId : msgByUserId },
//             { "$set" : { seen : true }}
//         )

//         //send conversation
//         const conversationSender = await getConversation(user?._id?.toString())
//         const conversationReceiver = await getConversation(msgByUserId)

//         io.to(user?._id?.toString()).emit('conversation',conversationSender)
//         io.to(msgByUserId).emit('conversation',conversationReceiver)
//     })

//     //disconnect
//     socket.on('disconnect',()=>{
//         onlineUser.delete(user?._id?.toString())
//         console.log('disconnect user ',socket.id)
//     })
// })

// module.exports = {
//     app,
//     server
// }



















// const express = require('express');
// const { Server } = require('socket.io');
// const http = require('http');
// const getUserDetailsFromToken = require('../helpers/getUserDetailsFromToken');
// const UserModel = require('../models/UserModel');
// const { ConversationModel, MessageModel } = require('../models/ConversationModel');
// const getConversation = require('../helpers/getConversation');

// const app = express();

// // Socket.io server setup
// const server = http.createServer(app);
// const io = new Server(server, {
//     cors: {
//         origin: process.env.FRONTEND_URL,
//         credentials: true
//     }
// });

// // Track online users and channels
// const onlineUsers = new Map(); // Using a Map for easier management of user details
// const channelParticipants = new Map(); // Map to track participants in each channel

// io.on('connection', async (socket) => {
//     console.log('User connected:', socket.id);

//     const token = socket.handshake.auth.token;

//     // Retrieve user details from token
//     const user = await getUserDetailsFromToken(token);

//     if (!user) {
//         socket.disconnect();
//         return;
//     }

//     // Store user details in onlineUsers map
//     onlineUsers.set(socket.id, user);

//     // Emit updated online users list to all clients
//     io.emit('onlineUsers', Array.from(onlineUsers.values()));

//     // Listen for joining a channel
//     socket.on('joinChannel', async (channelId) => {
//         // Logic to verify if user can join the channel (e.g., permissions check)
//         // For simplicity, assume all users can join any channel for now

//         // Add user to channelParticipants map for the specified channel
//         if (!channelParticipants.has(channelId)) {
//             channelParticipants.set(channelId, new Set());
//         }
//         channelParticipants.get(channelId).add(user._id.toString());

//         // Join the specified channel
//         socket.join(channelId);
//         console.log(`User ${user.name} joined channel ${channelId}`);

//         // Emit event to update channel participants to all clients in the channel
//         io.to(channelId).emit('channelParticipants', Array.from(channelParticipants.get(channelId)));
//     });

//     // Listen for leaving a channel
//     socket.on('leaveChannel', (channelId) => {
//         // Remove user from channelParticipants map for the specified channel
//         if (channelParticipants.has(channelId)) {
//             channelParticipants.get(channelId).delete(user._id.toString());

//             // If no participants left in the channel, remove the channel entry
//             if (channelParticipants.get(channelId).size === 0) {
//                 channelParticipants.delete(channelId);
//             }

//             // Leave the specified channel
//             socket.leave(channelId);
//             console.log(`User ${user.name} left channel ${channelId}`);

//             // Emit event to update channel participants to all clients in the channel
//             io.to(channelId).emit('channelParticipants', Array.from(channelParticipants.get(channelId)));
//         }
//     });

//     // Listen for channel messages
//     socket.on('channelMessage', async ({ channelId, message }) => {
//         // Save message to database (if needed)
//         const newMessage = new MessageModel({
//             text: message,
//             sender: user._id,
//             channel: channelId,
//             timestamp: new Date()
//         });

//         await newMessage.save();

//         // Broadcast message to all clients in the channel
//         io.to(channelId).emit('channelMessage', {
//             sender: user,
//             message: newMessage
//         });
//     });

//     // Listen for private messages
//     socket.on('privateMessage', async ({ recipientId, message }) => {
//         // Save message to database (if needed)
//         const newMessage = new MessageModel({
//             text: message,
//             sender: user._id,
//             recipient: recipientId,
//             timestamp: new Date()
//         });

//         await newMessage.save();

//         // Emit message to sender
//         socket.emit('privateMessage', {
//             recipientId,
//             message: newMessage
//         });

//         // Emit message to recipient if online
//         const recipientSocketId = Array.from(onlineUsers).find(([socketId, userInfo]) => userInfo._id === recipientId);
//         if (recipientSocketId) {
//             io.to(recipientSocketId).emit('privateMessage', {
//                 sender: user,
//                 message: newMessage
//             });
//         }
//     });

//     // Handle sidebar or conversation list updates
//     socket.on('sidebar', async (currentUserId) => {
//         console.log("Current user", currentUserId);

//         const conversation = await getConversation(currentUserId);

//         socket.emit('conversation', conversation);
//     });

//     // Handle seen messages
//     socket.on('seen', async (msgByUserId) => {
//         let conversation = await ConversationModel.findOne({
//             "$or": [
//                 { sender: user._id, receiver: msgByUserId },
//                 { sender: msgByUserId, receiver: user._id }
//             ]
//         });

//         const conversationMessageId = conversation?.messages || [];

//         const updateMessages = await MessageModel.updateMany(
//             { _id: { "$in": conversationMessageId }, msgByUserId: msgByUserId },
//             { "$set": { seen: true } }
//         );

//         // Send updated conversation details
//         const conversationSender = await getConversation(user._id.toString());
//         const conversationReceiver = await getConversation(msgByUserId);

//         io.to(user._id.toString()).emit('conversation', conversationSender);
//         io.to(msgByUserId).emit('conversation', conversationReceiver);
//     });

//     // Handle disconnect
//     socket.on('disconnect', () => {
//         onlineUsers.delete(socket.id);
//         console.log('User disconnected:', socket.id);
//         io.emit('onlineUsers', Array.from(onlineUsers.values())); // Update online users list
//     });
// });

// module.exports = {
//     app,
//     server
// };





// Inside index.js in Socket folder

const express = require('express');
const { Server } = require('socket.io');
const http = require('http');
const getUserDetailsFromToken = require('../helpers/getUserDetailsFromToken');
const { MessageModel } = require('../models/ConversationModel');

const app = express();

// Socket.io server setup
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: process.env.FRONTEND_URL,
        credentials: true
    }
});

// Track online users and channels
const onlineUsers = new Map(); // Using a Map for easier management of user details
const channelParticipants = new Map(); // Map to track participants in each channel

io.on('connection', async (socket) => {
    console.log('User connected:', socket.id);

    const token = socket.handshake.auth.token;

    // Retrieve user details from token
    const user = await getUserDetailsFromToken(token);

    if (!user) {
        socket.disconnect();
        return;
    }

    // Store user details in onlineUsers map
    onlineUsers.set(socket.id, user);

    // Emit updated online users list to all clients
    io.emit('onlineUsers', Array.from(onlineUsers.values()));

    // Listen for joining a common channel
    socket.on('joinCommonChannel', async () => {
        const channelId = 'writo-common'; // Assuming 'writo-common' is the channel ID for the common channel

        // Add user to channelParticipants map for the common channel
        if (!channelParticipants.has(channelId)) {
            channelParticipants.set(channelId, new Set());
        }
        channelParticipants.get(channelId).add(user._id.toString());

        // Join the common channel
        socket.join(channelId);
        console.log(`User ${user.name} joined common channel`);

        // Emit event to update channel participants to all clients in the common channel
        io.to(channelId).emit('channelParticipants', Array.from(channelParticipants.get(channelId)));
    });

    // Listen for leaving the common channel
    socket.on('leaveCommonChannel', async () => {
        const channelId = 'writo-common'; // Assuming 'writo-common' is the channel ID for the common channel

        // Remove user from channelParticipants map for the common channel
        if (channelParticipants.has(channelId)) {
            channelParticipants.get(channelId).delete(user._id.toString());

            // If no participants left in the common channel, remove the channel entry
            if (channelParticipants.get(channelId).size === 0) {
                channelParticipants.delete(channelId);
            }

            // Leave the common channel
            socket.leave(channelId);
            console.log(`User ${user.name} left common channel`);

            // Emit event to update channel participants to all clients in the common channel
            io.to(channelId).emit('channelParticipants', Array.from(channelParticipants.get(channelId)));
        }
    });

    // Listen for messages in the common channel
    socket.on('commonChannelMessage', async (message) => {
        const channelId = 'writo-common'; // Assuming 'writo-common' is the channel ID for the common channel

        // Save message to database (if needed)
        const newMessage = new MessageModel({
            text: message,
            sender: user._id,
            channel: channelId,
            timestamp: new Date()
        });

        await newMessage.save();

        // Broadcast message to all clients in the common channel
        io.to(channelId).emit('commonChannelMessage', {
            sender: user,
            message: newMessage
        });
    });

    // Handle disconnect
    socket.on('disconnect', () => {
        onlineUsers.delete(socket.id);
        console.log('User disconnected:', socket.id);
        io.emit('onlineUsers', Array.from(onlineUsers.values())); // Update online users list
    });
});

module.exports = {
    app,
    server
};
