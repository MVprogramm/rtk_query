import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "rgb(112, 76, 182)",
        }}
      >
        <Toolbar
          variant="dense"
          sx={{
            display: "flex",
            gap: 5,
          }}
        >
          <Link to="/">
            <IconButton edge="start" aria-label="menu" sx={{ color: "white" }}>
              <MenuIcon />
            </IconButton>
          </Link>
          <Link to="/counter" style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              color="white"
              component="div"
              sx={{
                textTransform: "uppercase",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Counter
            </Typography>
          </Link>
          <Link to="/todo" style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              color="white"
              component="div"
              sx={{
                textTransform: "uppercase",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Todo
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
