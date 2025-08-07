import React from 'react';
import Dropdown from './dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

const Confirmation = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <header className="border-2 border-gray-300 flex justify-between items-center p-2">
                <h1 className="text-orange-500 font-extrabold p-2 m-2">NESTO</h1>
                <div className="flex items-center space-x-4">
                    <Dropdown data={{ heading: "English" }} />
                    <Dropdown data={{ heading: <FontAwesomeIcon icon={faCircleUser} /> }} />
                </div>
            </header>

            <main className="p-4 mt-5">
                <h3 className="text-lg font-semibold mb-2">Great! Your stay is confirmed.</h3>
                <p className="mb-4">You will soon receive an email confirmation on <b>rajendra@gmail.com</b></p>

                <button
                    type="button"
                    className="border-2 border-orange-500 h-12 py-2.5 px-5 mb-4 rounded-lg text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                    Print
                </button>

                <div className="border-2 rounded-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row justify-between p-3 gap-4">
                        <div>
                            <h6 className="font-semibold">Booking ID</h6>
                            <p>OT061068</p>
                        </div>
                        <div className="md:text-right">
                            <p>Booked by rajendra on Thu, 24 Jul 2025</p>
                        </div>
                    </div>

                    <hr />

                    <div className="flex flex-col md:flex-row justify-between p-3 gap-4">
                        <div className="flex-1">
                            <h6 className="font-semibold">Super Hotel O Ramaraopet Near Kakinada Beach</h6>
                            <h6 className="font-semibold">The Best INN</h6>
                            <p>70-18-25/1C/401, Revenue Ward Number 30, Rangarao Nagar, Gudarigunta, Kakinada</p>
                            <p>Hotel Direction</p>
                            <p>Landmark:</p>
                        </div>
                        <div className="flex-shrink-0">
                            <img
                                className="h-40 w-40 object-cover rounded"
                                src="https://htl-img-res-new.s3.ap-south-1.amazonaws.com/1308/20231115/main.jpg"
                                alt="Hotel"
                            />
                        </div>
                    </div>

                    <hr />

                    <div className="flex flex-col md:flex-row justify-between p-3 gap-6 text-sm">
                        <div>
                            <p className="font-semibold">Primary Guest</p>
                            <h6>rajendra</h6>
                            <p className="font-semibold">Mobile Number</p>
                            <h6>6300358759</h6>
                            <p className="font-semibold">Email Address</p>
                            <h6>rajendra@gmail.com</h6>
                        </div>
                        <div>
                            <p className="font-semibold">Check In</p>
                            <h6>2025-07-24</h6>
                            <p className="font-semibold">Check Out</p>
                            <h6>2025-07-25</h6>
                        </div>
                        <div>
                            <p className="font-semibold">Check In Time</p>
                            <h6>12:00 PM</h6>
                            <p className="font-semibold">Check Out Time</p>
                            <h6>11:00 AM</h6>
                        </div>
                        <div className="w-full md:w-1/5">
                            <h2 className="font-semibold">1 Night</h2>
                            <div className="flex justify-between">
                                <p>1 Guest</p>
                                <div>
                                    <p>1 Room</p>
                                    <p>Classic</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <h5 className="p-3 font-semibold">Payment Details</h5>

                    <div className="m-2 p-3">
                        <Dropdown data={{ heading: "Total payable amount" }} />
                    </div>

                    <div className="flex flex-col md:flex-row p-3 gap-4">
                        <div className="md:w-3/4 text-sm">
                            <p>
                                Your payment option is <b>"Pay At Hotel"</b>. You will receive a call from us closer to the
                                check-in date to confirm your arrival. In case of no response, the booking may be cancelled.
                                Pay ₹758 online now for a smoother check-in experience.
                            </p>
                        </div>
                        <div className="md:w-1/4">
                            <button
                                type="button"
                                className="border-2 border-orange-500 h-12 py-2.5 px-5 w-full rounded-lg text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            >
                                Pay now
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between p-3 gap-4">
                        <div>
                            <h6 className="font-bold">Things to Know</h6>
                        </div>
                        <div className="space-y-1 md:w-1/2 text-sm">
                            <p>
                                Something not right? <span className="text-orange-500 cursor-pointer">Chat with us</span> for help.
                            </p>
                            <p className="text-orange-500 cursor-pointer">Cancel Booking</p>
                            <p className="text-orange-500 cursor-pointer">Read NESTO's Terms and Condition</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>

    );
};

export default Confirmation;

