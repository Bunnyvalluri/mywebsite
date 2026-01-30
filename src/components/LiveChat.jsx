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

    // About Rahul - Professional Intro
    if (lowerInput.includes('who') || lowerInput.includes('about')) {
      return "I'm Valluri Rahul, a Full-Stack Software Engineer tailored for enterprise solutions. I specialize in building high-performance, scalable web applications that drive business growth. My focus is on delivering clean code, exceptional user experiences, and robust security. 🚀";
    }

    // Skills & Tech Stack - Enterprise-Grade
    else if (lowerInput.includes('skill') || lowerInput.includes('tech')) {
      return "I bring a comprehensive modern tech stack to your projects:\n\n💻 Frontend Architecture: React.js, Next.js, Tailwind CSS (focused on Core Web Vitals)\n⚙️ Backend Systems: Node.js, Express, Secure RESTful APIs\n☁️ Infrastructure: AWS, Vercel, Docker, CI/CD Pipelines\n🗄️ Data: MongoDB, PostgreSQL (Schema Design & Optimization)\n\nI ensure your tech stack is future-proof and scalable.";
    }

    // Projects - Case Studies Focus
    else if (lowerInput.includes('project')) {
      return "I have delivered several impactful projects:\n\n1. 🛡️ Cloud Guard: An enterprise-grade cloud security platform ensuring 99.9% uptime.\n2. 🦋 3D Visualisations: High-performance interactive 3D web experiences running at 60fps.\n3. 🌱 Green Quest: A gamified engagement platform demonstrating complex state management.\n\nAll projects follow industry best practices for code quality and maintainability. You can view live demos in the Projects section!";
    }

    // Services - Value Proposition
    else if (lowerInput.includes('service') || lowerInput.includes('offer')) {
      return "I provide end-to-end software development services:\n\n🚀 Custom Web Application Development: From concept to launch.\n🎨 Enterprise UI/UX Implementation: Pixel-perfect, accessible designs.\n🔒 Secure Backend Architecture: Scalable APIs and database management.\n🔧 Performance Optimization: Speeding up existing applications for better conversion.\n\nI treat every project as a partnership to ensure your business goals are met.";
    }

    // Education - Foundation
    else if (lowerInput.includes('education') || lowerInput.includes('study') || lowerInput.includes('college')) {
      return "📚 Educational Background:\n\n🎓 B.Tech in Computer Science & Engineering\nNarsimha Reddy Engineering College\nexpected 2027\n\nMy academic foundation is strengthened by continuous professional development in modern software architecture and algorithms.";
    }

    // Experience - Professional Track Record
    else if (lowerInput.includes('experience') || lowerInput.includes('work')) {
      return "💼 Professional Experience:\n\n✅ 6+ Months of Hands-on Development: Delivered production-ready code.\n✅ Agile Methodology: Experienced in sprints, daily standups, and iterative delivery.\n✅ Quality Assurance: rigorous testing and code review processes.\n\nI bring a 'zero-bug' mindset to development, minimizing post-launch issues.";
    }

    // Contact - Call to Action
    else if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('reach')) {
      return "📧 Let's discuss your project:\n\nEmail: valluri.rahul@example.com\nLinkedIn: linkedin.com/in/valluri-rahul\n\nI typically respond within 24 hours. You can also use the contact form below for a direct inquiry!";
    }

    // Resume/CV
    else if (lowerInput.includes('resume') || lowerInput.includes('cv')) {
      return "📄 Professional CV:\n\nYou can download my detailed resume by clicking the 'Download CV' button in the Hero section. It outlines my complete technical proficiencies and project history in detail.";
    }

    // Certifications - Credibility
    else if (lowerInput.includes('certificate') || lowerInput.includes('certification')) {
      return "🏆 Detailed Certifications:\n\n• Advanced Web Development\n• Cloud Computing Fundamentals\n• Professional JavaScript & React Patterns\n\nI am constantly upskilling to ensure I use the latest industry standards in your projects.";
    }

    // Achievements
    else if (lowerInput.includes('achievement') || lowerInput.includes('accomplish')) {
      return "🏆 Key Achievements:\n\n01. Developed responsive web apps with enhanced UX\n02. Collaborated on cross-functional team projects\n03. Implemented RESTful APIs for system integration\n04. Conducted code reviews for quality assurance\n\nCheck the About section for more details!";
    }

    // Availability - Urgent/Biz Focus
    else if (lowerInput.includes('available') || lowerInput.includes('hire') || lowerInput.includes('job')) {
      return "✅ Open for Business:\n\nYes, I am currently available for freelance projects and full-time opportunities. I am ready to start immediately and can integrate seamlessly into your existing team or lead a new project from scratch. Let's schedule a call to discuss your needs!";
    }

    // Location
    else if (lowerInput.includes('location') || lowerInput.includes('where')) {
      return "📍 Location & Timezone:\n\nI am based in Hyderabad, India (IST), but I am experienced in working remotely with clients across different time zones. I ensure overlap hours for effective communication and collaboration.";
    }

    // Default response
    else {
      return "Hello! 👋\n\nI can assist you with:\n• Technical capabilities & Tech Stack\n• Project Portfolio & Case Studies\n• Service Offerings & Rates\n• Availability & Hiring\n\nPlease select a topic from the menu above or ask me specific questions about your software needs.";
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
