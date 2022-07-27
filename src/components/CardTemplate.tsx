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
    <div className="card">
      <div>
        <img src="https://picsum.photos/200/300" alt="" />
        <div className="cardContent">
          <span>
            {myItem ? myItem.title : post?.data.title}
          </span>
          <p>{myItem ? myItem.body : post?.data.body}</p>
        </div>
      </div>
    </div>
  );
};

export default CardTemplate;
