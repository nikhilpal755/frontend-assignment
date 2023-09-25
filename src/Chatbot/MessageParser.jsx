import React from "react";
import { useDispatch } from "react-redux";
import { setStudentName,setStudentAge } from "../Redux/studentReducer";

const MessageParser = ({ children, actions }) => {
  const {check} = children.props.state
  const dispatch = useDispatch();
  const parse = (message) => {
    if (message.toLowerCase().includes('got it') && check == null) {
      actions.handleGotItButton()
    }
    if(check === 'name'){
      //store in the redux
      console.log("name: ", message)
      dispatch(setStudentName(message))
      actions.handleAge()
    }
    if(check === 'age' && Number(message) >= 18 && Number(message) <= 50){
      console.log("age: ", message)
      dispatch(setStudentAge(message))
      actions.enrolledSuccess()

    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse,
          actions
        });
      })}
    </div>
  );
};

export default MessageParser;