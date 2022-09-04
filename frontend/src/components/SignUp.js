import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    uname: "",
    dob: "",
    mail: "",
    contact: "",
    password: "",
    confirm: "",
  });

  let name, value;
  const getData = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const saveData = async (e) => {
    e.preventDefault();

    const res = await axios
      .post("https://6309f8a8f8a20183f7797ee2.mockapi.io/fakeData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user }),
      })
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((err) => console.log(err));

    const data = await res.JSON;

    if (data.status === 404 || !data) {
      console.log("Data Not Registerd!");
    } else {
      console.log("Data Registered Successfully!");
      navigate("/login");
    }
  };

  return (
    <section className='gradient-custom'>
      <div className='container py-5'>
        <div className='row justify-content-center align-items-center'>
          <div className='col-12 col-lg-9 col-xl-7'>
            <div
              className='card shadow-2-strong'
              style={{ borderRadius: "15px" }}
            >
              <div className='card-body p-4 p-md-5'>
                <h3 className='mb-2 pb-2 pb-md-0 mb-md-3'>Sign Up.</h3>
                <form>
                  <div className='col-md-12 mb-3'>
                    <div className='form-floating'>
                      <input
                        type='text'
                        id='name'
                        className='form-control'
                        name='name'
                        value={user.name}
                        onChange={getData}
                        placeholder='name'
                        required
                        autoComplete='off'
                      />
                      <label htmlFor='name'>Name</label>
                    </div>
                  </div>
                  <div className='col-md-12 mb-3'>
                    <div className='form-floating'>
                      <input
                        type='text'
                        id='username'
                        className='form-control'
                        placeholder='username'
                        name='uname'
                        value={user.uname}
                        onChange={getData}
                        required
                        autoComplete='off'
                      />
                      <label htmlFor='username'>User Name</label>
                    </div>
                  </div>
                  <div className='col-md-12 mb-4'>
                    <div className='form-outline'>
                      <h6 className='mb-3 pb-1'>Date of Birth: </h6>
                      <input
                        type='date'
                        className='form-control'
                        name='dob'
                        value={user.dob}
                        onChange={getData}
                        required
                      />
                    </div>
                  </div>
                  <div className='col-md-12 mb-3'>
                    <div className='form-floating'>
                      <input
                        type='email'
                        id='emailAddress'
                        className='form-control'
                        placeholder='email'
                        name='mail'
                        value={user.mail}
                        onChange={getData}
                        required
                        autoComplete='off'
                      />
                      <label htmlFor='emailAddress'>Email Address</label>
                    </div>
                  </div>
                  <div className='col-md-12 mb-3'>
                    <div className='form-floating'>
                      <input
                        type='tel'
                        id='phoneNumber'
                        className='form-control'
                        placeholder='tel'
                        name='contact'
                        value={user.contact}
                        onChange={getData}
                        required
                        autoComplete='off'
                      />
                      <label htmlFor='phoneNumber'>Phone Number</label>
                    </div>
                  </div>
                  <div className='col-md-12 mb-3'>
                    <div className='form-floating'>
                      <input
                        type='password'
                        id='password'
                        className='form-control'
                        placeholder='password'
                        name='password'
                        value={user.password}
                        onChange={getData}
                        required
                        autoComplete='off'
                      />
                      <label htmlFor='password'>Password</label>
                    </div>
                  </div>
                  <div className='col-md-12 mb-3'>
                    <div className='form-floating'>
                      <input
                        type='password'
                        id='confirm'
                        className='form-control'
                        placeholder='confirm'
                        name='confirm'
                        value={user.confirm}
                        onChange={getData}
                        required
                        autoComplete='off'
                      />
                      <label htmlFor='confirm'>Confirm Password</label>
                    </div>
                  </div>
                  <div className='mt-2 pt-2 mb-2'>
                    <button
                      className='btn btn-primary'
                      type='submit'
                      onSubmit={saveData}
                    >
                      Register
                    </button>
                  </div>
                </form>
                <Link to={"/login"} className='text-decoration-none'>
                  Already Registered? Log In Instead.
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
