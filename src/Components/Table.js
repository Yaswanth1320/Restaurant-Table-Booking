import React from "react";
import "./Styles/Table.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import { Link } from "react-router-dom";

function Table({ table, date }) {
  const [show, setShow] = useState(false);
  const [members, setMembers] = useState(1);

  function people(e) {
    setMembers(e.target.value);
  }

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
        <div className="members">
          <span>
            {" "}
            <p>Members: </p>
          </span>
          <input
            type="number"
            min={members}
            max={table.maxcount}
            onChange={people}
          />
        </div>
        <p>
          <span>PhoneNumber:</span> {table.phonenumber}
        </p>
        <p>
          <span>MaxCount:</span> {table.maxcount}
        </p>
        <p>
          <span>Type: </span>
          {table.type}
        </p>
        <div className="button">
          <button className="btn" onClick={handleShow}>
            View Details
          </button>
          {date && (
            <Link to={`/book/${table._id}/${date}/${members}`}>
              <Button className="btn">Book now</Button>
            </Link>
          )}
          <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header>
              <Modal.Title>{table.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Carousel>
                {table.imgUrls.map((url) => {
                  return (
                    <Carousel.Item key={url}>
                      <img
                        src={url}
                        width="800px"
                        height="450px"
                        alt="Slide"
                        className="modalImg"
                      />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
              <h6 className="mt-2">{table.desc}</h6>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Table;
