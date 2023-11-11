import React from "react";
import "./Styles/Table.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

function Table({ table }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="card">
      <div className="card-image">
        <img src={table.imgUrls[0]} alt="card" className="preview" />
      </div>
      <div className="card-content">
        <h1>{table.name}</h1>
        <p style={{ color: "gray" }}>
          <strong>{table.features}</strong>
        </p>
        <p>
          <span>MaxCount:</span> {table.maxcount}
        </p>
        <p>
          <span>PhoneNumber:</span> {table.phonenumber}
        </p>
        <p>
          <span>Type: </span>
          {table.type}
        </p>
        <div className="button">
          <button className="btn" onClick={handleShow}>
            View Details
          </button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you are reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Table;
