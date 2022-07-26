import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <AppBar position="static">
      <CssBaseline>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Inflation work
          </Typography>
        </Toolbar>
      </CssBaseline>
    </AppBar>
  );
};

export default Navbar;
