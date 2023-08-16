import React, { useState } from "react";
import Paper from '@mui/material/Paper';
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import generateHTMLInit from "./GPT";

const ChatInput = ({setMessageHistory, setHtml}) => {
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendClick = async () => {
    if (message.trim() !== "") {
      setMessageHistory((messageHistory) => [...messageHistory, message]);
      setHtml("<h1>Loading...</h1>");
      const html = await generateHTMLInit(message);
      console.log(message);
      console.log(html);
      setHtml(html);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendClick();
    }
  };

  return (
    <Paper style={{ display: "flex", alignItems: "center", margin: '1rem', padding: '1rem' }}>
      <TextField
        fullWidth
        variant="outlined"
        label="Build your website!"
        value={message}
        onChange={handleInputChange}
        onKeyUp={handleKeyPress}
      />
      <IconButton color="primary" onClick={handleSendClick}>
        <SendIcon />
      </IconButton>
    </Paper>
  );
};

export default ChatInput;
