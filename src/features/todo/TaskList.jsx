import React from "react";
import Task from "./Task";
import { List, Box, Skeleton, Modal, Typography } from "@mui/material";
import { useTasksQuery } from "./task.api";

function TaskList() {
  const { data, isLoading, isFetching, isError } = useTasksQuery();
  const tasks = data ? data.slice().sort((a, b) => a.done - b.done) : [];

  return (
    <List
      sx={{
        p: 0,
        width: "100%",
      }}
    >
      {isError && (
        <Modal open={true}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography>An error occurred</Typography>
          </Box>
        </Modal>
      )}
      {(isLoading || isFetching) && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Skeleton
            variant="rounded"
            width={"100%"}
            height={40}
            sx={{
              mb: "8px",
              bgcolor: "gray.900",
              borderRadius: "8px",
            }}
          />
        </Box>
      )}
      {!isLoading &&
        !isFetching &&
        !isError &&
        tasks.map((task) => <Task key={task.id} {...task} />)}
    </List>
  );
}

export default TaskList;
