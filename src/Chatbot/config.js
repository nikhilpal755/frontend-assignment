import { createChatBotMessage } from 'react-chatbot-kit';
import GotItButton from './components/GotItButton';

const config = {
  initialMessages: [createChatBotMessage(`Hello, Welcome to Student info system!`, {
    widget: 'gotItButton',
  })],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  state:{
    check: null,
  },
  widgets: [
    {
      widgetName: "gotItButton",
      widgetFunc: (props) => <GotItButton {...props} />,
    },
  ],
};

export default config;