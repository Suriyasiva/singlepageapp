import React from "react";
// proporties values are in dashbord
function Cards(propos) {
  return (
    <div class="col-xl-3 col-md-6 mb-4">
      {/* passing color from dashbord  and looping*/}
      <div class={`card shadow ${propos.color} h-100 py-2`}>
        <div class="card-body">
          <div class="row no-gutters align-items-center">
            <div class="col mr-2">
              {/* passing headings from dashbord  and looping*/}
              <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                {propos.headings}
              </div>
              {/* passing value from dashbord  and looping*/}
              <div class="h5 mb-0 font-weight-bold text-gray-800">
                {propos.value}
              </div>
            </div>
            <div class="col-auto">
              {/* passing icon from dashbord  and looping*/}
              <i class={`fas ${propos.icon} fa-2x text-gray-300`}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cards;
