import React, { useEffect, useState } from "react";
import DetailStyles from "./Detail.module.scss";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { getDetailJob } from "../../apis/jobs";

export default function Detail() {
  // từ thanh URL
  const { jobId } = useParams();
  console.log("Mã công việc từ thanh URL: ", jobId);

  const [job, setJob] = useState([]);

  // hàm gọi lấy chi tiết của công việc
  const getDetailsOfJob = async () => {
    try {
      const data = await getDetailJob(jobId); // Thay đổi giá trị tên công việc tùy ý
      setJob(data); // Lưu dữ liệu vào state
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu từ API:", error);
    }
  };

  // Gọi hàm getJobsByName khi component được tạo
  useEffect(() => {
    getDetailsOfJob();
  }, [jobId]);

  return (
    <div className={`${DetailStyles.detail}`}>
      <div className={`${DetailStyles.detail_container} row`}>
        <div className="col-9">
          <Job job={job} />
        </div>
      </div>
    </div>
  );
}
