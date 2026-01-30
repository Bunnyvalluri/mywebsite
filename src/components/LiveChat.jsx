import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! 👋 I'm Rahul's AI assistant. How can I help you today?", sender: 'bot', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Comprehensive FAQ about the portfolio
  const faqs = [
    { q: "Who are you?", category: "About" },
    { q: "What skills do you have?", category: "Skills" },
    { q: "Show me your projects", category: "Projects" },
    { q: "What services do you offer?", category: "Services" },
    { q: "How can I contact you?", category: "Contact" },
    { q: "Tell me about your education", category: "Education" },
    { q: "Do you have work experience?", category: "Experience" },
    { q: "Are you available for hire?", category: "Availability" },
    { q: "Where are you located?", category: "Location" },
    { q: "What certifications do you have?", category: "Certifications" }
  ];

  const quickReplies = [
    "View Projects",
    "Download Resume",
    "Contact Info",
    "Tech Stack"
  ];

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

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

    // About Rahul
    if (lowerInput.includes('who') || lowerInput.includes('about')) {
      return "I'm Valluri Rahul, a Computer Science student and Full-Stack Developer from Hyderabad, India. I specialize in building responsive web applications using modern technologies like React, Node.js, and cloud platforms. I'm passionate about creating exceptional digital experiences! 🚀";
    }

    // Skills & Tech Stack
    else if (lowerInput.includes('skill') || lowerInput.includes('tech')) {
      return "My technical skills include:\n\n💻 Frontend: React, JavaScript, HTML5, CSS3, Bootstrap, jQuery\n⚙️ Backend: Node.js, Express.js\n🗄️ Database: MongoDB, MySQL\n☁️ Cloud: AWS\n🔧 Tools: Git, GitHub\n\nI have 90% proficiency in JavaScript, 85% in React, and 80% in Node.js!";
    }

    // Projects
    else if (lowerInput.includes('project')) {
      return "I've built several impressive projects:\n\n1. 🛡️ Cloud Guard - Cloud Security Posture Management Platform with 99.9% uptime\n2. 🦋 3D Butterfly Animation - Interactive CSS & JavaScript animation with 60fps performance\n3. 🌱 Green Quest - Environmental awareness platform with gamification\n\nScroll to the Projects section to see live demos and GitHub repos!";
    }

    // Services
    else if (lowerInput.includes('service') || lowerInput.includes('offer')) {
      return "I offer professional services in:\n\n🎨 Frontend Development - React, responsive design\n⚙️ Backend Development - Node.js, RESTful APIs\n🔒 Security Solutions - Cloud security, best practices\n🌐 Full-Stack Development - End-to-end solutions\n\nCheck the Services section for more details!";
    }

    // Education
    else if (lowerInput.includes('education') || lowerInput.includes('study') || lowerInput.includes('college')) {
      return "📚 Education:\n\n🎓 Bachelor of Technology in Computer Science\nNarsimha Reddy Engineering College, Hyderabad\nExpected: August 2027\n\nRelevant Coursework: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks";
    }

    // Experience
    else if (lowerInput.includes('experience') || lowerInput.includes('work')) {
      return "💼 Key Achievements:\n\n✅ Developed responsive web apps using React and Node.js\n✅ Collaborated with cross-functional teams\n✅ Implemented RESTful APIs for seamless integration\n✅ Conducted code reviews to ensure best practices\n\nI have 6+ months of hands-on development experience!";
    }

    // Contact
    else if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('reach')) {
      return "📧 You can reach me at:\n\nEmail: valluri.rahul@example.com\n💼 LinkedIn: linkedin.com/in/valluri-rahul\n🐙 GitHub: github.com/valluri-rahul\n\nOr use the contact form at the bottom of the page!";
    }

    // Resume/CV
    else if (lowerInput.includes('resume') || lowerInput.includes('cv')) {
      return "📄 You can download my resume by clicking the 'Download CV' button in the hero section at the top of the page! It includes my complete work history, skills, and achievements.";
    }

    // Certifications
    else if (lowerInput.includes('certificate') || lowerInput.includes('certification')) {
      return "🏆 I have certifications in:\n\n• Web Development\n• Cloud Computing\n• JavaScript & React\n• Database Management\n\nScroll to the Certifications section to see all my credentials!";
    }

    // Achievements
    else if (lowerInput.includes('achievement') || lowerInput.includes('accomplish')) {
      return "🏆 Key Achievements:\n\n01. Developed responsive web apps with enhanced UX\n02. Collaborated on cross-functional team projects\n03. Implemented RESTful APIs for system integration\n04. Conducted code reviews for quality assurance\n\nCheck the About section for more details!";
    }

    // Location
    else if (lowerInput.includes('location') || lowerInput.includes('where')) {
      return "📍 I'm based in Hyderabad, Telangana, India. I'm open to remote opportunities and relocation for the right role!";
    }

    // Availability
    else if (lowerInput.includes('available') || lowerInput.includes('hire') || lowerInput.includes('job')) {
      return "✅ Yes, I'm currently available for new opportunities! I'm looking for full-stack developer roles where I can contribute my skills in React, Node.js, and cloud technologies. Feel free to reach out via the contact form!";
    }

    // Default response
    else {
      return "Thanks for your message! 😊\n\nI can help you with:\n• My background and skills\n• Project details\n• Services I offer\n• Contact information\n• Education and experience\n\nFeel free to ask me anything or explore the portfolio!";
    }
  };

  const handleQuickReply = (reply) => {
    setInputValue(reply);
  };

  const handleFAQClick = (question) => {
    // Prevent scrolling by using preventDefault
    const newMessage = {
      text: question,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        text: getBotResponse(question),
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-4 left-4 right-4 md:right-auto md:left-8 md:bottom-8 z-[9997] md:w-96 h-[75vh] md:h-[600px] glass-strong rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-[--color-border-custom]"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">
                  R
                </div>
                <div>
                  <h3 className="text-white font-bold">Portfolio Assistant</h3>
                  <p className="text-white/80 text-xs">Online • Ask me anything!</p>
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

            {/* FAQ Section - Scrollable */}
            <div className="p-3 bg-[--color-surface] border-b border-[--color-border-custom] max-h-32 overflow-y-auto">
              <p className="text-xs font-semibold text-[--color-secondary] mb-2">💡 Quick Questions:</p>
              <div className="grid grid-cols-2 gap-2">
                {faqs.map((faq, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleFAQClick(faq.q);
                    }}
                    className="text-xs px-2 py-1.5 glass rounded-lg text-[--color-primary] hover:bg-[--color-accent]/10 hover:border-[--color-accent] border border-[--color-border-custom] transition-all text-left"
                  >
                    {faq.q}
                  </button>
                ))}
              </div>
            </div>

            {/* Messages - Scrollable */}
            <div
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-[--color-background-custom]"
              style={{ scrollBehavior: 'smooth' }}
            >
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
                    <div
                      className={`p-3 rounded-2xl ${message.sender === 'user'
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                        : 'glass border border-[--color-border-custom] text-[--color-primary]'
                        }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                    </div>
                    <p className="text-xs text-[--color-text-muted] mt-1 px-2">{message.time}</p>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            <div className="p-3 bg-[--color-surface] border-t border-[--color-border-custom]">
              <div className="flex gap-2 flex-wrap">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.preventDefault();
                      handleQuickReply(reply);
                    }}
                    className="text-xs px-3 py-1.5 glass rounded-full text-[--color-accent] hover:bg-[--color-accent]/10 transition-colors border border-[--color-border-custom]"
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
                  className="flex-1 px-4 py-2 glass rounded-xl text-[--color-primary] placeholder-[--color-text-muted] focus:outline-none focus:ring-2 focus:ring-[--color-accent] text-sm border border-[--color-border-custom]"
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
      </AnimatePresence>
    </>
  );
};

export default LiveChat;
