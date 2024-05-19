import React from "react";
import { useNavigate } from "react-router-dom";

function Doctor({ doctor }) {
  const navigate = useNavigate();
  return (
    <div
      className="card p-2 cursor-pointer"
      onClick={() => navigate(`/book-appointment/${doctor._id}`)}
    >
      <h1 className="card-title">
        {doctor.firstname} {doctor.lastname}
      </h1>
      <hr />
      <p>
        <b>Timings :</b> {doctor.timings[0]} - {doctor.timings[1]}
      </p>
      <p>
        <b>Days : </b>
        {doctor.day}
      </p>
      <p>
        <b>Branch : </b>
        {doctor.branch}
      </p>
      <p>
        <b>Specialization : </b>
        {doctor.specialization}
      </p>
    </div>
  );
}

export default Doctor;
