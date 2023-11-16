import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Table from './Table';
import './Styles/Table.css'
import Loader from './Spinner/Loader';
import Error from './Spinner/Error';

function Booking() {

  const [tables,setTables] = useState([]);
  const [loading,setLoading] = useState();

    useEffect(() => {

        async function fetchData() {
            try {
                setLoading(true)
                const data = (await axios.get("/api/tables/getalltables")).data
                setTables(data)
                setLoading(false)
            } catch (error) {
                setLoading(false)
            }
        }
       
        fetchData();
      }, []);

  return (
    <div className='main-container'>
      <div className="card-container">
        
      {
        loading ? (<p><Loader/></p>) : tables.length > 1 ? 
        <>
          <div className="selection">
            <h1>hello</h1>
          </div>
           {tables.map(table =>{
              return <Table key={table._id} table={table}/>
          })}
        </> 
        : <Error message="Something went wrong"/>
      }
      </div>
    </div>
  )
}

export default Booking
