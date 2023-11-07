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
export async function getMenuByType(MaLoaiCongViec) {
  try {
    const response = await fetcher.get(
      `/cong-viec/lay-chi-tiet-loai-cong-viec/${MaLoaiCongViec}`
    );
    return response.data.content;
  } catch (error) {
    throw error.response.data.content;
  }
}

// LẤY CÔNG VIỆC THEO CHI TIẾT LOẠI
export async function getJobsByType(MaChiTietLoai) {
  try {
    const response = await fetcher.get(
      `/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${MaChiTietLoai}`
    );
    return response.data.content;
  } catch (error) {
    throw error.response.data.content;
  }
}

// LẤY CÔNG VIỆC CHI TIẾT 
export async function getDetailJob(MaCongViec) {
  try {
    const response = await fetcher.get(
      `/cong-viec/lay-cong-viec-chi-tiet/${MaCongViec}`
    );
    return response.data.content;
  } catch (error) {
    throw error.response.data.content;
  }
}

// LẤY BÌNH LUẬN THEO MÃ CÔNG VIỆC 
export async function getJobComment(MaCongViec) {
  try {
    const response = await fetcher.get(
      `/binh-luan/lay-binh-luan-theo-cong-viec/${MaCongViec}`
    );
    return response.data.content;
  } catch (error) {
    throw error.response.data.content;
  }
}

// THUÊ CÔNG VIỆC 
export const hireJob = async (payload) => {
  try {
    const response = await fetcher.post("/thue-cong-viec", payload);
    return response.data?.content;
  } catch (error) {
    throw error.response.data?.content;
  }
};