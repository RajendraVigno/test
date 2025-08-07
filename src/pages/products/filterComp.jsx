import { TextField } from "@mui/material"

const FilterComp = (props) => {
    const {det} = props
    console.log(det)
    return(
        <div>
            {det.map((details)=>{
                return <div className="">
                <h6 className="fontWait900">{details.heading}</h6>
                {details?.title?.map((val)=>
                <div class="flex items-center mb-4 ">
                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{val}</label>
                </div>
                )}
                <div>
                    {details.heading === "Price per night" ? 
                    <div>
                        <p>Your Budzet</p>
                        <div className="flex p-2 align-center priceRange">
                            <TextField id="outlined-basic" label="" variant="outlined" className="w-half priceRange" />
                            <p>to</p>
                            <TextField id="outlined-basic" label="" variant="outlined" className="w-half" />
                            <button type="button" class="borderOrange height2 py-1 px-2 me-2 text-sm font-medium text-gray-900  rounded-lg  hover:bg-gray-100  focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Search</button>
                        </div>
                    </div>
                    : 
                    ""}
                </div>
                {details.heading === "Check-in features" ? "" : <hr /> }
                
                </div>
            })}
        </div>
    )
}

export default FilterComp