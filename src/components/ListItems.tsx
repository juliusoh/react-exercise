import Divider from "@mui/material/Divider";
import usePostService from "../queryHooks/PostHook";
import { useNavigate } from "react-router-dom";

const ListItems = () => {
  const { posts } = usePostService();
  console.log(posts);
  const navigate = useNavigate();

  return (
    <div className="list">
      <ul>
        {posts &&
          posts.data.map((post: any, index: number) => (
            <>
              <div
                key={index}
                onClick={(e: any) => {
                  navigate(`/${post.id}`);
                }}
              >
                <button className="listItem">
                  <p id="postId">{post?.id}</p>
                  <p id="postText">{post.title}</p>
                </button>
              </div>
              <Divider />
            </>
          ))}
      </ul>
    </div>
  );
};

export default ListItems;
