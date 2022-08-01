import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <CssBaseline>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              padding: "24px",
            }}
          >
            React Practice
          </Typography>
        </Toolbar>
      </CssBaseline>
    </AppBar>
  );
};

export default Navbar;
