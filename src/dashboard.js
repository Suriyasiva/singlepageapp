import React from "react";
// importing cards to pass a proporties
import Cards from "./card";

function Dashboard(propos) {
  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4 ">
        <h1 class="h3 mb-0 text-gray-800 ">Dashboard</h1>
        <a
          href="#"
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Generate Report
        </a>
      </div>
      <div class="row">
        {/* card proporties value-------------------------------1------------------------------------------------------- */}
        <Cards
          color="border-left-primary"
          headings="Earnings (Monthly)"
          value="$40.000"
          icon="fa-calendar"
        ></Cards>
        {/* card proporties value -------------------------------------2-----------------------------------------------------*/}
        <Cards
          color="border-left-warning"
          headings="Earnings (Annual)"
          value="$215.000"
          icon="fa-dollar-sign"
        ></Cards>
        {/* card proporties value -------------------------------------3-------------------------------------------------------*/}
        <Cards
          color="border-left-info"
          headings="Task"
          value="50%"
          icon="fa-clipboard-list"
        ></Cards>
        {/* card proporties value---------------------------------------------4---------------------------------------------------- */}
        <Cards
          color="border-left-success"
          headings="Pending Request"
          value="18"
          icon="fa-comments"
        ></Cards>
      </div>
    </>
  );
}
export default Dashboard;
