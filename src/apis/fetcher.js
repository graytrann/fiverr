import axios from "axios";

const token = JSON.parse(localStorage.getItem("currentFiverrUser"));

// Setup axios instance - tạo ra cấu hình mặc định
const fetcher = axios.create({
  baseURL: "https://fiverrnew.cybersoft.edu.vn/api",
  headers: {
    tokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MiIsIkhldEhhblN0cmluZyI6IjI4LzAyLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwOTA3ODQwMDAwMCIsIm5iZiI6MTY4MTE0NjAwMCwiZXhwIjoxNzA5MjI2MDAwfQ.GboZ7OZlrOvJ_T6lEZ9PfGJD8vygDn30BxaLgB43WbM",
    token: token?.token,
  },
});

// THƯ VIỆN GỌI API

// Request interceptor
fetcher.interceptors.request.use((request) => {
  // kiểm tra xem user đã đăng nhập hay chưa để thêm token của user vào headers
  const user = JSON.parse(localStorage.getItem("currentFiverrUser"));

  if (user) {
    // update request
    request.headers.Authorization = `Bearer ${user.token}`;
  }

  // tiếp tục gửi request lên server típ
  return request;
});

// Response interceptor
fetcher.interceptors.response.use(
  // thành công thì đi vào đây , TA CÓ THỂ THAY ĐỔI RESPONSE TRƯỚC KHI TRẢ VỀ
  (response) => {
    return response;
  },
  // lỗi thì đi vào callback này
  (error) => {
    // Kiểm tra nếu lỗi là 401 => token không hợp lệ => đăng xuất
    if (error.response.status === 401) {
      localStorage.removeItem("currentFiverrUser");
      window.location.replace("/sign-in");
    }

    return Promise.reject(error);
  }
);

export default fetcher;
