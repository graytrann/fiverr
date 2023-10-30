import React from "react";
import FilterStyles from "./Filter.module.scss";
import { AiOutlineArrowDown } from "react-icons/ai";
import { BsToggleOff } from "react-icons/bs";
export default function Filter() {
  return (
    <div className={`${FilterStyles.filter}`}>
      <div className={`${FilterStyles.filter_container}`}>
        <div className={`${FilterStyles.filter_menu}`}>
          <div className={`${FilterStyles.filter_menu_item}`}>
            Logo options
            <span>
              <AiOutlineArrowDown size={25} />
            </span>
          </div>
          <div className={`${FilterStyles.filter_menu_item}`}>
            Delivery time
            <span>
              <AiOutlineArrowDown size={25} />
            </span>
          </div>
          <div className={`${FilterStyles.filter_menu_item}`}>
            Seller Details
            <span>
              <AiOutlineArrowDown size={25} />
            </span>
          </div>
          <div className={`${FilterStyles.filter_menu_item}`}>
            Budget
            <span>
              <AiOutlineArrowDown size={25} />
            </span>
          </div>
        </div>
        <div className={`${FilterStyles.filter_toggle}`}>
          <div className={`${FilterStyles.filter_toggle_item}`}>
            <BsToggleOff size={30} className="me-2" /> Pro services
          </div>
          <div className={`${FilterStyles.filter_toggle_item}`}>
            <BsToggleOff size={30} className="me-2" /> Online Seller
          </div>
        </div>
      </div>
    </div>
  );
}
