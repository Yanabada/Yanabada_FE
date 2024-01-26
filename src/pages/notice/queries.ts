import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteAllNotifications, deleteNotifications, getNotifications } from "./api";
import toast from "react-hot-toast";

const useNotifications = (isLoggedIn?: boolean) => {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ["notifications"],
    queryFn: getNotifications,
    enabled: isLoggedIn
    // refetchInterval: 30000 // FIXME: polling 간격 조절
  });

  const deleteSelectedNotifications = useMutation({
    mutationFn: (ids: Array<{ id: number }>) => deleteNotifications(ids),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
    onError: () => {
      toast.error("알림 삭제를 실패했습니다.");
    }
  });

  const deleteAllNotification = useMutation({
    mutationFn: deleteAllNotifications,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
    onError: () => {
      toast.error("알림 삭제를 실패했습니다.");
    }
  });

  return { data, isLoading, error, deleteSelectedNotifications, deleteAllNotification };
};

export default useNotifications;
