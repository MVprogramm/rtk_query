import React, { useState } from "react";
import { useAddTaskMutation } from "./task.api";
import { Button, Box, InputBase } from "@mui/material";

function CreateTask() {
  const [task, setTask] = useState({
    text: "",
    done: false,
  });
  const [addTask] = useAddTaskMutation();

  const handleChange = (event) => {
    setTask({
      ...task,
      text: event.target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    await addTask(task);

    setTask({
      text: "",
      done: false,
    });
  };

  return (
    <Box
      maxWidth="sm"
      sx={{
        display: "flex",
        p: "0px",
        width: "100%",
        mb: "8px",
      }}
    >
      <InputBase
        id="outlined-basic"
        fullWidth
        label=""
        variant="outlined"
        sx={{
          height: "32px",
          bgcolor: "#ffffff",
          p: "0px",
        }}
        value={task.text}
        onChange={handleChange}
      />
      <Button
        sx={{
          typography: "body1",
          height: "32px",
          bgcolor: "white",
          borderRadius: 0,
          opacity: 0.85,
          ml: "16px",
          pl: 1.1,
          pr: 1.1,
          textTransform: "none",
          color: "#000000",
          fontSize: 16,
          "&:hover": {
            bgcolor: "#efefef",
          },
        }}
        onClick={onSubmit}
      >
        Create
      </Button>
    </Box>
  );
}

export default CreateTask;
