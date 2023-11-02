import React from "react";
import FooterStyles from "./Footer.module.scss";
export default function Footer() {
  return (
    <div className={`${FooterStyles.footer}`}>
      <div className={`${FooterStyles.footer_container}`}>
        {/* ELEMENT 1 */}
        <div className={`${FooterStyles.footer_container_item}`}>
          <p className="fw-bold">Categories</p>
          <ul>
            <li>Graphics & Design</li>
            <li>Digital Marketing</li>
            <li>Writing & Translation</li>
            <li>Video & Animation</li>
            <li>Music & Audio</li>
          </ul>
        </div>
        {/* ELEMENT 2 */}
        <div className={`${FooterStyles.footer_container_item}`}>
          <p className="fw-bold">Categories</p>
          <ul>
            <li>Graphics & Design</li>
            <li>Digital Marketing</li>
            <li>Writing & Translation</li>
            <li>Video & Animation</li>
            <li>Music & Audio</li>
          </ul>
        </div>
        {/* ELEMENT 3 */}
        <div className={`${FooterStyles.footer_container_item}`}>
          <p className="fw-bold">Categories</p>
          <ul>
            <li>Graphics & Design</li>
            <li>Digital Marketing</li>
            <li>Writing & Translation</li>
            <li>Video & Animation</li>
            <li>Music & Audio</li>
          </ul>
        </div>
        {/* ELEMENT 4 */}
        <div className={`${FooterStyles.footer_container_item}`}>
          <p className="fw-bold">Categories</p>
          <ul>
            <li>Graphics & Design</li>
            <li>Digital Marketing</li>
            <li>Writing & Translation</li>
            <li>Video & Animation</li>
            <li>Music & Audio</li>
          </ul>
        </div>
        {/* ELEMENT 5 */}
        <div className={`${FooterStyles.footer_container_item}`}>
          <p className="fw-bold">Categories</p>
          <ul>
            <li>Graphics & Design</li>
            <li>Digital Marketing</li>
            <li>Writing & Translation</li>
            <li>Video & Animation</li>
            <li>Music & Audio</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
