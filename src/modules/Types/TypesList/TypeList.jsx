import React from "react";
import TypeListStyles from "./TypeList.module.scss";
import { useNavigate } from "react-router-dom";

export default function TypeList({ jobType }) {
  const navigate = useNavigate();
  // hàm nhấn vào list xong navigate
  const handleMoveToJob = (id) => {
    navigate(`/jobs/${id}`);
  };
  return (
    <div className={`${TypeListStyles.typelist}`}>
      <h1>Explore Graphics & Design</h1>
      <div className={`${TypeListStyles.typelist_container} `}>
        {jobType.map((type) => {
          return (
            <div className={`${TypeListStyles.item} row`} key={type.id}>
              {type.dsNhomChiTietLoai.map((nhomChiTiet) => (
                <div className={`col-3`} key={nhomChiTiet.id}>
                  <div className={`${TypeListStyles.img}`}>
                    <img src={nhomChiTiet.hinhAnh} alt="" />
                  </div>
                  <p className="fw-bold mt-3">{nhomChiTiet.tenNhom}</p>
                  <div className={`${TypeListStyles.list}`}>
                    <ul>
                      {nhomChiTiet.dsChiTietLoai.map((chiTiet) => {
                        return (
                          <li onClick={() => handleMoveToJob(chiTiet.id)}>
                            {chiTiet.tenChiTiet}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
