import React from 'react';
import Chatbot from 'react-chatbot-kit';
import config from '../Chatbot/config';
import MessageParser from '../Chatbot/MessageParser';
import ActionProvider from '../Chatbot/ActionProvider';
import { FadeIn } from 'react-anim-kit';
import { useNavigate } from 'react-router-dom';

function ChatBot() {
  const navigate = useNavigate();

  return (
    <div className='w-full bg-slae-400 h-[100vh] flex items-center justify-center ml-16'>
      <div className='flex h-[70%]'>
        <div className='mr-5'>
          <button
            className='border-2 border-purple-500 p-2 rounded-md bg-purple-500 text-white hover:bg-purple-400 hover:border-purple-400'
            onClick={() => navigate('/')}
          >
            Back
          </button>
        </div>
        <div
          style={{
            minWidth: '300px',
          }}
        >
          <div
            style={{
              minWidth: '300px',
            }}
          >
            <FadeIn right by={30}>
              <Chatbot
                placeholderText='Type your answer here'
                headerText='Student Enrollment'
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
              />
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;