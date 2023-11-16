import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Loader from "../Components/Spinner/Loader";
import "./styles/BookingScreen.css";

function BookingScreen() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const { id,date,members } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [table, setTable] = useState({});
  console.log(table);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = (
          await axios.post("/api/tables/gettablebyid", { tableid: id })
        ).data;
        setTable(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  return (
    <div className="booking-container">
      {loading ? (
        <h1 style={{ "text-align": "center" }}>
          <Loader />
        </h1>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <div className="booking">
          <div className="booking-image">
            <h3>{table.name}</h3>
            <img src={table.imgUrls[0]} alt="single" />
          </div>
          <div className="booking-content">
            <div style={{"margin-bottom": "1.6rem"}}>
                <h3>Booking details</h3>
                <hr />
                <p>Name: <span> {user.name}</span></p>
                <p>Date: <span>{date}</span></p>
                <p>Maxcount: <span>{table.maxcount}</span></p>
                <p>Type: <span>{table.type}</span></p>
            </div>
            <div>
                  <h4>Amount</h4>
                  <hr />
                  <p>Memebers: <span>{members}</span></p>
                  <p>Reservation fees: <span>{table.cost*30/100*members}</span></p>
                  <h4>Total Amount: <span>{table.cost*members}</span></h4>
                  <button>Reserve Now</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookingScreen;
