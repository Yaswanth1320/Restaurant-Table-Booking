import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { DatePicker } from "antd";
import Table from "./Table";
import "./Styles/Table.css";
import Loader from "./Spinner/Loader";
import Error from "./Spinner/Error";
import moment from "moment";



function Booking() {
  const [tables, setTables] = useState([]);
  const [loading, setLoading] = useState();

  const [date,setDate] = useState();
  function filterByDate(date, dateString){
    const dateMoment = moment(date).format("DD-MM-YYYY");
    console.log(dateMoment)
    setDate(dateMoment);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = (await axios.get("/api/tables/getalltables")).data;
        setTables(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="main-container">
      <div className="card-container">
        {loading ? (
          <div>
            <Loader />
          </div>
        ) : tables.length > 1 ? (
          <>
            <div className="selection">
              <DatePicker format="DD-MM-YYYY" onChange={filterByDate} />
            </div>
            {tables.map((table) => {
              return <Table key={table._id} table={table} date={date} />;
            })}
          </>
        ) : (
          <Error message="Something went wrong" />
        )}
      </div>
    </div>
  );
}

export default Booking;
