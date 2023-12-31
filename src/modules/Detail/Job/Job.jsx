import React from "react";
import JobStyles from "./Job.module.scss";
import { AiFillStar, AiOutlineArrowDown } from "react-icons/ai";

export default function Job({ job }) {
  console.log("Job", job);
  return (
    <div className={`${JobStyles.job}`}>
      {job.map((jobDetail) => {
        return (
          <div>
            {jobDetail.tenLoaiCongViec} &#62; {jobDetail.tenNhomChiTietLoai}{" "}
            &#62; {jobDetail.tenChiTietLoai}
          </div>
        );
      })}
      <div className={`${JobStyles.job_container}`}>
        {job.map((jobDetail) => {
          return (
            <div className={`${JobStyles.job_content}`} key={jobDetail.id}>
              <h3>{jobDetail.congViec.tenCongViec}</h3>
              <div className={`${JobStyles.seller_header}`}>
                <img src={jobDetail.avatar} alt="" height={40} width={40} />
                <p>{jobDetail.tenNguoiTao}</p>
                <p className="text-warning d-flex align-items-center">
                  {jobDetail.congViec.saoCongViec} <AiFillStar />
                </p>
                <p className="text-secondary">({jobDetail.congViec.danhGia})</p>
              </div>
              <div className={`${JobStyles.job_image}`}>
                <img src={jobDetail.congViec.hinhAnh} alt="" />
              </div>
              <div className={`${JobStyles.job_info}`}>
                <h2>About This Grid</h2>
                <p>{jobDetail.congViec.moTa}</p>
              </div>
              <div className={`${JobStyles.seller_info}`}>
                <h2>About the seller</h2>
                <div className={`${JobStyles.seller_info_container}`}>
                  <img src={jobDetail.avatar} alt="" className="me-3" />
                  <div className={`${JobStyles.seller_info_container_text}`}>
                    <p>{jobDetail.tenNguoiTao}</p>
                    <p>Director</p>
                    <p className="text-warning">
                      {jobDetail.congViec.saoCongViec} <AiFillStar />
                    </p>
                    <button type="button" class="btn btn-outline-success">
                      Contact Me
                    </button>
                  </div>
                </div>
              </div>
              <div className={`${JobStyles.job_FAQ}`}>
                <ul>
                  <li>
                    <a href="">Why SevenArc?</a>
                    <AiOutlineArrowDown size={30} />
                  </li>
                  <li>
                    <a href="">What if i dont like the designs?</a>
                    <AiOutlineArrowDown size={30} />
                  </li>
                  <li>
                    <a href="">What is included in Social Media Pack?</a>
                    <AiOutlineArrowDown size={30} />
                  </li>
                  <li>
                    <a href="">What is vector file and do I need it ?</a>
                    <AiOutlineArrowDown size={30} />
                  </li>
                  <li>
                    <a href="">Do I get all the designs with source files?</a>
                    <AiOutlineArrowDown size={30} />
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
