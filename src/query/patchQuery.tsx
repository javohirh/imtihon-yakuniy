import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import request from "../axios";

const getQuery = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: () => request.get("/products").then((data) => data.data),
  });
  return { data, error, isLoading };
};
// const patchData = (id: string) => {
//   const mutation = useMutation({
//     mutationFn: request.patch(`/products/${id}`),
//     onSuccess: () => {
//       // Invalidate and refetch
//       QueryClient.invalidateQueries({ queryKey: ["todos"] });
//     },
//   });
//   return mutation;
// };
export default getQuery;
