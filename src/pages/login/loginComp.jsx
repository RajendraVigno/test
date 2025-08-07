import { useState } from "react"
import { useFormik } from 'formik';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const LoginComp = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      mobileNumber: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });


  const [] = useState()
  return (
    <Background>
      {/* Header Section */}
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between py-3">
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <h1 className="ColorOrange">NESTO</h1>
        </a>
        <h4 className="text-white text-center text-md-end py-2">
          Hotels and homes across 800 cities, 24+ countries
        </h4>
      </div>

      {/* Main Content Section */}
      <div className="container py-5">
        <div className="row justify-content-between align-items-center">
          {/* Text Section */}
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <h2 className="text-white" style={{ fontSize: '2.5rem' }}>
              There’s a smarter way to NESTO's around
            </h2>
            <p className="text-white">
              Sign up with your phone number and get exclusive access to
              discounts and savings on NESTO stays and with our many travel partners.
            </p>
          </div>

          {/* Signup Box */}
          <div className="col-12 col-md-5 bg-white rounded p-4">
            <div className="d-flex align-items-center bgPeach p-2 rounded mb-3">
              <FontAwesomeIcon icon={faGear} className="me-2" />
              <p className="mb-0">Sign up & Get ₹500 NESTO Money</p>
            </div>
            <h1>Login / Signup</h1>
            <h6>Please enter your phone number to continue</h6>

            {/* Phone Input */}
            <div className="input-group mb-3">
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                +91
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">+1 USA</a></li>
                <li><a className="dropdown-item" href="#">+44 UK</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Other</a></li>
              </ul>
              <input
                type="text"
                className="form-control"
                placeholder="Enter phone number"
                aria-label="Phone number"
              />
            </div>

            {/* Verify Button */}
            <button
              onClick={() => navigate('/products')}
              type="button"
              className="btn bgPeach w-100 mb-3"
            >
              Verify Number
            </button>

            <p>
              Prefer to Sign in with password instead?{' '}
              <a href="#" className="ColorOrange">
                Click here
              </a>
            </p>
          </div>
        </div>
      </div>
    </Background>

  )
}

export default LoginComp

const Background = styled.div`
  background-image: url("https://plus.unsplash.com/premium_photo-1663126637580-ff22a73f9bfc?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjBiZWRyb29tfGVufDB8fDB8fHww");
  background-size: cover;
  background-position: center;
  height: 100%;
  font-family: "Inter, sans-serif" !important
`;
