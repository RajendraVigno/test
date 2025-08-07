import { faCircleExclamation, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import Header from "../header/header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons"
import { useNavigate } from "react-router-dom"

const ProductDetails = () => {
    const navigate = useNavigate()
    return (
        <div style={{ fontFamily: "Inter, sans-serif" }}>
            <Header />
            <div id="carouselExample" style={{ overflow: "hidden" }} class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active d-flex h-[25rem]">
                        <img src="https://cdn-ijnhp.nitrocdn.com/pywIAllcUPgoWDXtkiXtBgvTOSromKIg/assets/images/optimized/rev-5794eaa/www.jaypeehotels.com/blog/wp-content/uploads/2024/09/Blog-6-scaled.jpg" class="d-block w-[40%] m-2" alt="..." />
                        <img src="https://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/125/2020/06/15182916/Sofitel-Dubai-Wafi-Luxury-Room-Bedroom-Skyline-View-Image1_WEB.jpg" class="d-block w-[40%] m-2" alt="..." />
                        <img src="https://assets.simplotel.com/simplotel/image/upload/x_0,y_343,w_3600,h_2029,c_crop,q_80,fl_progressive/w_900,h_506,f_auto,c_fit/hotel-southern-grand-vijayawada/Deluxe_Rooms1_Hotel_Southern_Grand_Vijayawada,_hotel_rooms_near_Vijayawada_railway_station,_budget_hotel_in_Vijayawada" class="d-block w-[20%] m-2" alt="..." />
                    </div>
                    <div class="carousel-item">
                        {/* <img src="https://cdn-ijnhp.nitrocdn.com/pywIAllcUPgoWDXtkiXtBgvTOSromKIg/assets/images/optimized/rev-5794eaa/www.jaypeehotels.com/blog/wp-content/uploads/2024/09/Blog-6-scaled.jpg" class="d-block w-[40%] m-2" alt="..." />
                        <img src="https://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/125/2020/06/15182916/Sofitel-Dubai-Wafi-Luxury-Room-Bedroom-Skyline-View-Image1_WEB.jpg" class="d-block w-[40%] m-2" alt="..." />
                        <img src="https://assets.simplotel.com/simplotel/image/upload/x_0,y_343,w_3600,h_2029,c_crop,q_80,fl_progressive/w_900,h_506,f_auto,c_fit/hotel-southern-grand-vijayawada/Deluxe_Rooms1_Hotel_Southern_Grand_Vijayawada,_hotel_rooms_near_Vijayawada_railway_station,_budget_hotel_in_Vijayawada" class="d-block w-[20%] m-2" alt="..." /> */}
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <section className="flex">
                <aside className="w-[60%] hide-scrollbar m-2 p-2" style={{height: "50rem", overflow: "auto"}}>
                    <div className="flex justify-around">
                        <div>
                            <h3 className="fontSize24">Hotel O Ss Delight</h3>
                            <p className="">Srivari Plaza, Aphb Colony, Moula-ali, Meerpet, Hyderabad <br />5.0·Check-in rating Delightful experience</p>
                        </div>
                        <div className="">
                            <h4 className="bgPeach" style={{width: "5rem", borderRadius: "2rem", textAlign: "center"}}>3.8*</h4>
                            <p>22Ratings</p>
                        </div>
                    </div>
                    <div className="ml-[5rem]">
                        <p className="fontWait900">Amenities</p>
                        <div className="flex justify-between w-[15rem] flex-wrap">
                            <p>Cot</p>
                            <p>AC</p>
                            <p>Modern Wardboard</p>
                            <p>Free Wifi</p>
                            <p>Queen sized bed</p>
                            <p>Twin Single bed</p>
                            <p>Show more</p>
                        </div>
                    </div>
                    <div className="ml-[5rem] mb-[4rem]">
                        <p className="fontWait900">Choose your room</p>
                        <div className="border-2">
                            <p className="bg-gray-300 fontWait900">SELECTED CATEGORY</p>
                            <div className="flex justify-between ml-3">
                                <div className="w-[60%]">
                                    <p className="fontWait900">CLASSIC</p>
                                    <p>Room Size: 14sqr feet</p>
                                    <div className="flex justify-between">
                                        <p>Free Wifi</p>
                                        <p>Queen sized bed</p>
                                        <p>Twin Single bed</p>
                                        <p>Show more</p>
                                    </div>
                                </div>
                                <div className="flex justify-end w-[40%]">
                                    <img className="h-[100%] w-[50%]" src="https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill" />
                                </div>
                            </div>
                            <hr />
                            <div className="flex justify-between py-2 ml-3">
                                <div>
                                    <div className="flex items-center">
                                        <h2>954 </h2>
                                        <span><del>3698</del></span>

                                    </div>
                                    <div>
                                        <p>+211 taxes and fee</p>
                                    </div>
                                </div>
                                <div className="w-[40%] text-center">
                                    <h6 className="border-2 inset-shadow-sm p-3 m-3">SELECTED</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h5 className="ml-[5rem] fontWait900">Ratings and reviews</h5>
                        <div className="flex ml-[5rem]">
                            <div className="w-[40%] border-2 flex justify-center">
                                <div>
                                    <h2>3.8*</h2>
                                    <p>Good</p>
                                    <p>22 ratings</p>
                                </div>
                            </div>
                            <div className="w-[60%] border p-2">
                                <div className="flex">
                                    <span>5*</span>
                                    <input id="default-range" type="range" value="25" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"></input>
                                    <span>25%</span>
                                </div>
                                <div className="flex">
                                    <span>4*</span>
                                    <input id="default-range" type="range" value="50" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"></input>
                                    <span>50%</span>
                                </div>
                                <div className="flex">
                                    <span>3*</span>
                                    <input id="default-range" type="range" value="60" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"></input>
                                    <span>60%</span>
                                </div>
                                <div className="flex">
                                    <span>2*</span>
                                    <input id="default-range" type="range" value="80" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"></input>
                                    <span>80%</span>
                                </div>
                                <div className="flex">
                                    <span>1*</span>
                                    <input id="default-range" type="range" value="10" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"></input>
                                    <span>15%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between p-3">
                        <div className="ml-[4rem]">
                            <div className="flex">
                                <h6>Gaurav yadav·</h6>
                                <span>16 Feb 2025</span>
                            </div>
                            <div>
                                <p>Good Hotel Team, Warm welcomed. Great Hospitality with good Aminities.</p>
                            </div>
                        </div>
                        <div className="w-10 h-10">
                            <p className="bgOrange text-center">5*</p>
                        </div>
                    </div>
                    <div className="ml-[5rem] mb-[4rem]">
                        <p className="fontWait900">See all reviews</p>
                        <div>
                            <p className="fontWait900">Hotel policies</p>
                            <div className="flex flex-1">
                                <div>
                                    checkin
                                    <p><b>12.00 PM</b></p>
                                </div>
                                <div>
                                    checkour
                                    <p><b>11.00 AM</b></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="m-[3rem]">
                        <ul type="">
                            <li>No Triple Occupancy</li>
                            <li>No Alcohol</li>
                            <li>No Smoking</li>
                            <li>Couples are welcome</li>
                            <li>Guests can check in using any local or outstation ID proof (PAN card not accepted).</li>
                            <li>This hotel is serviced under the trade name of Ss Delight as per quality standards of OYO</li>
                        </ul>
                    </div>
                    <div className="flex justify-around">
                        <p>View Guest Policy</p>
                        <p>Find OYOs without these rules</p>
                    </div>
                    <hr />
                    <div className=" ml-[3rem]">
                        <div className="flex">
                            <FontAwesomeIcon icon={faLocationDot} />
                        <h2 className="fontWait900">What's nearBy?</h2>
                        </div>
                        <div className="border-3">
                            <div className="ml-3 p-2">
                                <p className="fontWait900">Hotel o Ss Delight</p>
                                <input type="search" id="default-search" class=" h-[1rem] w-50 block w-half p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                            </div>
                            <div className="flex justify-evenly">
                                <p>Places to visit</p>
                                <p>Transportation</p>
                                <p>Restaurants</p>
                            </div>
                            <hr />
                            <div className="flex p-2 m-2" >
                                <div className="flex w-[40%] justify-between">
                                    <div>
                                        <p>ECIL X Roads</p>
                                        <p>Neredmet X Road</p>
                                        <p>Malkajgiri Junction</p>
                                        <p>Mallikarjuna Nagar</p>
                                        <p>Hotel Tulips Grand</p>
                                    </div>
                                    <div>
                                        <p>1.3kms</p>
                                        <p>3.6kms</p>
                                        <p>3.6kms</p>
                                        <p>3.6kms</p>
                                        <p>3.6kms</p>
                                    </div>
                                </div>
                                <div className="flex ml-3 w-[60%]">
                                    <img className="h-[50%] w-[25rem]" src="https://media.istockphoto.com/id/1355126005/vector/ahmedabad-india-vector-map.jpg?s=612x612&w=0&k=20&c=XAmZMpK-Dk-CtLVW-Np_BKEJEWfi4wII5SiCVDNBUDY=" />
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
                <aside className="w-[35%] border-2 hide-scrollbar" style={{height: "50rem", overflow: "auto"}}>
                    <div className="">
                        <div className="bgOrange color-white-300 flex justify-around py-2">
                            <div className="flex">
                                <FontAwesomeIcon icon={faCircleExclamation}/> 
                                <p>LOG IN TO BOOK AT 756 + TAXES 179</p>
                            </div>
                            <button onClick={()=>navigate("/login")} className="bgPeach" style={{width: "5rem", borderRadius: "2rem"}}>LOGIN</button>
                        </div>
                        <div className="ml-5">
                            <div className="flex py-2 ml-5">
                                <h2>954</h2>
                                <span><del>3698</del>74% off</span>
                            </div>
                            <p class="">+taxes and fee: 211</p>
                        </div>
                        <div>
                            <div className=" p-4 m-4 h-[4rem] inset-shadow-sm flex flex-1 border-2 border-solid justify-center py-3">
                                <p className="pe-6 fontSize12 fontWait900">Wed, 19 JUL - Thu, 20 JUL</p>
                                <p className="fontSize12 fontWait900" >1 Room, 1 Guest</p>
                            </div>
                            <div className=" flex p-4 m-4 h-[4rem] inset-shadow-sm border-2 border-solid justify-center py-3">
                                <p className="">CLASSIC</p>
                                <p className="" >symbol</p>
                            </div>
                            <div className=" flex align-start justify-between p-2 ml-[1.5rem]">
                                <div>
                                    <p>WELCOME80 coupon applied</p>
                                    <button type="button" class="borderOrange h-[3rem] py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900  rounded-lg  hover:bg-gray-100  focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">ViewDetails</button>
                                    
                                </div>
                                <div className="flex justify-between">
                                    <h6>-1424</h6>
                                <FontAwesomeIcon icon={faSquareCheck}/>
                                </div>
                            </div>
                            <hr class="w-50 h-1 mx-auto my-4 bg-gray-100 border-dotted-0 rounded-sm md:my-10 dark:bg-gray-1000" />
                            <div className=" flex justify-between p-2 ml-[1.5rem] py-3">
                                <p className="">Your savings</p>
                                <p className="" >1124</p>
                            </div>
                            <div className=" flex justify-between  py-3 p-2 ml-[1.5rem]">
                                <div>
                                    <p className="">Total Price</p>
                                    <p className="" >including taxes and fees</p>
                                </div>
                                <div><p className="" >1124</p></div>
                            </div>
                        </div>
                        <div className="flex w-100 justify-center">
                            <button onClick={()=>navigate("/bookingSummary")} type="button" class="w-50 text-white bgOrange hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Continue to Book</button>
                        </div>
                        <div className="p-2 ml-[1.5rem]">
                            <p>700+ people booked this NESTO in last 6 months Cancellation Policy</p>
                            <p>Follow safety measures advised at the hotel By proceeding, you agree to our Guest Policies.</p>
                        </div>
                    </div>
                </aside>
            </section>
        </div>
    )
}

export default ProductDetails