import { useState } from 'react';

const ChatSupport = () => {
  const [activeChat, setActiveChat] = useState(1);
  const [message, setMessage] = useState('');

  const chats = [
    {
      id: 1,
      customer: 'John Doe',
      lastMessage: 'Hello, I need help with my order',
      time: '2 min ago',
      unread: 2,
      status: 'online'
    },
    {
      id: 2,
      customer: 'Jane Smith',
      lastMessage: 'My product is not working properly',
      time: '15 min ago',
      unread: 0,
      status: 'offline'
    },
    {
      id: 3,
      customer: 'Bob Johnson',
      lastMessage: 'Thank you for the help!',
      time: '1 hour ago',
      unread: 0,
      status: 'away'
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'customer',
      message: 'Hello, I need help with my order #ORD-001',
      time: '10:30 AM'
    },
    {
      id: 2,
      sender: 'admin',
      message: 'Hi John! I\'d be happy to help you with your order. Let me check the status for you.',
      time: '10:32 AM'
    },
    {
      id: 3,
      sender: 'customer',
      message: 'Thank you! I ordered it 3 days ago but haven\'t received any updates.',
      time: '10:33 AM'
    },
    {
      id: 4,
      sender: 'admin',
      message: 'I can see your order is currently being processed and should ship within 24 hours. You\'ll receive a tracking number via email.',
      time: '10:35 AM'
    }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Chat Support</h1>
      
      <div className="bg-white rounded-lg shadow-md h-[600px] flex">
        {/* Chat List */}
        <div className="w-1/3 border-r border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Active Chats</h2>
          </div>
          <div className="overflow-y-auto h-full">
            {chats.map((chat) => (
              <div
                key={chat.id}
                onClick={() => setActiveChat(chat.id)}
                className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                  activeChat === chat.id ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium text-sm">
                        {chat.customer.charAt(0)}
                      </span>
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-sm">{chat.customer}</p>
                      <div className="flex items-center">
                        <div
                          className={`w-2 h-2 rounded-full mr-2 ${
                            chat.status === 'online'
                              ? 'bg-green-400'
                              : chat.status === 'away'
                              ? 'bg-yellow-400'
                              : 'bg-gray-400'
                          }`}
                        ></div>
                        <span className="text-xs text-gray-500 capitalize">
                          {chat.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  {chat.unread > 0 && (
                    <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1">
                      {chat.unread}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                <p className="text-xs text-gray-400 mt-1">{chat.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-medium text-sm">J</span>
              </div>
              <div className="ml-3">
                <p className="font-medium">John Doe</p>
                <p className="text-sm text-gray-500">Online</p>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'admin' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    msg.sender === 'admin'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  <p className="text-sm">{msg.message}</p>
                  <p
                    className={`text-xs mt-1 ${
                      msg.sender === 'admin' ? 'text-blue-100' : 'text-gray-500'
                    }`}
                  >
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSendMessage}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSupport;