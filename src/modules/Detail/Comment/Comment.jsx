import React, { useEffect, useState } from "react";
import { getJobComment } from "../../../apis/jobs";
import CommentStyles from "./Comment.module.scss";

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
          return <p>{comment.noiDung}</p>;
        })}
      </div>
    </div>
  );
}
