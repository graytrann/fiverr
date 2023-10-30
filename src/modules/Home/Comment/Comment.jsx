import React, { useState } from "react";
import CommentStyles from "./Comment.module.scss";
import Slider from "react-slick";
import { AiFillPlayCircle } from "react-icons/ai";
import CommentVideo from "./CommentVideo";

export default function Comment() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [modalShow, setModalShow] = React.useState(false);
  const [videoSrc, setVideoSrc] = useState(""); // State để lưu trữ src video

  const handlePlayVideo = (src) => {
    setVideoSrc(src); // Cập nhật src video khi bấm nút play
    setModalShow(true); // Hiển thị modal
  };
  return (
    <div className={`${CommentStyles.comment}`}>
      <div className={`${CommentStyles.comment_container}`}>
        <div>
          <Slider {...settings}>
            {/* phần tử 1  */}
            <div
              className={`${CommentStyles.comment_cover} row d-flex align-items-center`}
            >
              <div
                className={`${CommentStyles.comment_video}  col-md-5 col-12`}
              >
                <img
                  src="./images/testimonial-video-still-rooted.webp"
                  alt=""
                  srcset=""
                />
                <button
                  onClick={() =>
                    handlePlayVideo(
                      "https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/yja2ld5fnolhsixj3xxw"
                    )
                  } // Truyền src video vào hàm handlePlayVideo
                  className={`${CommentStyles.video_button}`}
                >
                  <AiFillPlayCircle size={70} color="white" />
                </button>
                <CommentVideo
                  show={modalShow}
                  onHide={() => {
                    setModalShow(false);
                    setVideoSrc(""); // Reset src video khi đóng modal
                  }}
                  src={videoSrc} // Truyền src video xuống CommentVideo
                />
              </div>
              <div className={`${CommentStyles.comment_text} col-md-7 col-12`}>
                <h5>
                  Kay Kim, Co-Founder
                  <span className={`${CommentStyles.comment_text_logo}`}>
                    <img
                      src="./images//rooted-logo-x2.7da3bc9.png"
                      alt=""
                      srcset=""
                    />
                  </span>
                </h5>
                <blockquote className={`${CommentStyles.comment_text_quote}`}>
                  <i>
                    "It's extremely exciting that Fiverr has freelancers from
                    all over the world — it broadens the talent pool. One of the
                    best things about Fiverr is that while we're sleeping,
                    someone's working."
                  </i>
                </blockquote>
              </div>
            </div>
            {/* phần tử 2  */}
            <div
              className={`${CommentStyles.comment_cover} row d-flex align-items-center`}
            >
              <div
                className={`${CommentStyles.comment_video}  col-md-5 col-12`}
              >
                <img
                  src="./images/testimonial-video-still-haerfest.webp"
                  alt=""
                  srcset=""
                />
                <button
                  onClick={() =>
                    handlePlayVideo(
                      "https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/bsncmkwya3nectkensun"
                    )
                  } // Truyền src video vào hàm handlePlayVideo
                  className={`${CommentStyles.video_button}`}
                >
                  <AiFillPlayCircle size={70} color="white" />
                </button>
                <CommentVideo
                  show={modalShow}
                  onHide={() => {
                    setModalShow(false);
                    setVideoSrc(""); // Reset src video khi đóng modal
                  }}
                  src={videoSrc} // Truyền src video xuống CommentVideo
                />
              </div>
              <div className={`${CommentStyles.comment_text} col-md-7 col-12`}>
                <h5>
                  Tim and Dan Joo, Co-Founders
                  <span className={`${CommentStyles.comment_text_logo}`}>
                    <img
                      src="./images/haerfest-logo-x2.934ab63.png"
                      alt=""
                      srcset=""
                    />
                  </span>
                </h5>
                <blockquote className={`${CommentStyles.comment_text_quote}`}>
                  <i>
                    "When you want to create a business bigger than yourself,
                    you need a lot of help. That's what Fiverr does."
                  </i>
                </blockquote>
              </div>
            </div>
            {/* phần tử 3 */}
            <div
              className={`${CommentStyles.comment_cover} row d-flex align-items-center`}
            >
              <div
                className={`${CommentStyles.comment_video}  col-md-5 col-12`}
              >
                <img
                  src="./images/testimonial-video-still-naadam.webp"
                  alt=""
                  srcset=""
                />

                <button
                  onClick={() =>
                    handlePlayVideo("./video/vmvv3czyk2ifedefkau7.mp4")
                  } // Truyền src video vào hàm handlePlayVideo
                  className={`${CommentStyles.video_button}`}
                >
                  <AiFillPlayCircle size={70} color="white" />
                </button>
                <CommentVideo
                  show={modalShow}
                  onHide={() => {
                    setModalShow(false);
                    setVideoSrc(""); // Reset src video khi đóng modal
                  }}
                  src={videoSrc} // Truyền src video xuống CommentVideo
                />
              </div>
              <div className={`${CommentStyles.comment_text} col-md-7 col-12`}>
                <h5>
                  Caitlin Tormey, Chief Commercial Officer
                  <span className={`${CommentStyles.comment_text_logo}`}>
                    <img
                      src="./images/naadam-logo-x2.a79031d.png"
                      alt=""
                      srcset=""
                    />
                  </span>
                </h5>
                <blockquote className={`${CommentStyles.comment_text_quote}`}>
                  <i>
                    "We've used Fiverr for Shopify web development, graphic
                    design, and backend web development. Working with Fiverr
                    makes my job a little easier every day."
                  </i>
                </blockquote>
              </div>
            </div>
            {/* <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div> */}
          </Slider>
        </div>
      </div>
    </div>
  );
}
