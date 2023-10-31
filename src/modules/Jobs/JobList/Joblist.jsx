import React from "react";
import JobListStyles from "./JobList.module.scss";
import { AiFillStar } from "react-icons/ai";

export default function Joblist({ jobData }) {
  console.log("Các công việc: ", jobData);
  return (
    <div className={`${JobListStyles.joblist}`}>
      <div className={`${JobListStyles.joblist_container} row`}>
        {jobData.length > 0 ? (
          jobData.map((job) => {
            return (
              <div
                className={`${JobListStyles.joblist_container_item} col-lg-3 col-md-6 mt-3`}
              >
                {/* HÌNH ẢNH */}
                <div className={`${JobListStyles.joblist_container_item_img}`}>
                  <img src={job.congViec.hinhAnh} alt="" srcset="" />
                </div>
                {/* NGƯỜI DÙNG */}
                <div
                  className={`${JobListStyles.joblist_container_item_user} d-flex align-items-center`}
                >
                  {/* avatar */}
                  <div
                    className={`${JobListStyles.joblist_container_item_user_avatar} me-2`}
                  >
                    <img
                      src={job.avatar}
                      width={24}
                      height={24}
                      alt=""
                      srcset=""
                    />
                  </div>
                  {/* tên */}
                  <div
                    className={`${JobListStyles.joblist_container_item_user_name}`}
                  >
                    {job.tenNguoiTao}
                  </div>
                </div>
                {/* TÊN CÔNG VIỆC */}
                <div className={`${JobListStyles.joblist_container_item_job}`}>
                  {job.congViec.tenCongViec}
                </div>
                {/* SAO CÔNG VIỆC */}
                <div
                  className={`${JobListStyles.joblist_container_item_star} text-warning font-weight-bold d-flex align-items-center`}
                >
                  <AiFillStar className="me-1"></AiFillStar>
                  {job.congViec.saoCongViec}
                  <span className="text-black ms-1">
                    ({job.congViec.danhGia})
                  </span>
                </div>
              </div>
            );
          })
        ) : (
          <div className="no-jobs-found">
            Không có việc làm nào được tìm thấy.
          </div>
        )}
      </div>
    </div>
  );
}
