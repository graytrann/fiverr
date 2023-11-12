import React from "react";
import PurchaseStyles from "./Purchase.module.scss";
import { hireJob } from "../../../apis/jobs";
import { useUserContext } from "../../../context/UserContext";
import { useMutation } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Purchase({ job, jobId }) {
  const { currentUser } = useUserContext();
  const navigate = useNavigate();
  const {
    mutate: handleHiring,
    isLoading,
    error,
  } = useMutation({
    mutationFn: (payload) => hireJob(payload),
    onSuccess: (data) => {},
  });

  const maCongViec = jobId;
  const maNguoiThue = currentUser?.user?.id;
  const currentDate = new Date();
  const ngayThue = currentDate.toLocaleDateString();
  const hoanThanh = false;

  const location = useLocation();
  const handleHiringJob = () => {
    if (!currentUser) {
      // User chưa đăng nhập, bạn có thể thực hiện việc chuyển hướng đến trang login
      const url = `/sign-in?redirectTo=${location.pathname}`;
      // user chưa đăng nhập => redirect về trang login
      navigate(url);
    }

    const JobHiringInfo = {
      maCongViec,
      maNguoiThue,
      ngayThue,
      hoanThanh,
    };
    Swal.fire({
      title: "Bạn có muốn đặt việc này ?",
      showCancelButton: true,
      confirmButtonText: "Có",
      denyButtonText: `Hủy`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Đã đặt!", "", "success");
        handleHiring(JobHiringInfo);
      }
    });
  };
  return (
    <div className={`${PurchaseStyles.purchase}`}>
      <div className={`${PurchaseStyles.purchase_container}`}>
        <div className={`${PurchaseStyles.purchase_item}`}>
          {job.map((job) => {
            return (
              <div key={job.id}>
                <p className="fw-bold">{job.congViec.giaTien}$</p>
                <p>
                  Save up to 10% with
                  <span className="text-success"> Subscribe to Save</span>
                  <p>
                    <span className="fw-bold">One Page Business website</span> I
                    will create full fledged ONE page responsive & mobile
                    friendly website with admin panel for you.
                  </p>
                  <pre className={`${PurchaseStyles.sub_text}`}>
                    {job.congViec.moTaNgan}
                  </pre>
                </p>

                <div className="text-center">
                  <button onClick={handleHiringJob} className="btn btn-success">
                    Hiring Job with only{" "}
                    <span className="fw-bold">{job.congViec.giaTien}$</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
