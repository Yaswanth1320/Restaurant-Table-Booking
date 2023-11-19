import React from "react";
import { Tabs } from "antd";
import "./styles/AdminScreen.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Components/Spinner/Loader";
import Error from "../Components/Spinner/Error";
import Swal from "sweetalert2";

function AdminScreen() {
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("currentUser")).isAdmin) {
      window.location.href = "/";
    }
  });

  const items = [
    {
      key: "1",
      label: <p className="tab-heading">Bookings</p>,
      children: (
        <div>
          <h2 className="inner-heading">Bookings</h2>
          <Bookings />
        </div>
      ),
    },
    {
      key: "2",
      label: <p className="tab-heading">Tables</p>,
      children: (
        <div>
          <h2 className="inner-heading">All Tables</h2>
          <Tables />
        </div>
      ),
    },
    {
      key: "3",
      label: <p className="tab-heading">Add Table</p>,
      children: (
        <>
          <h2 className="inner-heading">Add Restaruants</h2>
          <AddTable />
        </>
      ),
    },
    {
      key: "4",
      label: <p className="tab-heading">Users</p>,
      children: (
        <div>
          <h2 className="inner-heading">All Users</h2>
          <Users />
        </div>
      ),
    },
  ];

  return (
    <div className="admin-container">
      <div className="admin-heading">
        <h1>Admin panel</h1>
      </div>
      <div className="admin">
        <Tabs defaultActiveKey="1" items={items} size="large" />
      </div>
    </div>
  );
}

export default AdminScreen;

export function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = (await axios.get("/api/booking/getallbookings")).data;
        setBookings(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="row">
      <div className="col-md-12 spinner">
        {loading && <Loader />}
        <table className="table table-bordered table-dark rounded-2">
          <thead>
            <tr>
              <th>Booking id</th>
              <th>User id</th>
              <th>Table</th>
              <th>Members</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length &&
              bookings.map((booking) => {
                return (
                  <tr key={booking._id}>
                    <td>{booking._id}</td>
                    <td>{booking.userid}</td>
                    <td>{booking.table}</td>
                    <td>{booking.members}</td>
                    <td>{booking.date}</td>
                    <td>{booking.status}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function Tables() {
  const [tables, setTables] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = (await axios.get("/api/tables/getalltables")).data;
        setTables(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="row ">
      <div className="col-md-12 spinner">
        {loading && <Loader />}

        <table className="table table-bordered table-dark rounded-2">
          <thead>
            <tr>
              <th>Room id</th>
              <th>Name</th>
              <th>Type</th>
              <th>Cost</th>
              <th>Maxcount</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {tables.length &&
              tables.map((table) => {
                return (
                  <tr>
                    <td>{table._id}</td>
                    <td>{table.name}</td>
                    <td>{table.type}</td>
                    <td>{table.cost}</td>
                    <td>{table.maxcount}</td>
                    <td>{table.phonenumber}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = (await axios.get("/api/users/getallusers")).data;
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="row">
      <div className="col-md-12 spinner">
      {loading && <Loader />}
        <table className="table table-bordered table-dark rounded-2">
          <thead>
            <tr>
              <th>User Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Is Admin</th>
            </tr>
          </thead>
          <tbody>
            {users.length &&
              users.map((user) => {
                return (
                  <tr>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.isAdmin ? "Admin" : "Customer"}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function AddTable() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [cost, setCost] = useState();
  const [maxcount, setCount] = useState();
  const [desc, setDescription] = useState();
  const [phonenumber, setPhonenumber] = useState();
  const [type, setType] = useState();
  const [features, setFeatures] = useState();
  const [imgUrl1, setImgUrl1] = useState();
  const [imgUrl2, setImgUrl2] = useState();
  const [imgUrl3, setImgUrl3] = useState();

  async function addTable() {
    const newTable = {
      name,
      cost,
      maxcount,
      desc,
      phonenumber,
      type,
      features,
      imgUrls: [imgUrl1, imgUrl2, imgUrl3],
    };

    try {
      setLoading(true);
      const result = (await axios.post("/api/tables/addtable", newTable)).data;
      console.log(result);
      setLoading(false);
      Swal.fire(
        "Congarts",
        "Your new table has been added successfully",
        "success"
      ).then((result) => {
        window.location.reload();
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
      Swal.fire("Oops", "Something happen table not added", "error");
    }
  }

  return (
    <div className="spinner">
      {loading && <Loader />}
      <div className="admin-comtainer">
        <div className="admin-input">
          <div className="sub">
            <input
              type="text"
              placeholder="Name of the resturant"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Cost"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
            <input
              type="number"
              placeholder="Maxcount"
              value={maxcount}
              onChange={(e) => setCount(e.target.value)}
            />
            <input
              type="text"
              placeholder="Description"
              value={desc}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="number"
              placeholder="Phone Number"
              value={phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}
            />
          </div>
          <div className="sub">
            <input
              type="text"
              placeholder="Type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
            <input
              type="text"
              placeholder="Features"
              value={features}
              onChange={(e) => setFeatures(e.target.value)}
            />
            <input
              type="text"
              placeholder="ImageUrl 1"
              value={imgUrl1}
              onChange={(e) => setImgUrl1(e.target.value)}
            />
            <input
              type="text"
              placeholder="ImageUrl 2"
              value={imgUrl2}
              onChange={(e) => setImgUrl2(e.target.value)}
            />
            <input
              type="text"
              placeholder="ImageUrl 3"
              value={imgUrl3}
              onChange={(e) => setImgUrl3(e.target.value)}
            />
          </div>
        </div>
        <div className="button">
          <button onClick={addTable}>Add Table</button>
        </div>
      </div>
    </div>
  );
}
