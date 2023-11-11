import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Loader from "../Components/Spinner/Loader";
import './styles/BookingScreen.css'

function BookingScreen() {
  const { id } = useParams();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [table, setTable] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = (await axios.post("/api/tables/gettablebyid", {tableid : id})).data;
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
    <div className="booking">
      {
        loading ? (<h1><Loader/></h1>) : error ? (<h2>{error}</h2>) : (
        <div>
          <div>
            <h3>Booking screen</h3>
            <p>{id}</p>
          </div>
        </div>)
      }
    </div>
  );
}

export default BookingScreen;
