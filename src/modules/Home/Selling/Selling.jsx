import React from "react";
import SellingStyles from "./Selling.module.scss";
import { AiOutlineCheckCircle, AiFillPlayCircle } from "react-icons/ai";

import SellingVideo from "./SellingVideo";
export default function Selling() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <div className={`${SellingStyles.selling}`}>
        <div
          className={`${SellingStyles.selling_container} row justify-content-center`}
        >
          <div className={`${SellingStyles.selling_text} col-md-6 col-12`}>
            <h2>The best part? Everything.</h2>
            <ul>
              <li>
                <h6>
                  <span className={`${SellingStyles.selling_icon}`}>
                    <AiOutlineCheckCircle />
                  </span>
                  Stick to your budget
                </h6>
                <p>
                  Find the right service for every price point. No hourly rates,
                  just project-based pricing.
                </p>
              </li>
              <li>
                <h6>
                  <span className={`${SellingStyles.selling_icon}`}>
                    <AiOutlineCheckCircle />
                  </span>
                  Get quality work done quickly
                </h6>
                <p>
                  Hand your project over to a talented freelancer in minutes,
                  get long-lasting results.
                </p>
              </li>
              <li>
                <h6>
                  <span className={`${SellingStyles.selling_icon}`}>
                    <AiOutlineCheckCircle />
                  </span>
                  Pay when you're happy
                </h6>
                <p>
                  Upfront quotes mean no surprises. Payments only get released
                  when you approve.
                </p>
              </li>
              <li>
                <h6>
                  <span className={`${SellingStyles.selling_icon}`}>
                    <AiOutlineCheckCircle />
                  </span>
                  Count on 24/7 support
                </h6>
                <p>
                  Our round-the-clock support team is available to help anytime,
                  anywhere.
                </p>
              </li>
            </ul>
          </div>
          <div className={`${SellingStyles.selling_video} col-md-6 col-12`}>
            <div className={`${SellingStyles.selling_video_modal}`}>
              <div className={`${SellingStyles.selling_picture_wrapper}`}>
                <img
                  src="./images/selling-proposition-still-1400-x1.webp"
                  alt=""
                  srcset=""
                />
                <button
                  onClick={() => setModalShow(true)}
                  className={`${SellingStyles.video_button}`}
                >
                  <AiFillPlayCircle size={70} color="white" />
                </button>
                <SellingVideo
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
