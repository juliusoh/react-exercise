import * as React from "react";
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useParams } from "react-router-dom";
import useImageService from "../queryHooks/ImageHook";
import { useGetPostById } from "../queryHooks/PostHook";

const CardTemplate = () => {
  const { id } = useParams();
  console.log(id);
    
  const { post } = useGetPostById(id ? id : 1);
  console.log("post", post);
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className="h-[200px] w-[767px]"
          component="img"
          height="140px"
          image={"https://picsum.photos/200/300"}
          alt="green iguana"
        ></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post?.data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post?.data.body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardTemplate;
