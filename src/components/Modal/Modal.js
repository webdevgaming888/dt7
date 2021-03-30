import React from "react";
import "./Modal.scss";
import { IoClose } from "react-icons/io5";
const ModalComponent = ({ onHide, imgSrc }) => {
  return (
    <div className="modal-container">
      <div className="modal-mask" onClick={onHide}></div>
      <div className="modal-box">
        <div className="modal-inner">
          <IoClose className="close-icon" onClick={onHide} />
          <img src={imgSrc} alt="modal" />
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
