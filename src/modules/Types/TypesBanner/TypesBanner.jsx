import React from "react";
import TypesBannerStyles from "./TypesBanner.module.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
export default function TypesBanner({ jobtype, id }) {
  return (
    <div className={`${TypesBannerStyles.type}`}>
      <div className={`${TypesBannerStyles.banner}`}>
        <div className={`${TypesBannerStyles.banner_text}`}>
          <h1>{jobtype}</h1>
          <div className={`${TypesBannerStyles.banner_button} text-center`}>
            <button>How Fiver Works</button>
          </div>
        </div>
      </div>
      <div className={`${TypesBannerStyles.popular} mt-4`}>
        <h1>Popular in {jobtype}</h1>
        <div className={`${TypesBannerStyles.popular_container}`}>
          {/* ELEMENT 1 */}
          <div className={`${TypesBannerStyles.popular_container_item}`}>
            <div
              className={`${TypesBannerStyles.popular_container_item_inside}`}
            >
              <div
                className={`${TypesBannerStyles.popular_container_item_inside_logo}`}
              >
                <img
                  class="m-r-12"
                  src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png"
                  alt="Minimalist Logo Design"
                />
              </div>
              <div
                className={`${TypesBannerStyles.popular_container_item_inside_text} d-flex align-items-center`}
              >
                <p>Minimalist Logo Design</p>
                <AiOutlineArrowRight size={20} />
              </div>
            </div>
          </div>
          {/* ELEMENT 2 */}
          <div className={`${TypesBannerStyles.popular_container_item}`}>
            <div
              className={`${TypesBannerStyles.popular_container_item_inside}`}
            >
              <div
                className={`${TypesBannerStyles.popular_container_item_inside_logo}`}
              >
                <img
                  class="m-r-12"
                  src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101633/Illustration_2x.png"
                  alt="Minimalist Logo Design"
                />
              </div>
              <div
                className={`${TypesBannerStyles.popular_container_item_inside_text} d-flex align-items-center`}
              >
                <p>Illusrtration</p>
                <AiOutlineArrowRight size={20} />
              </div>
            </div>
          </div>
          {/* ELEMENT 3 */}
          <div className={`${TypesBannerStyles.popular_container_item}`}>
            <div
              className={`${TypesBannerStyles.popular_container_item_inside}`}
            >
              <div
                className={`${TypesBannerStyles.popular_container_item_inside_logo}`}
              >
                <img
                  class="m-r-12"
                  src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/55b9d6349057bb9fe177ea57e2d92f30-1670570507381/Web%20Design.png"
                  alt="Minimalist Logo Design"
                />
              </div>
              <div
                className={`${TypesBannerStyles.popular_container_item_inside_text} d-flex align-items-center`}
              >
                <p>Website Design</p>
                <AiOutlineArrowRight size={20} />
              </div>
            </div>
          </div>
          {/* ELEMENT 4 */}
          <div className={`${TypesBannerStyles.popular_container_item}`}>
            <div
              className={`${TypesBannerStyles.popular_container_item_inside}`}
            >
              <div
                className={`${TypesBannerStyles.popular_container_item_inside_logo}`}
              >
                <img
                  class="m-r-12"
                  src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101618/Architecture%20_%20Interior%20Design_2x.png"
                  alt="Minimalist Logo Design"
                />
              </div>
              <div
                className={`${TypesBannerStyles.popular_container_item_inside_text} d-flex align-items-center`}
              >
                <p>Architecture & Interior Design</p>
                <AiOutlineArrowRight size={20} />
              </div>
            </div>
          </div>
          {/* ELEMENT 5 */}
          <div className={`${TypesBannerStyles.popular_container_item}`}>
            <div
              className={`${TypesBannerStyles.popular_container_item_inside}`}
            >
              <div
                className={`${TypesBannerStyles.popular_container_item_inside_logo}`}
              >
                <img
                  class="m-r-12"
                  src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/ace985608fce227eb6477959645d09ed-1680446271839/ai%20atrists.png"
                  alt="Minimalist Logo Design"
                />
              </div>
              <div
                className={`${TypesBannerStyles.popular_container_item_inside_text} d-flex align-items-center`}
              >
                <p>Ai Artist</p>
                <AiOutlineArrowRight size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
