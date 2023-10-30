import React from "react";
import Modal from "react-bootstrap/Modal";

export default function CommentVideo(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <video controls src={props.src} width="798" height="448" />{" "}
    </Modal>
  );
}
