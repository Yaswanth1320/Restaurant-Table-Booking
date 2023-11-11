import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Table from './Table';
import './Styles/Table.css'

function Booking() {

  const [tables,setTables] = useState([]);
  const [loading,setLoading] = useState();
  const [error, setError] = useState();

    useEffect(() => {

        async function fetchData() {
            try {
                setLoading(true)
                const data = (await axios.get("/api/tables/getalltables")).data
                setTables(data)
                setLoading(false)
            } catch (error) {
                setError(true)
                console.log(error)
                setLoading(false)
            }
        }
       
        fetchData();
      }, []);

  return (
    <div className='main-container'>
      <div className="card-container">
      {
        loading ? (<p>Loading...</p>) : error ? (<p>Error!</p>) : (tables.map(table =>{
          return <Table table={table}/>

        }))
      }
      </div>
    </div>
  )
}

export default Booking
