import { useParams } from "react-router-dom";
import usePostService, { useGetPostById } from "../queryHooks/PostHook";
import { useQueryClient } from "@tanstack/react-query";

const CardTemplate = () => {
  const { id } = useParams();
  console.log(id);
  const queryClient = useQueryClient();
  const stupidData: any = queryClient.getQueryData(["posts"]);
  console.log(stupidData, "hehe");
  const { posts } = usePostService();
  const myItem = posts?.data.find((item: any) => {
    return item.id === Number(id);
  });
  const { post } = useGetPostById(id ? id : 1);
  console.log("post", post);
  // "https://picsum.photos/200/300"
  // className="h-[200px] w-[767px]"
  return (
    <div
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
      }}
    >
      <div>
        <img src="https://picsum.photos/200/300" className="h-[200px] w-[767px]" alt="" />
        <div className="p-3">
          <span className="p-3" style={{ fontSize: "1.5rem" }}>
            {myItem ? myItem.title : post?.data.title}
          </span>
          <p className="p-3">{myItem ? myItem.body : post?.data.body}</p>
        </div>
      </div>
    </div>
  );
};

export default CardTemplate;
