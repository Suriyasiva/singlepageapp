import React from "react";
import { useParams } from "react-router-dom";

function UserEdit(propos) {
  console.log("userview propos", propos);
  const params = useParams();
  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Edit {params.id}</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              {/* name */}
              <div className="col-lg-6">
                <label>Name</label>
                <input type="text" className="form-control" />
              </div>
              {/* email */}
              <div className="col-lg-6">
                <label>Email</label>
                <input type="email" className="form-control" />
              </div>
              {/* country */}
              <div className="col-lg-4">
                <label>country</label>
                <select className="form-control">
                  <option>choose...</option>
                  <option value="IN">india</option>
                  <option value="UAE">dubai</option>
                  <option value="SG">Singapore</option>
                  <option value="US">america</option>
                </select>
              </div>
              {/* position */}
              <div className="col-lg-4">
                <label>position</label>
                <select className="form-control">
                  <option>choose...</option>
                  <option>MERN</option>
                  <option>MARN</option>
                  <option>FRONTEND</option>
                  <option>BACKEND</option>
                </select>
              </div>
              {/* salary */}
              <div className="col-lg-4">
                <label>salary</label>
                <select className="form-control">
                  <option>choose...</option>
                  <option>100000</option>
                  <option>200000</option>
                  <option>300000</option>
                  <option>400000</option>
                </select>
              </div>
              <input type="submit" className="btn btn-primary mt-3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default UserEdit;
