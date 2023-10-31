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
      <div className={`${TypeListStyles.typelist_container} row`}>
        {jobType.map((type) => {
          return (
            <div className={`${TypeListStyles.item} col-3`} key={type.id}>
              {type.dsNhomChiTietLoai.map((nhomChiTiet) => (
                <div key={nhomChiTiet.id}>
                  <div className={`${TypeListStyles.img}`}>
                    <img src={nhomChiTiet.hinhAnh} alt="" />
                  </div>
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
