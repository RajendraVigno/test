import { Button, colors, TextField } from "@mui/material"
import FilterComp from "./filterComp"
import data from "../../mockData/products.json"
import Header from "../header/header"
import styled from 'styled-components';
import { useNavigate } from "react-router";
import { useState } from "react";



const Products = () => {
  const navigate = useNavigate()
  const [trimToggle, setTrimToggle] = useState(false)

  console.log(data)



  const Categories = [{
    heading: "Suggested for you",
    title: ["Rush deal", "Last minut deals", "5 star", "North Goa"]
  }]
  const collections = [{
    heading: "Price per night",
    title: ["₹ 0 - ₹ 1500", "₹ 1500 - ₹ 3000", "₹ 3000 - ₹ 6500", "₹ 6500 - ₹ 10000", "₹ 10000 - ₹ 15000",]
  }]
  const hotelFacility = [{
    heading: "HotelFacility",
    title: ["Fridze", "TV", "bed"]
  }]
  const accomidationType = [{
    heading: "AccomidationType",
    title: ["nesto  home", "hotel"]
  }]

  const checkInFeautures = [{
    heading: "Check-in features",
    title: ["Pay At Hotel",]
  }]

  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
  {/* head section */}
  <Header />
  {/* body section */}
  <section className="flex flex-col md:flex-row bgAsh min-h-screen">
    
    {/* left side */}
    <aside 
      className="bgWhite md:w-1/4 w-full hide-scrollbar p-4 md:ml-20 mt-4 md:mt-4 md:mr-1 overflow-auto"
      style={{ maxHeight: "60rem" }}
    >
      <Background>
        <div className="mb-4">
          <button
            type="button"
            className="borderOrange fontWait900 bgWhite text-gray-900 text-xs py-1 px-5 w-full rounded-lg hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            EXPLORE ON MAP
          </button>
        </div>
      </Background>

      <div className="mb-4">
        <TextField
          style={{ height: "3rem" }}
          id="outlined-basic"
          label="search for locality/hotel name"
          variant="outlined"
          className="w-full"
        />
      </div>

      <FilterComp det={collections} />
      <FilterComp det={Categories} />
      <FilterComp det={hotelFacility} />
      <FilterComp det={accomidationType} />
      <FilterComp det={checkInFeautures} />
    </aside>

    {/* right side */}
    <section
      className="md:w-3/4 w-full hide-scrollbar p-4 mt-4 md:mt-4 md:mr-20 overflow-auto"
      style={{ maxHeight: "60rem" }}
    >
      <div>
        <div className="text-xs mb-2">
          <span>Home &gt; Hotels more in Goa</span>
        </div>

        <div className="py-3 flex flex-col sm:flex-row items-start sm:items-center mb-4">
          <h3 className="font-bold text-xl mb-2 sm:mb-0 sm:mr-4">
            3128 Properties in Goa
          </h3>
          <button
            type="button"
            className="borderOrange bgWhite h-8 px-5 text-sm font-medium text-gray-900 rounded-lg hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Explore travel tips-&gt;
          </button>
        </div>

        <div className="flex flex-wrap bgWhite justify-around items-center mb-3 py-2 text-sm font-semibold">
          <div className="flex items-center space-x-2 fontWait900">
            <span>SORT BY</span>
            <button
              type="button"
              className="borderOrange bgWhite px-2 text-gray-900 rounded-lg hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Popular
            </button>
          </div>
          <div>
            <span className="fontWait900">User Rating </span>
            <span>(Highest first)</span>
          </div>
          <div>
            <span className="fontWait900">Price</span>
            <span>(Highest first)</span>
          </div>
          <div>
            <span className="fontWait900">Price</span>
            <span>(Lowest first)</span>
          </div>
        </div>

        {data.map((details) => {
          return (
            <div
              key={details.id || details.alternate_name}
              className="flex flex-col sm:flex-row border-2 bgWhite mb-3 hover:shadow-lg transition-shadow duration-200 rounded-lg"
            >
              {/* Carousel */}
              <div className="w-full sm:w-1/4 p-2">
                {/* NOTE: Bootstrap carousel classes won't work well with Tailwind.
                    Consider using a React carousel library like react-slick or swiper */}
                <div
                  onClick={() => navigate("/productDetails")}
                  className="cursor-pointer"
                >
                  <img
                    src={details.best_image}
                    alt={details.alternate_name || "Hotel image"}
                    className="w-full h-48 object-cover rounded-md"
                  />
                </div>
                <div className="flex mt-2 space-x-2 overflow-x-auto">
                  {details.hotel_images.slice(0, 4).map((img, i) => (
                    <img
                      key={i}
                      src={img.url}
                      alt={`Hotel thumb ${i + 1}`}
                      className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                    />
                  ))}
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col justify-between p-4 sm:w-1/2">
                <div>
                  <p
                    className={trimToggle ? "text-xl font-bold" : "line-clamp-3 text-xl font-bold"}
                    onClick={() => navigate("/productDetails")}
                    style={{ cursor: "pointer" }}
                  >
                    {details.alternate_name}
                  </p>
                  <button
                    className="text-orange-500 underline mt-1"
                    onClick={() => setTrimToggle(!trimToggle)}
                  >
                    {trimToggle ? "Read less..." : "Read more..."}
                  </button>
                </div>
                <h3 className="text-yellow-500">*****</h3>
                <p>
                  <a href="#" className="underline text-blue-600 hover:text-blue-800">
                    Colaungut
                  </a>{" "}
                  1.8 km drive to Calangute Beach
                </p>
                <button
                  type="button"
                  className="borderOrange bgWhite h-8 px-3 mt-2 text-sm font-medium text-gray-900 rounded-lg hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Couple friendly
                </button>
                <p className="text-xs mt-2">
                  Ideal spot near Calangute beach, Great breakfast buffet with live music, Cozy wooden cottages
                </p>
              </div>

              {/* Booking Info */}
              <div className="flex flex-col justify-between p-4 sm:w-1/4 text-right">
                <div>
                  <h6 className="fontWait900 text-orange-500 leading-tight">
                    Very Good 4.0
                  </h6>
                  <p className="text-xs">(7782 Ratings)</p>
                </div>
                <div>
                  <p className="line-through text-xs">5,066</p>
                  <h5 className="text-lg font-semibold">2,615</h5>
                  <p className="text-xs">+ ₹ 628 taxes & fees</p>
                  <p className="text-xs">Per Night</p>
                </div>
                <div>
                  <p
                    className="text-xs text-orange-500 cursor-pointer underline"
                    onClick={() => navigate("/login")}
                  >
                    Login to Book Now & Pay Later!
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => navigate("/productDetails")}
                    type="button"
                    className="borderOrange bgWhite h-8 px-3 mt-2 text-sm font-medium text-gray-900 rounded-lg hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    More Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  </section>
</div>

  )
}

export default Products

const Background = styled.div`
  background-image: url("https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/mapEntryHover.png");
  background-size: cover;
  background-position: center;
  height: 8rem;
  font-family: "Inter, sans-serif" !important;
  display:flex;
  align-items:flex-end;
  justify-content:center
`;

