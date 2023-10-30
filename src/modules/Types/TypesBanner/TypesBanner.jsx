import React from "react";
import TypesBannerStyles from "./TypesBanner.module.scss";
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
        <div className={`${TypesBannerStyles.popular_item}`}>
          <div className={`${TypesBannerStyles.popular_item_logo}`}>
            <img
              class="m-r-12"
              src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png"
              alt="Minimalist Logo Design"
            />
          </div>
          <div className={`${TypesBannerStyles.popular_item_text}`}></div>
        </div>
      </div>
    </div>
  );
}
