import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Userview(propos) {
  console.log("userview propos", propos);
  const parameter = useParams();
  const [view, setview] = useState([]);
  console.log("view", view);
  useEffect(() => {
    dispalydata();
  }, []);
  const dispalydata = async () => {
    const fetchdata = await axios.get(
      `https://61f0e50b072f86001749eedf.mockapi.io/spapage/${parameter.id}`
    );
    setview(fetchdata.data);
  };
  return (
    <>
      <p>
        <strong>view</strong>
        {parameter.id}
      </p>
      <p>
        <strong>Name:</strong>
        {view.name}
      </p>
      <p>
        <strong>Email:</strong>
        {view.email}
      </p>
      <p>
        <strong>Country:</strong>
        {view.country}
      </p>
      <p>
        <strong>Position:</strong>
        {view.position}
      </p>
      <p>
        <strong>Salary:</strong>
        {view.salary}
      </p>
    </>
  );
}
export default Userview;
