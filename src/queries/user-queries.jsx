import { useMutation, useQuery } from "@tanstack/react-query";
import { createUser, getUserList } from "../services/user-api";

// export const useUsersList = () => {
//   return
// };

export const useCreateMutation = () => {
  return useMutation({
    mutationKey: ["add-user"],
    mutationFn: createUser,
  });
};
