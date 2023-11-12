import React from "react";
import { useQuery } from "@tanstack/react-query";
import { GetHiredJobs } from "../../../apis/user";
import HiredJobStyles from "./HiredJob.module.scss";

export default function HiredJob() {
  const { data: jobsHired = [], isLoading } = useQuery({
    queryKey: ["hiredJob"],
    queryFn: async () => await GetHiredJobs(),
  });

  console.log("Job đã thuê: ", jobsHired);

  return (
    <div className={`${HiredJobStyles.hired}`}>
      <div className={`${HiredJobStyles.hired_container}`}>
        <p>Công việc đã thuê</p>
        {jobsHired.map((job) => {
          return (
            <div className={`${HiredJobStyles.hired_container_item}`}>
              <div className={`${HiredJobStyles.hired_container_item_img}`}>
                <img src={job.congViec.hinhAnh} alt="" srcset="" />
              </div>
              <div
                className={`${HiredJobStyles.hired_container_item_content} ms-2`}
              >
                <p className="fw-bold">{job.congViec.tenCongViec}</p>
                <p className={`${HiredJobStyles.text_sub}`}>
                  {job.congViec.moTa}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
