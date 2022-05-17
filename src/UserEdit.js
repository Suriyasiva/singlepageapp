import axios from "axios";
import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UserEdit(propos) {
  // ----------------------------------------------------
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "",
      position: "",
      salary: "",
    },
    validate: (values) => {
      console.log(values);
      const errors = {};
      if (!values.name) {
        errors.name = "please enter your name";
      }
      if (!values.email) {
        errors.email = "please enter your email";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      return errors;
    },
    //data post method
    onSubmit: async (values) => {
      try {
        console.log(values);
        await axios.post(
          "https://61f0e50b072f86001749eedf.mockapi.io/spapage",
          values
        );
        alert("data stored");
        navigate(`/Userlist`);
      } catch (error) {
        console.log(error);
      }
    },
  });

  // ---------------------------------------------------
  console.log("userview propos", propos);
  const params = useParams();

  useEffect(() => {
    editdata();
  }, []);

  const editdata = async () => {
    const fetchdata = await axios.put(
      `https://61f0e50b072f86001749eedf.mockapi.io/spapage/${params.id}`
    );
    formik.setValues(fetchdata.data);
  };
  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Edit {params.id}</h1>
      </div>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                {/* name */}
                <div className="col-lg-6">
                  <label>Name</label>
                  <input
                    type="text"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    name="name"
                    className="form-control"
                  />
                  {formik.errors.name ? (
                    <span style={{ color: "red" }}>{formik.errors.name}</span>
                  ) : null}
                </div>
                {/* email */}
                <div className="col-lg-6">
                  <label>Email</label>
                  <input
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    name="email"
                    className="form-control"
                  />
                  {formik.errors.email ? (
                    <span style={{ color: "red" }}>{formik.errors.email}</span>
                  ) : null}
                </div>
                {/* country */}
                <div className="col-lg-4">
                  <label>country</label>
                  <select
                    value={formik.values.country}
                    onChange={formik.handleChange}
                    name="country"
                    className="form-control"
                  >
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
                  <select
                    value={formik.values.position}
                    onChange={formik.handleChange}
                    name="position"
                    className="form-control"
                  >
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
                  <select
                    value={formik.values.salary}
                    onChange={formik.handleChange}
                    name="salary"
                    className="form-control"
                  >
                    <option>choose...</option>
                    <option>100000</option>
                    <option>200000</option>
                    <option>300000</option>
                    <option>400000</option>
                  </select>
                </div>
              </div>
              <input type="submit" className="btn btn-primary mt-3" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default UserEdit;
