/*global event*/
/*eslint no-restricted-globals: ["error", "event"]*/
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Userlist(propos) {
  const [userlist, setuserlist] = useState([]);
  console.log(userlist);
  useEffect(() => {
    getdata();
  }, []);
  const getdata = async () => {
    try {
      const lists = await axios.get(
        "https://61f0e50b072f86001749eedf.mockapi.io/spapage"
      );
      // list.data=whole datat
      setuserlist(lists.data);
    } catch (error) {
      console.log(error);
    }
  };
  const Delete = (id) => {
    const res = confirm("are you sure ,wnat to delete!");
    if (res) {
    }
  };
  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Userlist</h1>
        {/* create user link */}
        <Link
          to="/createuser"
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> createuser
        </Link>
      </div>
      {/* table */}
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>country</th>
                  <th>position</th>
                  <th>Salary</th>
                  <th>action</th>
                </tr>
              </thead>

              <tbody>
                {userlist.map((user) => {
                  console.log(user);

                  return (
                    <tr>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.country}</td>
                      <td>{user.position}</td>
                      <td>{user.salary}</td>
                      <td>
                        <Link
                          to={`/userview/${user.id}`}
                          className="btn btn-primary btn-sm m-1"
                        >
                          View
                        </Link>

                        <Link
                          to={`/UserEdit/${user.id}`}
                          className="btn btn-warning btn-sm  m-1"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => Delete(1)}
                          className="btn btn-danger btn-sm m-1"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Userlist;
