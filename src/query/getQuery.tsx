import { useQuery } from "@tanstack/react-query";
import request from "../axios";

const getQuery = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: () => request.get("/products").then((data) => data.data),
  });
  return { data, error, isLoading };
};

export default getQuery;
