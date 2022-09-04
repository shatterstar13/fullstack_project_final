import React, { useReducer } from "react";
import { Link } from "react-router-dom";

const formReducer = (state, e) => {
  if (e.reset) {
    return {
      name: "",
      uname: "",
      dob: "",
      mail: "",
      contact: "",
      password: "",
      confirm: "",
    };
  }
  return {
    ...state,
    [e.name]: e.value,
  };
};

function Fetch() {
  const [user, setUser] = useReducer(formReducer, {});

  const handleChange = (e) => {
    setUser({
      name: e.target.name,
      value: e.target.value,
    });
  };

  const saveData = (e) => {
    e.preventDefault();

    fetch("https://6309f8a8f8a20183f7797ee2.mockapi.io/fakeData", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ user }),
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err))
      .then(
        setUser({
          reset: true,
        })
      );
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
                <form onSubmit={saveData}>
                  <div className='col-md-12 mb-3'>
                    <div className='form-floating'>
                      <input
                        type='text'
                        id='name'
                        className='form-control'
                        name='name'
                        value={user.name || ""}
                        onChange={handleChange}
                        placeholder='name'
                        required
                        autoComplete='off'
                      />
                      <label htmlFor='name'>Full Name</label>
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
                        value={user.uname || ""}
                        onChange={handleChange}
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
                        value={user.dob || ""}
                        onChange={handleChange}
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
                        value={user.mail || ""}
                        onChange={handleChange}
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
                        value={user.contact || ""}
                        onChange={handleChange}
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
                        value={user.password || ""}
                        onChange={handleChange}
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
                        value={user.confirm || ""}
                        onChange={handleChange}
                        required
                        autoComplete='off'
                      />
                      <label htmlFor='confirm'>Confirm Password</label>
                    </div>
                  </div>
                  <div className='mt-2 pt-2 mb-2'>
                    <button className='btn btn-primary' type='submit'>
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

export default Fetch;
