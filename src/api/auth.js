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

const postRegister = async ({ username, email, password }) => {
  const data = await axiosInstance.post("/users", {
    user: {
      username,
      email,
      password,
    },
  });

  return data;
};

export { postLogin, postRegister };
