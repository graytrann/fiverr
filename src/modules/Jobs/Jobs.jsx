import React, { useEffect, useState } from "react";
import JobsStyles from "./Jobs.module.scss";
import Filter from "./Filter";
import { useParams } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
import { getJobsByName } from "../../apis/jobs";
import JobList from "./JobList";

export default function Jobs() {
  // từ thanh URL
  const { title } = useParams();
  console.log(title);

  //   const {
  //     data: jobs = [],
  //     isLoading,
  //     error,
  //   } = useQuery({
  //     queryKey: ["menuJob"],
  //     queryFn: getJobsByName("design"),
  //   });

  //   console.log("jobs từ Design", jobs);

  // dữ liệu của công việc
  const [jobData, setJobData] = useState([]);

  // loading 
  const [loading, setLoading] = useState(false);

  // Gọi hàm getJobsByName khi component được tạo
  useEffect(() => {
    getJobs();
  }, [title]);

  // Hàm để gọi API và lấy dữ liệu
  const getJobs = async () => {
    try {
      const data = await getJobsByName(title); // Thay đổi giá trị tên công việc tùy ý
      setJobData(data); // Lưu dữ liệu vào state
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu từ API:", error);
    }
  };

  return (
    <div className={`${JobsStyles.jobs} `}>
      <div className={`${JobsStyles.jobs_container} `}>
        <div className={`${JobsStyles.jobs_filter} `}>
          <Filter />
        </div>
        <div className="mt-5">
          <h1>
            Looking for <span className="text-success">{title}</span> jobs
          </h1>
          <JobList jobData={jobData} />
        </div>
      </div>
    </div>
  );
}
