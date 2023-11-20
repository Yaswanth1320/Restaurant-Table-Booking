import React, { useEffect, useState } from "react";
import { Tag } from 'antd';
import { Tabs } from "antd";
import "./styles/ProfileScreen.css";
import axios from "axios";
import Loader from "../Components/Spinner/Loader";
import Swal from "sweetalert2";

export default function ProfileScreen() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    if (!user) {
      window.location.href = "/login";
    }
  }, []);

  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Profile",
      children: <Profile user={user} />,
    },
    {
      key: "2",
      label: "Bookings",
      children: <MyBookings />,
    },
  ];
  return (
    <>
      <div className="details-heading">
        <h2>Profile & Bookings</h2>
      </div>
      <div className="profile-container">
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          size="large"
        />
      </div>
    </>
  );
}

export function MyBookings() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const [booking, setBooking] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = (
          await axios.post("/api/booking/getbookingsbyuserid", {
            userid: user._id,
          })
        ).data;
        console.log(data);
        setBooking(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    }
    fetchData();
  }, [user._id]);

  async function cancelBooking(bookingid, tableid) {
    try {
      setLoading(true);
      const result = await axios.post("/api/booking/cancelbooking", {
        bookingid,
        tableid,
      });
      console.log(result);
      setLoading(false);
      Swal.fire("Congrats", "Your booking has been cancelled", "success").then(
        (result) => {
          window.location.reload();
        }
      );
    } catch (error) {
      console.log(error);
      setLoading(false);
      Swal.fire("CongOopsrats", "Somthing went wrong", "error").then(
        (result) => {
          window.location.reload();
        }
      );
    }
  }

  return (
    <div className="booking-details">
      {loading && <Loader />}
      {booking &&
        booking.map((book) => {
          return (
            <div key={book._id} className="details">
              <h2>{book.table}</h2>
              <hr />
              <p>
                BookingId: <span>{book._id}</span>
              </p>
              <p>
                Date: <span>{book.date}</span>
              </p>
              <p>
                Amount: <span>{book.totalamount}</span>
              </p>
              <p>
                Total members: <span>{book.members}</span>
              </p>
              <p>
                Transaction Id: <span>{book.transactionid}</span>
              </p>
              <p>
                Status: 
                   <span style={{"marginLeft": "0.3rem"}}>
                   {book.status === "Cancelled"? <Tag color="#f50"><span className="status">  Cancelled</span></Tag>:<Tag color="#87d068"><span className="status">  Conformed</span></Tag> }
                   </span>
                  
              </p>
              {book.status !== "Cancelled" && (
                <button
                  onClick={() => {
                    cancelBooking(book._id, book.tableid);
                  }}
                >
                  Cancel Booking
                </button>
              )}
            </div>
          );
        })}
    </div>
  );
}

export function Profile({ user }) {
  return (
    <div className="profile">
      <h3>My Profile</h3>
      <hr />
      <p>
        Name: <span>{user.name}</span>
      </p>
      <p>
        Email: <span>{user.email}</span>
      </p>
      <p>
        isAdmin: <span>{user.isAdmin ? "Yes" : "No"}</span>
      </p>
    </div>
  );
}
