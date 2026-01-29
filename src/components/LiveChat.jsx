import { motion } from 'framer-motion';
import { FaComments, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { useState } from 'react';



const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! 👋 I'm Rahul's AI assistant. How can I help you today?", sender: 'bot', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickReplies = [
    "View Projects",
    "Download Resume",
    "Contact Info",
    "Tech Stack"
  ];

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      text: inputValue,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        text: getBotResponse(inputValue),
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (input) => {
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes('project')) {
      return "Check out my featured projects section! I've built Cloud Guard, 3D Butterfly Animation, and Green Quest. 🚀";
    } else if (lowerInput.includes('resume') || lowerInput.includes('cv')) {
      return "You can download my resume by clicking the 'Download CV' button in the hero section! 📄";
    } else if (lowerInput.includes('contact')) {
      return "You can reach me at valluri.rahul@example.com or use the contact form below! 📧";
    } else if (lowerInput.includes('tech') || lowerInput.includes('skill')) {
      return "I specialize in React, Node.js, MongoDB, and modern web technologies. Check out the Services section for more details! 💻";
    } else {
      return "Thanks for your message! Feel free to explore my portfolio or use the contact form to get in touch. 😊";
    }
  };

  const handleQuickReply = (reply) => {
    setInputValue(reply);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 md:bottom-8 md:left-8 z-[9997] w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full shadow-2xl flex items-center justify-center text-white hover:shadow-indigo-500/50 transition-shadow group"
          aria-label="Open chat"
        >
          <FaComments className="text-xl md:text-2xl group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
        </motion.button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-4 left-4 right-4 md:right-auto md:left-8 md:bottom-8 z-[9997] md:w-96 h-[70vh] md:h-[500px] glass-strong rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-[--color-border-custom]"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">
                R
              </div>
              <div>
                <h3 className="text-white font-bold">Chat Assistant</h3>
                <p className="text-white/80 text-xs">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
              aria-label="Close chat"
            >
              <FaTimes />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[--color-background-custom]">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
                  <div
                    className={`p-3 rounded-2xl ${message.sender === 'user'
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                      : 'glass border border-[--color-border-custom] text-[--color-primary]'
                      }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                  <p className="text-xs text-[--color-text-muted] mt-1 px-2">{message.time}</p>
                </div>
              </motion.div>
            ))}

          </div>

          {/* Quick Replies */}
          <div className="p-3 bg-[--color-surface] border-t border-[--color-border-custom]">
            <div className="flex gap-2 flex-wrap mb-2">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickReply(reply)}
                  className="text-xs px-3 py-1.5 glass rounded-full text-[--color-accent] hover:bg-[--color-accent]/10 transition-colors"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 bg-[--color-surface] border-t border-[--color-border-custom]">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 glass rounded-xl text-[--color-primary] placeholder-[--color-text-muted] focus:outline-none focus:ring-2 focus:ring-[--color-accent] text-sm"
              />
              <button
                onClick={handleSend}
                className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-shadow"
                aria-label="Send message"
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default LiveChat;
