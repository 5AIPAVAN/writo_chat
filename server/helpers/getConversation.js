// const { ConversationModel } = require("../models/ConversationModel")

// const getConversation = async(currentUserId)=>{
//     if(currentUserId){
//         const currentUserConversation = await ConversationModel.find({
//             "$or" : [
//                 { sender : currentUserId },
//                 { receiver : currentUserId}
//             ]
//         }).sort({  updatedAt : -1 }).populate('messages').populate('sender').populate('receiver')

//         const conversation = currentUserConversation.map((conv)=>{
//             const countUnseenMsg = conv?.messages?.reduce((preve,curr) => {
//                 const msgByUserId = curr?.msgByUserId?.toString()

//                 if(msgByUserId !== currentUserId){
//                     return  preve + (curr?.seen ? 0 : 1)
//                 }else{
//                     return preve
//                 }
             
//             },0)
            
//             return{
//                 _id : conv?._id,
//                 sender : conv?.sender,
//                 receiver : conv?.receiver,
//                 unseenMsg : countUnseenMsg,
//                 lastMsg : conv.messages[conv?.messages?.length - 1]
//             }
//         })

//         return conversation
//     }else{
//         return []
//     }
// }

// module.exports = getConversation



const { ConversationModel } = require("../models/ConversationModel");

const getConversation = async (currentUserId) => {
  if (currentUserId) {
    // Find conversations where current user is involved
    const currentUserConversations = await ConversationModel.find({
      participants: currentUserId,
      isChannel: true // Assuming you have a flag to differentiate channels
    })
    .sort({ updatedAt: -1 })
    .populate({
      path: 'messages',
      populate: { path: 'msgByUserId' } // Assuming 'msgByUserId' is the sender of the message
    })
    .populate('participants');

    const conversations = currentUserConversations.map((conv) => {
      const unreadMsgCount = conv.messages.reduce((prev, curr) => {
        const msgByUserId = curr.msgByUserId.toString();
        if (msgByUserId !== currentUserId && !curr.seen) {
          return prev + 1;
        }
        return prev;
      }, 0);

      return {
        _id: conv._id,
        participants: conv.participants,
        unreadMsgCount: unreadMsgCount,
        lastMessage: conv.messages[conv.messages.length - 1]
      };
    });

    return conversations;
  } else {
    return [];
  }
};

module.exports = getConversation;
