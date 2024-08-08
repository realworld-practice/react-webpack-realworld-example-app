import { axiosInstance } from "./axios";

const postLogin = async ({ email, password }) => {
  const data = await axiosInstance.post("/users/login", {
    user: {
      email,
      password,
    },
  });

  return data;
};

export { postLogin };
