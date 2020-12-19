import React from 'react'
import DraftPrinceLogo from '../../Images/PrinceLogo.png'

export function DraftPrince() {
    return (
        <div className="w-5/6 md:w-7/12 lg:w-1/4 mb-5 text-gray-700 border-2 border-gray-200 rounded-md cursor-pointer hover:border-purple-500 hover:bg-purple-100" onClick={()=> window.open("https://draftprince.com/", "_blank")}>
            <div className="py-2">
                <img className="h-20 mx-auto" src={DraftPrinceLogo} alt="" />
            </div>
            <div className="text-2xl mx-5 mb-2 border-b-2 border-purple-200">
                Draft Prince
            </div>
            <div className="w-5/6 mx-auto">
                <div className="mb-2">
                    Built for a niche market, Draft Prince is an NFL daily fantasy lineup optimizer.
                </div>
                <div className="mb-2">
                    It allows users to upload their player projections and tweak several inputs that will produce the desired number of lineups given the constraints. 
                </div>
                <div className="mb-2">
                    Users can export their results to a csv that is immediately uploadable to DraftKings. 
                </div>
            </div>
        </div>
    )
}