import React from "react";
import CreateTask from "../features/todo/CreateTask";
import TaskList from "../features/todo/TaskList";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

function Todo() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: "14px",
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            color: "rgb(112, 76, 182)",
            textTransform: "uppercase",
            mb: "15px",
          }}
        >
          TODO LIST
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            pt: "8px",
            pl: "8px",
            pr: "8px",
            pb: "0px",
            bgcolor: "rgb(112, 76, 182)",
            width: "600px",
            borderRadius: "8px",
          }}
        >
          <CreateTask />
          <TaskList />
        </Box>
      </Box>
    </Box>
  );
}

export default Todo;
