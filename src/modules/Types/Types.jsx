import React, { useEffect, useState } from "react";
import TypesStyles from "./Types.module.scss";
import { useParams } from "react-router-dom";
import TypesBanner from "./TypesBanner";
import { getMenuByType } from "../../apis/jobs";
import TypeList from "./TypesList/TypeList";

export default function Types() {
  // từ thanh URL
  const { jobtype, id } = useParams();
  console.log("Loại công việc :", jobtype);
  console.log("ID công việc :", id);

  // dữ liệu của công việc
  const [jobTypeData, setJobType] = useState([]);

  // Gọi hàm getJobsByType khi component được tạo
  useEffect(() => {
    getJobs();
  }, [id]);

  // Hàm để gọi API và lấy dữ liệu
  const getJobs = async () => {
    try {
      const data = await getMenuByType(id); // Thay đổi giá trị tên công việc tùy ý
      setJobType(data); // Lưu dữ liệu vào state
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu từ API:", error);
    }
  };

  console.log(jobTypeData);
  return (
    <div className={`${TypesStyles.types}`}>
      <TypesBanner jobtype={jobtype} id={id} />
      <TypeList jobType={jobTypeData} />
    </div>
  );
}
