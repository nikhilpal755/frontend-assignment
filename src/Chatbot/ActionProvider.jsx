import React from "react";
import { createClientMessage } from "react-chatbot-kit";
import SuccessComponent from "./components/SuccessComponent";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  const handleGotItButton = () => {
    const botMessage = createClientMessage("got it");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
    handleName();
  };
  const handleName = () => {
    const botMessage = createChatBotMessage("Enter Your Name", {
      delay: 1000,
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
      check: "name"
    }));
  };

  const handleAge = () => {
    const botMessage = createChatBotMessage("Enter Your Age", {
      delay: 1000,
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
      check :"age"
    }));
  };
  

  const enrolledSuccess = () => {
    let botMessage =createChatBotMessage(<SuccessComponent/>);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
    
    // setInterval(() => {
    //   if (num > 0) {
    //     setNum(num - 1)
    //   }
    //   return;
    // }, 1000);
    // setTimeout(() => {
    //   navigate("/exit");
    // }, 6000);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleGotItButton,
            handleName,
            handleAge,
            enrolledSuccess,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;