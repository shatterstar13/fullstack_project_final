import React from "react";
import "../App.css";

function Footer() {
  return (
    <div>
      <footer className='container-fluid'>
        <div className='row justify-content-center pt-4 row-1'>
          <div className='col-12'>
            <div className='row'>
              <div className='col-sm-3 text-md-center'>
                <h5>
                  <span>
                    <i className='fa-solid fa-mobile-phone'></i>
                  </span>
                  <b id='footerlogo'> GIZMO</b>
                </h5>
              </div>
              <div className='col-sm-3 my-sm-0'>
                <ul className='list-unstyled'>
                  <li className='mt-0'>
                    <a href='#'>Platform</a>
                  </li>
                  <li>
                    <a href='#'>Contact Us</a>
                  </li>
                  <li>
                    <a href='#'>Protected By Cloudflare</a>
                  </li>
                </ul>
              </div>
              <div className='col-sm-3 my-sm-0'>
                <ul className='list-unstyled'>
                  <li className='mt-0'>
                    <a href='#'>Readers</a>
                  </li>
                  <li>
                    <a href='#'>Subscribe</a>
                  </li>
                  <li>
                    <a href='#'>Readers Services</a>
                  </li>
                </ul>
              </div>
              <div className='col-sm-3 my-sm-0'>
                <ul className='list-unstyled'>
                  <li className='mt-0'>
                    <a href='#'>Company</a>
                  </li>
                  <li>
                    <a href='#'>About Us</a>
                  </li>
                  <li>
                    <a href='#'>Ad Sponsorship</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='row justify-content-center row-2'>
          <div className='col-12'>
            <div className='row my-4 no-gutters'>
              <div className='col-sm-3 col-auto text-center'>
                <small>&#9400; GIZMO 2022</small>
              </div>
              <div className='col-md-3'></div>
              <div className='col-md-3'></div>
              <div className='col my-auto text-md-left text-right'>
                {" "}
                <span>
                  <a href='mailto:muaz.jutt113@gmail.com'>
                    <i className='fa-solid fa-envelope text-white'></i>
                  </a>
                </span>{" "}
                <span>
                  <a href='https://www.facebook.com/shatterstar13'>
                    <i className='fab fa-facebook text-white'></i>
                  </a>
                </span>{" "}
                <span>
                  <a href='https://twitter.com/MuazSaleem6'>
                    <i className='fab fa-twitter text-white'></i>
                  </a>
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
