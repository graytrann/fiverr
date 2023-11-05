import fetcher from "./fetcher";

// ĐĂNG KÝ
export const signup = async (payload) => {
  try {
    const response = await fetcher.post("/auth/signup", payload);
    return response.data?.content;
  } catch (error) {
    throw error.response.data?.content;
  }
};

// ĐĂNG NHẬP
export const signin = async (payload) => {
  try {
    const response = await fetcher.post("/auth/signin", payload);
    return response.data?.content;
  } catch (error) {
    throw error.response.data?.content;
  }
};

// COMMENT
export const comment = async (payload) => {
  try {
    const response = await fetcher.post("/binh-luan", payload);
    return response.data?.content;
  } catch (error) {
    throw error.response.data?.content;
  }
};
