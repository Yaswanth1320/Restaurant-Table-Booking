import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { DatePicker } from "antd";
import Table from "./Table";
import "./Styles/Table.css";
import Loader from "./Spinner/Loader";

function Booking() {
  const [tables, setTables] = useState([]);
  const [loading, setLoading] = useState();
  const [date,setDate] = useState();
  const [duplicateTables,setDuplicateTables] = useState([]);
  const [serachKey,setSearchKey] = useState('')
  const [type,setType] = useState("all")

  useEffect(() => {
    async function fetchData() {

      if(!localStorage.getItem("currentUser")){
          window.location='/login'
      }

      try {
        setLoading(true);
        const data = (await axios.get("/api/tables/getalltables")).data;
        setTables(data);
        setDuplicateTables(data)
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  function filterByDate(date, dateString){
    setDate(dateString);
    console.log(dateString)

    // var tempTables=[];
    // var availability = false;
    // for(const table of duplicateTables){
    //   if(table.currentBookings.length >0){
        
    //     for(const bookings of table.currentBookings){
    //       if(date !== bookings.date){
    //         console.log(bookings.date)
    //         availability= true
    //       }
    //     }

    //   }
    //   if(availability === true ){
    //     tempTables.push(table)
    //     console.log(tempTables.length)
    //   }

    //   setTables(tempTables);
    // }

  };

  function filterBysearch(){
    const tempTables = duplicateTables.filter(table => table.name.toLowerCase().includes(serachKey.toLowerCase()))
    setTables(tempTables)
  }

  function filterByType(e){
    setType(e)
    if(e !== 'all'){
      const tempTables = duplicateTables.filter(table => table.type.toLowerCase() === e.toLowerCase())
      setTables(tempTables)
    }else{
      setTables(duplicateTables)
    }
    
  }


  return (
    <div className="main-container">
      <div className="card-container">
        {loading ? (
          <div>
            <Loader />
          </div>
        ) : 
          <>
            <div className="selection">
              <DatePicker format="DD-MM-YYYY" onChange={filterByDate} />
              <input type="text" value={serachKey}
              onChange={(e) => setSearchKey(e.target.value)} onKeyUp={filterBysearch} placeholder="serach type" />
              <select value={type} onChange={(e) => filterByType(e.target.value)}>
                <option value="all">All</option>
                <option value="single">Single</option>
                <option value="couple">Couple</option>
                <option value="squad">Squad</option>
                <option value="group"> Group</option>
              </select>
            </div>
            {tables.map((table) => {
              return <Table key={table._id} table={table} date={date} />;
            })}
          </>
        }
      </div>
    </div>
  );
}

export default Booking;
