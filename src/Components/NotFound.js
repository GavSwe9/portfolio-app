import React from 'react'
import pic404 from "../Images/404.png";

export function NotFound(){
    return(
        <div className="text-center">
            <div className="mt-5 text-5xl font-light text-gray-700">
                404
            </div>
            <div className="font-semibold text-gray-700">
                Page Not Found
            </div>
            <div>
                <img className="h-64 mx-auto" src={pic404} alt="" />
            </div>
        </div>
    )
}