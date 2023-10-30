import fetcher from "./fetcher";

// LẤY MENU LOẠI CÔNG VIỆC
export async function getJobTypeMenu() {
  try {
    const response = await fetcher.get("/cong-viec/lay-menu-loai-cong-viec");
    return response.data.content;
  } catch (error) {
    throw error.response.data.content;
  }
}

// LẤY DANH SÁCH CÔNG VIỆC THEO TÊN
export async function getJobsByName(TenCongViec) {
  try {
    const response = await fetcher.get(
      `/cong-viec/lay-danh-sach-cong-viec-theo-ten/${TenCongViec}`
    );
    return response.data.content;
  } catch (error) {
    throw error.response.data.content;
  }
}

// LẤY CHI TIẾT LOẠI CÔNG VIỆC
export async function getJobsByType(MaLoaiCongViec) {
  try {
    const response = await fetcher.get(
      `/cong-viec/lay-chi-tiet-loai-cong-viec/${MaLoaiCongViec}`
    );
    return response.data.content;
  } catch (error) {
    throw error.response.data.content;
  }
}
