import React, { useState } from "react";
import { useDeleteTaskMutation } from "./task.api";
import { useUpdateTaskMutation } from "./task.api";
import { Box, Typography, Button } from "@mui/material";
import "../../index.css";

function Task({ id, text, done }) {
  const [check, setCheck] = useState(done);

  const [deleteTask] = useDeleteTaskMutation();
  const [updateTask] = useUpdateTaskMutation();

  const handleCheck = (event) => {
    setCheck(event.target.checked);
    const task = {
      id,
      text,
      done: !check,
    };
    updateTask(task);
  };

  return (
    <div style={{ position: "relative" }}>
      <input
        checked={check}
        type="checkbox"
        style={{
          position: "absolute",
          top: "10px",
          left: "4px",
          cursor: "pointer",
          zIndex: 1,
        }}
        onChange={handleCheck}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "40px",
          bgcolor: "white",
          borderRadius: "8px",
          padding: "4px",
          marginBottom: "8px",
          typography: "body2",
        }}
        className="checkbox__box"
      >
        <Typography
          sx={{
            ml: "25px",
            letterSpacing: "0.001em",
          }}
          className="checkbox__typography"
        >
          {text}
        </Typography>
        <Button
          sx={{
            width: "24px",
            height: "24px",
            minWidth: "32px",
            borderRadius: "50%",
            border: "none",
            background: "transparent",
            "&:before": {
              content: '"+"',
            },
            ml: "auto",
            textDecoration: "none",
            p: 0,
            fontSize: "18px",
            lineHeight: "12px",
            textAlign: "center",
            transform: "rotate(45deg)",
            color: "black",
          }}
          onClick={() => deleteTask(id)}
        ></Button>
      </Box>
    </div>
  );
}

export default Task;
