import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const MessageHistory = ({ messageHistory }) => {
  const recentCommands = messageHistory.slice(-5); // Get the 5 most recent commands

  return (
    <Paper
      elevation={3}
      style={{
        maxHeight: "20vh",
        overflowY: "auto",
        margin: "1rem",
        padding: "1rem",
      }}
    >
      <Typography variant="h5">Recent Commands</Typography>
      {recentCommands.map((command, index) => (
        <Typography key={index} variant="body1">
          {command}
        </Typography>
      ))}
    </Paper>
  );
};

export default MessageHistory;
