import React from "react";
import { useParams } from "react-router-dom";

function Userview(propos) {
  console.log("userview propos", propos);
  const parameter = useParams();
  return (
    <>
      <h1>view {parameter.id}</h1>
      <h1>Name:</h1>
      <h1>Email:</h1>
      <h1>Country:</h1>
      <h1>Position:</h1>
      <h1>Salary:</h1>
    </>
  );
}
export default Userview;
