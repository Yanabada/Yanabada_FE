import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import deleteProduct from "../apis/deleteProduct";

export const useProducts = () => {
  return useMutation({
    mutationFn: (productId: number) => deleteProduct(productId),
    onSuccess: (data: number) => {
      console.log(data);
      toast.success("게시글이 삭제되었습니다.");
    },
    onError: (err) => {
      toast.error("게시글을 삭제할 수 없습니다.");
      console.log(err);
    }
  });
};

export default useProducts;
