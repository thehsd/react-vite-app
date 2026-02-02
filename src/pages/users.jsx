import { useEffect, useReducer, useState } from "react";
import { userReducer } from "../reducers/user-reducer";
import { useQuery } from "@tanstack/react-query";
import { getUserList } from "../services/user-api";
import { useForm } from "react-hook-form";
import { useCreateMutation } from "../queries/user-queries";
// import { useUsersList } from "../queries/user-queries";

// const userList = [
//   {
//     id: 1,
//     userName: "user 1",
//     email: "user1@gmail.com",
//   },
//   {
//     id: 2,
//     userName: "user 2",
//     email: "user2@gmail.com",
//   },
//   {
//     id: 3,
//     userName: "user 3",
//     email: "user3@gmail.com",
//   },
//   {
//     id: 4,
//     userName: "user 4",
//     email: "user4@gmail.com",
//   },
//   {
//     id: 5,
//     userName: "user 5",
//     email: "user5@gmail.com",
//   },
// ];
const UsersPage = () => {
  const [state, dispatch] = useReducer(userReducer, []);
  const [userId, setUserId] = useState(null);

  // Query
  const { data, isPending } = useQuery({
    queryKey: ["users-list"],
    queryFn: getUserList,
  });

  // Mutate
  const { mutate: createUserMutate, isPending: isCreateUserPending } =
    useCreateMutation();

  useEffect(() => {
    if (!isPending && data.length) {
      dispatch({ type: "SET_USERS", payload: data });
    }

    return () => {};
  }, [isPending]);

  const { register, handleSubmit, setValue, reset } = useForm();

  const onEdit = (user) => {
    setUserId(user?.id);
    setValue("username", user.username);
    setValue("email", user.email);
  };
  const OnSubmit = handleSubmit((data) => {
    if (userId) {
      dispatch({ type: "UPDATE_USER", payload: { ...data, id: userId } });

      setUserId(null);
    } else {
      createUserMutate(data, {
        onSuccess: () => {
          dispatch({ type: "ADD_USER", payload: data });
        },
      });
    }
    reset();
  });
  return (
    <div>
      <h1>Users Management</h1>
      <br />
      <form onSubmit={OnSubmit} className="bg-white p-2 m-2">
        <input
          {...register("username", { required: true })}
          type="text"
          placeholder="user name"
          className="w-full p-2 border rounded mb-2"
        />
        <br />
        <input
          {...register("email", { required: true })}
          type="text"
          placeholder="email"
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-green-400 text-white rounded-md p-2 m-2"
        >
          {userId ? "Edit" : "Add"}
        </button>
      </form>
      <br />
      {isPending && "loading ..."}
      <ul className="mt-2 space-y-2">
        {state.map((user) => {
          return (
            <li
              key={user.id}
              className="flex justify-between items-center bg-gray-50 p-2 rounded"
            >
              <div>
                <p className="font-semibold"> {user.username}</p>
                <p className="text-sm text-gray-700"> {user.email}</p>
              </div>
              <div>
                <button
                  onClick={() => onEdit(user)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() =>
                    dispatch({ type: "DELETE_USER", payload: { id: user.id } })
                  }
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UsersPage;
