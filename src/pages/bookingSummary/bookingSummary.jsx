import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookingSummary = () => {
  const navigate = useNavigate()
  return (
    <div className="container mx-auto px-4">
      <div className="border border-2 p-2 mb-4">
        <h1 className="text-orange-500 font-extrabold p-2 m-2">NESTO</h1>
      </div>

      <div className="px-4 mb-4">
        <h5 className="text-orange-500 font-semibold">Modify your booking</h5>
      </div>

      <div className="flex flex-col md:flex-row gap-4 px-4">
        {/* Left Section */}
        <div className="md:w-3/5 w-full space-y-4">
          <div className="border-2 h-20 flex items-center bg-orange-100">
            <h6 className="ml-5">Yay! you just saved ₹1084 on this booking!</h6>
          </div>

          <div className="border-2 p-4">
            <div className="ml-5 mb-4">
              <h4 className="font-bold">1. Enter your details</h4>
              <p className="text-sm">We will use these details to share your booking information</p>
            </div>

            <div className="flex flex-col gap-4 mb-6">
              {/* First Name & Email */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full">
                  <label htmlFor="first-name" className="block mb-1 text-sm font-medium text-gray-900">First Name</label>
                  <input
                    type="text"
                    id="first-name"
                    className="bg-gray-50 border border-gray-300 text-sm text-gray-900 rounded-lg w-full p-2.5"
                  />
                </div>

                <div className="w-full">
                  <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-900">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-sm text-gray-900 rounded-lg w-full p-2.5"
                  />
                </div>
              </div>

              {/* Phone Input */}
              <div className="flex flex-col md:flex-row items-center gap-2">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-200 border rounded-l-lg text-sm"
                >
                  +91
                </button>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full border rounded-r-lg p-2.5 text-sm bg-gray-50"
                />
              </div>
            </div>

            <button
              onClick={() => navigate("/paymentSummary")}
              type="button"
              className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
            >
              Send passcode
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-2/5 w-full space-y-4">
          <div className="border-2 p-4 space-y-3">
            {/* Hotel Info */}
            <div className="flex flex-col md:flex-row justify-between">
              <div className="md:w-3/5 w-full">
                <h5 className="font-semibold">Super Hotel O Ramaraopet Near Kakinada Beach</h5>
                <p className="text-sm text-gray-600">(8.5 ratings). Excellent</p>
                <p><b>1 Night</b></p>
              </div>
              <div className="md:w-2/5 w-full mt-3 md:mt-0 flex justify-center items-center">
                <img
                  src="https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill"
                  alt="Hotel"
                  className="rounded w-full max-h-28 object-cover"
                />
              </div>
            </div>

            {/* Dates & Guests */}
            <div className="flex text-sm border-t border-b py-2">
              <div className="w-1/2 text-center">Wed, 19 JUL - Thu, 20 JUL</div>
              <div className="w-1/2 text-center">1 Room, 1 Guest</div>
            </div>

            {/* Room Type */}
            <div className="border-b py-2">
              <p className="ml-4">Classic</p>
            </div>

            {/* Price Breakdown */}
            <div className="flex justify-between text-sm">
              <div>
                <p>Room price for 1 Night X 1 Guest</p>
                <p>Instant discount</p>
                <p>55% Coupon Discount</p>
              </div>
              <div className="text-right">
                <p>₹2879</p>
                <p>-₹908</p>
                <p>-₹1084</p>
              </div>
            </div>

            <hr />

            {/* Total */}
            <div className="flex justify-between items-center mt-2">
              <p className="font-semibold">Payable Amount</p>
              <h2 className="text-green-600 font-bold text-lg">₹887</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default BookingSummary;

