import React, { useState } from "react";
import BannerStyles from "./Banner.module.scss";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export default function Banner() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState(""); // State để lưu giá trị từ input

  // hàm search xong navigate
  const handleSearch = () => {
    navigate(`/jobs/${searchTerm}`); // Truyền giá trị từ state vào navigate
  };
  return (
    <>
      <div className={BannerStyles.banner}>
        <div className={BannerStyles.banner_info}>
          <div className={BannerStyles.banner_text}>
            <h1>
              Find the right <i>freelance</i>
            </h1>
            <h1>service, right away</h1>
          </div>
          <div className={BannerStyles.banner_search}>
            <input
              placeholder="...Search for any service"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>
              <CiSearch></CiSearch>
            </button>
          </div>
          <div className={BannerStyles.banner_popular}>
            <div className={BannerStyles.banner_popular_text}>Popular :</div>
            <div className={BannerStyles.banner_popular_items}>
              <div className={BannerStyles.banner_popular_items_item}>
                <p>Website Design</p>
              </div>
              <div className={BannerStyles.banner_popular_items_item}>
                <p>WordPress</p>
              </div>
              <div className={BannerStyles.banner_popular_items_item}>
                <p>Logo Design</p>
              </div>
              <div className={BannerStyles.banner_popular_items_item}>
                <p>AI Services</p>
              </div>
            </div>
          </div>
        </div>

        <div className={BannerStyles.banner_image}>
          <img src="./images/manfiverr.png" alt="" srcset="" />
        </div>
      </div>
      <div className={BannerStyles.trusted}>
        <div className={BannerStyles.trusted_container}>
          <p>Trusted By:</p>
          <div className={BannerStyles.trusted_list}>
            <div className={BannerStyles.trusted_item}>
              <img
                className={BannerStyles.trusted_item_meta}
                src="./images//Meta-Logo.png"
                alt=""
                srcset=""
              />
            </div>
            <div className={BannerStyles.trusted_item}>
              <img
                className={BannerStyles.trusted_item_google}
                src="./images/Google_2015_logo.svg.png"
                alt=""
                srcset=""
              />
            </div>
            <div className={BannerStyles.trusted_item}>
              <img
                className={BannerStyles.trusted_item_netflix}
                src="./images/Logos-Readability-Netflix-logo.png"
                alt=""
                srcset=""
              />
            </div>
            <div className={BannerStyles.trusted_item}>
              <img
                className={BannerStyles.trusted_item_pg}
                src="./images/P&G_logo.png"
                alt=""
                srcset=""
              />
            </div>
            <div className={BannerStyles.trusted_item}>
              <img
                className={BannerStyles.trusted_item_paypal}
                src="./images/1200px-PayPal_logo.svg.png"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
