import React from 'react'
import DownArrow from '../Images/DownArrow.svg'

export function Order(props) {
    return (
        <div className="w-11/12 mx-auto my-3 overflow-auto flex items-center justify-center">
            <div id="order-created" className="order w-28 border-gray-200 border-t-2 border-b-2 border-l-2 border-r-2 rounded-l-md text-center cursor-pointer flex items-center justify-between"
                onClick={() => props.updateOrder("created")}
                style={{ backgroundColor: "#eee" }}>

                <div className="w-1/4"></div>
                <div className="w-2/4">
                    Date
                </div>
                <div className="order-arrow w-1/4">
                    <img id="order-arrow-created" className="h-5 mx-auto" src={DownArrow} />
                </div>
            </div>
            <div id="order-usdPrice" className="order w-28 border-gray-200 border-t-2 border-b-2 border-r-2 text-center cursor-pointer flex items-center justify-evenly"
                onClick={() => props.updateOrder("usdPrice")}>

                <div className="w-1/4"></div>
                <div className="w-2/4">
                    Price
                </div>
                <div className="order-arrow w-1/4">
                    <img id="order-arrow-usdPrice" className="h-5 mx-auto invisible" src={DownArrow} />
                </div>
            </div>
            <div id="order-winPercentage" className="order w-28 border-gray-200 border-t-2 border-b-2 border-r-2 rounded-r-md text-center cursor-pointer flex items-center justify-evenly"
                onClick={() => props.updateOrder("winPercentage")}>

                <div className="w-1/4"></div>
                <div className="w-2/4">
                    Win %
                </div>
                <div className="order-arrow w-1/4">
                    <img id="order-arrow-winPercentage" className="h-5 mx-auto invisible" src={DownArrow} />
                </div>
            </div>
        </div>
    )
}