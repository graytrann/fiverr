import React from "react";
import TopInfoStyles from "./Topinfo.module.scss";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
export default function TopInfo({ userInfo }) {

  return (
    <div className={`${TopInfoStyles.topInfo}`}>
      <div className={`${TopInfoStyles.topInfo_container}`}>
        <div className={`${TopInfoStyles.topInfo_container_image}`}>
          <img
            src="https://nld.mediacdn.vn/thumb_w/600/291774122806476800/2023/1/10/7-neymar-1673363937798445491799.jpg"
            alt=""
          />
          <p className="fw-bold mt-2">{userInfo.name}</p>
          <hr />
        </div>

        <div className={`${TopInfoStyles.topInfo_subInfo}`}>
          <div className={`${TopInfoStyles.topInfo_subInfo_item}`}>
            <div
              className={`${TopInfoStyles.topInfo_subInfo_item_left} d-flex`}
            >
              <HiOutlineLocationMarker className="me-1" size={25} />
              <p>From</p>
            </div>
            <div
              className={`${TopInfoStyles.topInfo_subInfo_item_right} d-flex`}
            >
              <p className="fw-bold">VietNam</p>
            </div>
          </div>
          <div className={`${TopInfoStyles.topInfo_subInfo_item}`}>
            <div
              className={`${TopInfoStyles.topInfo_subInfo_item_left} d-flex`}
            >
              <AiOutlineUser className="me-1" size={25} />
              <p>Member since</p>
            </div>
            <div
              className={`${TopInfoStyles.topInfo_subInfo_item_right} d-flex`}
            >
              <p className="fw-bold">2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
