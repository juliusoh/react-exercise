import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import usePostService from "../queryHooks/PostHook";
import { useNavigate } from "react-router-dom";

const ListItems = () => {
  const { posts } = usePostService();
  console.log(posts);
  const navigate = useNavigate();

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.white", paddingTop: "25px" }}>
      <List>
        {posts &&
          posts.data.map((post: any, index: number) => (
            <>
              <ListItem
                disablePadding
                key={index}
                onClick={(e: any) => {
                  navigate(`/${post.id}`);
                }}
              >
                <ListItemButton>
                  <ListItemText primary={post?.id} />
                  <ListItemText
                    secondary={post.title}
                    sx={{ paddingLeft: "10px", marginLeft: "10px" }}
                  />
                </ListItemButton>
              </ListItem>
              <Divider />
            </>
          ))}
      </List>
    </Box>
  );
};

export default ListItems;
