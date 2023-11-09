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

// LẤY THÔNG TIN USER
export async function getUserInfo(id) {
  try {
    const response = await fetcher.get(`/users/${id}`);
    return response.data.content;
  } catch (error) {
    throw error.response.data.content;
  }
}

// CẬP NHẬT THÔNG TIN NGƯỜI DÙNG
export async function UpdateUserInfo(userId, payload) {
  try {
    const response = await fetcher.put(`/users/${userId}`, payload);
    return response.data.content;
  } catch (error) {
    throw error.response.data.content;
  }
}

// LẤY DANH SÁCH CÔNG VIỆC ĐÃ THUÊ

export async function GetHiredJobs() {
  try {
    const response = await fetcher.get("/thue-cong-viec/lay-danh-sach-da-thue");
    return response.data.content;
  } catch (error) {
    throw error.response.data.content;
  }
}
