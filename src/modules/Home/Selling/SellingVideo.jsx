import React from "react";
import Modal from "react-bootstrap/Modal";
import ModalResetStyles from "./ModalReset.module.scss";
export default function SellingVideo(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName={ModalResetStyles.modal_custom}
    >
      <video
        controls
        src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7"
        width="798"
        height="448"
      />
    </Modal>
  );
}
