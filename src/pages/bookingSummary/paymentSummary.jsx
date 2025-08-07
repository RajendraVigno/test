import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentSummary = () => {
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
          {/* Savings Box */}
          <div className="border-2 h-20 flex items-center bg-orange-100 px-4">
            <h6>Yay! you just saved ₹1084 on this booking!</h6>
          </div>

          {/* User Details */}
          <div className="border-2 p-4">
            <div className="flex justify-between mb-4">
              <h4 className="font-semibold">1. Your Details</h4>
              <p className="text-blue-500 cursor-pointer">Modify</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 ml-4 text-gray-700">
              <p>rajendra</p>
              <p>rajendra@gmail.com</p>
              <p>1234123443</p>
            </div>
          </div>

          {/* Payment Method */}
          <div className="border-2 p-4">
            <div className="mb-4">
              <h6 className="font-semibold">Choose payment method to pay</h6>
              <p className="text-sm text-gray-500">100% safe and secure payments</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              {/* Options */}
              <div className="md:w-1/3 w-full space-y-4">
                <div className="border p-4 rounded hover:bg-gray-100 cursor-pointer">
                  <h5 className="font-medium">Pay at Hotel</h5>
                </div>
                <div className="border p-4 rounded hover:bg-gray-100 cursor-pointer">
                  <p>Pay Now</p>
                </div>
              </div>

              {/* Info + Button */}
              <div className="md:w-2/3 w-full text-center flex flex-col justify-center items-center gap-3">
                <p className="font-semibold text-gray-700">No payment needed today</p>
                <p className="text-sm text-gray-500 max-w-md">
                  We will confirm your stay without any charge. Pay directly at the hotel during your stay.
                </p>
                <button
                  onClick={() => navigate("/confirmation")}
                  type="button"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg text-sm px-5 py-2.5"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section – Booking Summary */}
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

export default PaymentSummary;

