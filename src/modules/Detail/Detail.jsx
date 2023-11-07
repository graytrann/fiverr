import React, { useEffect, useState } from "react";
import DetailStyles from "./Detail.module.scss";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { getDetailJob } from "../../apis/jobs";
import Comment from "./Comment";
import { useQuery } from "@tanstack/react-query";
import Purchase from "./Purchase";

export default function Detail() {
  // từ thanh URL
  const { jobId } = useParams();
  console.log("Mã công việc từ thanh URL: ", jobId);

  // const [job, setJob] = useState([]);

  // hàm gọi lấy chi tiết của công việc
  // const getDetailsOfJob = async () => {
  //   try {
  //     const data = await getDetailJob(jobId); // Thay đổi giá trị tên công việc tùy ý
  //     setJob(data); // Lưu dữ liệu vào state
  //   } catch (error) {
  //     console.error("Lỗi khi lấy dữ liệu từ API:", error);
  //   }
  // };

  // Gọi hàm getJobsByName khi component được tạo
  // useEffect(() => {
  //   getDetailsOfJob();
  // }, [jobId]);

  const { data: job = [], isLoading } = useQuery({
    queryKey: ["jobDetail"],
    queryFn: () => getDetailJob(jobId),
  });



  return (
    <div className={`${DetailStyles.detail}`}>
      <div className={`${DetailStyles.detail_container}`}>
        <div className="row">
          <div className="col-8">
            <Job job={job} />
            <Comment jobId={jobId} />
          </div>
          <div className="col-4">
            <Purchase job={job} jobId={jobId}/>
          </div>
        </div>
      </div>
    </div>
  );
}
