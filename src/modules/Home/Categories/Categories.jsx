import React from "react";
import CategoriesStyles from "./Category.module.scss";

export default function Categories() {
  return (
    <div className={`${CategoriesStyles.category}`}>
      <div className={`${CategoriesStyles.category_container}`}>
        <div className={`${CategoriesStyles.category_text}`}>
          <h2>You need it, we've got it</h2>
        </div>
        <div className={`${CategoriesStyles.category_list}`}>
          <ul>
            <li>
              <a href="#">
                <img
                  src="./images/graphics-design.91dfe44.svg"
                  alt=""
                  srcset=""
                />
                Graphics & Design
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="./images//online-marketing.a3e9794.svg"
                  alt=""
                  srcset=""
                />
                Digital Marketing
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="./images/writing-translation.a787f2f.svg"
                  alt=""
                  srcset=""
                />
                Writing & Translation
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="./images/video-animation.1356999.svg"
                  alt=""
                  srcset=""
                />
                Video & Animation
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./images/music-audio.ede4c90.svg" alt="" srcset="" />
                Music & Audio
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./images/photography.0cf5a3f.svg" alt="" srcset="" />
                Photography
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./images/programming.6ee5a90.svg" alt="" srcset="" />
                Programming & Tech
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./images/business.fabc3a7.svg" alt="" srcset="" />
                Business
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./images/lifestyle.112b348.svg" alt="" srcset="" />
                Lifestyle
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./images/data.855fe95.svg" alt="" srcset="" />
                Data
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
