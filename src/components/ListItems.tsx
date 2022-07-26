import Divider from "@mui/material/Divider";
import usePostService from "../queryHooks/PostHook";
import { useNavigate } from "react-router-dom";

const ListItems = () => {
  const { posts } = usePostService();
  console.log(posts);
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 360,
        backgroundColor: "white",
        paddingTop: "25px",
        marginTop: "25px",
      }}
    >
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
                <button className="flex w-[100%] p-4 hover:bg-gray-100">
                  <p className="shrink-0 pr-6" style={{ color: "rgba(0, 0, 0, 0.54)" }}>
                    {post?.id}
                  </p>
                  <p className="grow text-left">{post.title}</p>
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
