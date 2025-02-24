
import { useState, useEffect, useRef } from "react";
import { FloatingDockDemo } from "../components/navbar";
import { ShootingStars } from "../components/ui/shooting-stars";
import { StarsBackground } from "../components/ui/stars-background";

function Messages() {
  const [messages, setMessages] = useState([
    {
      sender: 'Anderson Vanhron',
      text: 'Can be verified on any platform using docker',
      avatar: 'https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144',
      isSender: true
    },
    {
      sender: 'David',
      text: 'Your error message says permission denied, npm global installs must be given root privileges.',
      avatar: 'https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144',
      isSender: false
    },
  ]);

  const [messageText, setMessageText] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (messageText.trim()) {
      const newMessage = {
        sender: 'Anderson Vanhron',
        text: messageText,
        avatar: 'https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144',
        isSender: true
      };

      setMessages([...messages, newMessage]);
      setMessageText(''); // Clear the input field after sending a message
    }
  };

  return (
    <div className="bg-[linear-gradient(to_bottom_right,_#000000,_#06061AFF,_#1A072DFF,_#220A3BFF)] h-screen flex flex-col items-center justify-center relative w-full">
      <div className="absolute top-4 left-40 z-30">
        <FloatingDockDemo />
      </div>
      <div className="flex w-screen h-screen">
        <aside className="flex">
          <div className="flex flex-col float-left items-center w-16 h-screen py-8 space-y-8 bg-white dark:bg-black dark:border-gray-700">
            <a href="#">
              <img className="w-auto h-6" src="https://merakiui.com/images/logo.svg" alt=""/>
            </a>
            <a href="#" className="p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            </a>
            <a href="#" className="p-1.5 text-blue-500 transition-colors duration-200 bg-blue-100 rounded-lg dark:text-blue-400 dark:bg-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
            </a>
            <a href="#" className="p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
              </svg>
            </a>
            <a href="#" className="p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
            </a>
            <a href="#" className="p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 00-.032 1.57c.305.582.763.818 1.305.819h2.256a1.125 1.125 0 01.99 1.557l-.557 1.25c-.249.553-.88.935-1.523.935H8.973c-.644 0-1.274-.38-1.523-.935l-.557-1.25a1.125 1.125 0 01.99-1.557h2.256c.542 0 .998-.237 1.305-.819a6.759 6.759 0 00-.032-1.57c-.006-.38-.138-.752-.431-.992l-1.003-.827a1.125 1.125 0 01-.26-1.431l1.296-2.247a1.125 1.125 0 011.37-.49l1.217.456c.355.134.751.072 1.075-.124.074-.043.147-.087.22-.127.332-.184.582-.496.645-.87L9.594 3.94z" />
              </svg>
            </a>
          </div>
        </aside>

        <div className="flex flex-col w-full justify-between bg-black bg-opacity-60 p-2 px-5 dark:bg-gray-900 space-y-4 h-screen">
          <div className="flex flex-col space-y-3 overflow-auto pb-12">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.isSender ? 'justify-end' : 'justify-start'}`}>
                <div className="flex items-start space-x-2">
                  {!message.isSender && <img src={message.avatar} alt={message.sender} className="w-10 h-10 rounded-full" />}
                  <div className={`max-w-xs rounded-xl p-3 text-sm ${message.isSender ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                    <span className="font-semibold">{message.sender}</span>
                    <p>{message.text}</p>
                  </div>
                  {message.isSender && <img src={message.avatar} alt={message.sender} className="w-10 h-10 rounded-full" />}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef}></div>
          </div>

          <div className="flex justify-between items-center mt-auto p-2">
            <input
              type="text"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              placeholder="Type a message..."
              className="border border-gray-300 rounded-lg p-2 flex-1 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
            <button
              onClick={handleSendMessage}
              className="ml-2 p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <StarsBackground />
      <ShootingStars />
    </div>
  );
}

export default Messages;
