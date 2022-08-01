import React from "react";

function Modal({ setOpenModal, openModal, id, removePhoto }) {
  return (
    <div
      className="modalBackground"
      style={{
        display: openModal ? "block" : "none",
      }}
    >
      <div className="modalContainer">
        <div className="title">
          <h1>Are you sure you want to delete?</h1>
        </div>
        <div className="footer">
          <button className="yes"
            onClick={() => {
              setOpenModal(false);
              removePhoto(id)
            }}
          >
            Yes
          </button>
          <button className="no"
           onClick={() => {
            setOpenModal(false)
           }}
           
           >No</button>
        </div>
      </div>
    </div>
  );
}
export default Modal;
