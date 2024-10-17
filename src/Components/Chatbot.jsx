import { useState } from 'react';
import styled from 'styled-components';

import ChatBot_Icon from '../assets/chatbot_icon.png';
import BotIcon from '../assets/bot_icon.png';
import UserIcon from '../assets/user_icon.png';
import ChatBubbleSharpIcon from '@mui/icons-material/ChatBubbleSharp';
import RemoveIcon from '@mui/icons-material/Remove';

const ChatContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  height: 400px; 
  max-height: 600px; 
  background: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  flex-direction: column;
  padding: 10px;
  z-index: 1000;
  transition: opacity 0.3s ease-in-out;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #3a3a3a;
  color: white;
  border-radius: 10px 10px 0 0;
  position: relative;
`;

const ChatIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const ChatTitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ChatTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
  font-family: 'Roboto Mono', monospace;
`;

const ChatDescription = styled.div`
  font-size: 12px;
  color: #f0f0f0;
  font-family: 'Roboto Mono', monospace;
`;

const CloseIconButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: #969696;
  }
`;

const MessageList = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 10px;

  ::-webkit-scrollbar {
    display: none; 
  }
  scrollbar-width: none; 
  background-color: white; 
`;

const MessageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 5px 0;
  justify-content: ${({ sender }) => (sender === 'user' ? 'flex-end' : 'flex-start')};
  gap: 5px; 
`;

const Message = styled.div`
  margin: ${({ sender }) => (sender === 'user' ? '5px 0 5px 15px' : '5px 15px 5px 0')};
  padding: 8px;
  border-radius: 5px;
  background-color: ${({ sender }) => (sender === 'user' ? '#949494' : '#313131')};
  max-width: 70%;
  width: auto;
  word-wrap: break-word;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
`;

const BotIconStyled = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 5px;
`;

const UserIconStyled = styled.img`
  width: 30px;
  height: 30px; 
  border-radius: 50%;
  margin-right: 5px; 
`;

const ChatInputContainer = styled.div`
  display: flex;
`;

const ChatInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;

  &:focus {
    outline: none;
  }
`;

const ChatButton = styled.button`
  margin-left: 10px;
  padding: 10px;
  background-color: #3a3a3a;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #4e4e4e;
  }
`;

const ToggleButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #3a3a3a;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;

  &:hover {
    background-color: #4e4e4e;
  }
`;

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false); 

  const toggleChatbot = () => {
    if (isVisible) {
      setMessages([]); 
    } else {
      const welcomeMessage = {
        text: "Welcome! I'm Mars, Afsal's personal chatbot. What more do you want to know?",
        sender: 'bot',
      };
      setMessages([welcomeMessage]); 
    }
    setIsVisible((prev) => !prev);
  };

  const handleSendMessage = async () => {
    if (!input) return;
    const userMessage = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    const predefinedResponses = {
        "Hey":"Hello!, how are you my friend",
        "Hai":"Hey!, how are you my friend",
        "Hello":"Hai!, how are you my friend",
        "Halo":"Hey!, how are you my friend",
        "Greetings":"Greetings!, how are you my friend",
        "Tell me about yourself":"Hi! I am Afsal, a web developer with a passion for building web applications using React.js and Node.js. Feel free to ask me about my projects!",
        "Tell me about you":"Hi! I am Afsal, a web developer with a passion for building web applications using React.js and Node.js. Feel free to ask me about my projects!",
        "Can you introduce yourself":"Hi! I am Afsal, a web developer with a passion for building web applications using React.js and Node.js. Feel free to ask me about my projects!",
        "What is your educational background": "I have a degree in Computer Science from Sarabhai Institute of Science and Technology, Vellanad.",
        "Your educational background": "I have a degree in Computer Science from Sarabhai Institute of Science and Technology, Vellanad.",
        "Education": "I have a degree in Computer Science from Sarabhai Institute of Science and Technology, Vellanad.",
        "Where you studied": "I have a degree in Computer Science from Sarabhai Institute of Science and Technology, Vellanad.",
        "What work experience do you have": "I have worked on several web development projects and currently working for a Start-Up company.",
        "What is your experience": "I have worked on several web development projects and currently working for a Start-Up company.",
        "Your experience": "I have worked on several web development projects and currently working for a Start-Up company.",
        "What are your hobbies": "I enjoy coding, watching movies,tv shows, and travel.",
        "Your hobbies": "I enjoy coding, watching movies,tv shows, and travel.",
        "Hobbies": "I enjoy coding, watching movies,tv shows, and travel.",
        "What are your career ambitions": "I aim to land on good position at any of the FAANG.",
        "Your career ambitions": "I aim to land on good position at any of the FAANG.",
        "Ambitions": "I aim to land on good position at any of the FAANG.",
        "Can you tell me about your projects": "I have developed a E-commerce website and a streaming platform using MERN stack and several other projects.",
        "What are your projects": "I have developed a E-commerce website and a streaming platform using MERN stack and several other projects.",
        "Your projects": "I have developed a E-commerce website and a streaming platform using MERN stack and several other projects.",
        "Projects": "I have developed a E-commerce website and a streaming platform using MERN stack and several other projects.",
        "Contact": "Mobile:+91 12234567890, E-mail:myemail@gmail.com.",
        "Contact informations": "Mobile:+91 12234567890, E-mail:myemail@gmail.com.",
        "How to contact you": "Mobile:+91 12234567890, E-mail:myemail@gmail.com.",
      };

      const responseText = predefinedResponses[input] || "I'm sorry, I didn't understand that.";
    
      
      setTimeout(() => {
        const botMessage = {
          text: responseText,
          sender: 'bot',
        };
        setMessages((prev) => [...prev, botMessage]);
        setLoading(false);
      }, 1000);
  };

  return (
    <>
      <ToggleButton onClick={toggleChatbot}>
        {isVisible ? <RemoveIcon /> : <ChatBubbleSharpIcon />}
      </ToggleButton>
      <ChatContainer isVisible={isVisible}>
        
        {/* Chatbot Header */}
        <ChatHeader>
          <ChatTitleContainer>
            <ChatIcon src={ChatBot_Icon} alt="Chatbot Icon" />
            <div>
              <ChatTitle>Mars</ChatTitle>
              <ChatDescription>Personal chat bot of Afsal</ChatDescription>
            </div>
          </ChatTitleContainer>
          <CloseIconButton onClick={toggleChatbot}>✖</CloseIconButton>
        </ChatHeader>

        {/* Chat Messages */}
        <MessageList>
          {messages.map((msg, index) => (
            <MessageContainer key={index} sender={msg.sender}>
              {msg.sender === 'bot' && (
                <BotIconStyled src={BotIcon} alt="Bot Icon" />
              )}
              
              <Message sender={msg.sender}>{msg.text}</Message>
              {msg.sender === 'user' && (
                <UserIconStyled src={UserIcon} alt="User Icon" />
              )}
            </MessageContainer>
          ))}
          {loading && (
            <MessageContainer sender="bot">
              <BotIconStyled src={BotIcon} alt="Bot Icon" />
              <Message sender="bot">typing...</Message> 
            </MessageContainer>
          )}
        </MessageList>

        {/* Chat Input */}
        <ChatInputContainer>
          <ChatInput
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything"
          />
          <ChatButton onClick={handleSendMessage}>Send</ChatButton>
        </ChatInputContainer>
      </ChatContainer>
    </>
  );
};

export default Chatbot;
