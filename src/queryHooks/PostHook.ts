// @ts-nocheck
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const getQueryService = () => {
  return {
    getPosts: async () => {
      try {
        return await axios.get("https://jsonplaceholder.typicode.com/posts");
      } catch (error) {
        console.log(error);
      }
    },
    getPostById: async (id: any) => {
      try {
        return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      } catch (error) {
        console.log(error);
      }
    },
  };
};

export const useGetPostById = (id: any) => {
  const service = getQueryService();
  const queryClient = useQueryClient();
  const { data: post } = useQuery(["post", id], () => {
    return service.getPostById(id);
  });
  return {
    post,
  };
};

const usePostService = () => {
  const service = getQueryService();
  const { data: posts } = useQuery(["posts"], service.getPosts);

  return {
    posts,
  };
};

export default usePostService;
