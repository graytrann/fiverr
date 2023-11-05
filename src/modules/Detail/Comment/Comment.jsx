import React, { useEffect, useState } from "react";
import { getJobComment } from "../../../apis/jobs";
import CommentStyles from "./Comment.module.scss";
import { AiFillStar } from "react-icons/ai";
import dayjs from "dayjs";
import { comment } from "../../../apis/user";
import { useUserContext } from "../../../context/UserContext";

export default function Comment({ jobId }) {
  console.log("Comment của ID :", jobId);
  const { currentUser } = useUserContext();

  const [comments, setComments] = useState([]);

  const maCongViec = jobId;
  const maNguoiBinhLuan = currentUser.user.id;
  const currentDate = new Date();
  const ngayBinhLuan = currentDate.toLocaleDateString();
  const [noiDung, setNoiDung] = useState("string");
  const saoBinhLuan = 10;

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

  const handleSubmit = () => {
    const commentData = {
      maCongViec,
      maNguoiBinhLuan,
      ngayBinhLuan,
      noiDung,
      saoBinhLuan,
    };

    comment(commentData);
  };
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
        <input
          type="text"
          value={noiDung}
          onChange={(e) => setNoiDung(e.target.value)}
        />
        <button onClick={handleSubmit}>SUBMIT</button>
       
      </div>
    </div>
  );
}
