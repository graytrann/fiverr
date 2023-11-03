import React, { useEffect, useState } from "react";
import { getJobComment } from "../../../apis/jobs";
import CommentStyles from "./Comment.module.scss";
import { AiFillStar } from "react-icons/ai";
import dayjs from "dayjs";

export default function Comment({ jobId }) {
  console.log("Comment của ID :", jobId);

  const [comments, setComments] = useState([]);

  // hàm gọi lấy chi tiết của công việc
  const getComments = async () => {
    try {
      const data = await getJobComment(jobId); // Thay đổi giá trị tên công việc tùy ý
      setComments(data); // Lưu dữ liệu vào state
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu từ API:", error);
    }
  };

  useEffect(() => {
    getComments();
  }, [jobId]);

  console.log(comments);
  return (
    <div className={`${CommentStyles.comment}`}>
      <div className={`${CommentStyles.comment_container}`}>
        {comments.map((comment) => {
          return (
            <div className={`${CommentStyles.comment_container_item}`}>
              <div className={`${CommentStyles.comment_container_item_user}`}>
                <img src={comment.avatar} alt="" srcset="" />
                <p className="fw-bold ms-2 me-2">{comment.tenNguoiBinhLuan}</p>
                <p className="text-warning">
                  {comment.saoBinhLuan}
                  <AiFillStar />
                </p>
              </div>
              <div className={`${CommentStyles.comment_container_item_text}`}>
                <p>{comment.noiDung}</p>
              </div>
              <div className={`${CommentStyles.comment_container_item_time}`}>
                <p>{dayjs(comments.ngayBinhLuan).format("DD-MM-YYYY")}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
