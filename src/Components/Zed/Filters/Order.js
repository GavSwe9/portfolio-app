import React from 'react'

export function  Order(props) {
    return (
        <div className="w-11/12 mx-auto overflow-auto flex items-center justify-center">
            <div id="order-created" className="order w-28 my-3 px-5 border-gray-200 border-t-2 border-b-2 border-l-2 border-r-2 rounded-l-md text-center cursor-pointer"
                onClick={() => props.updateOrder("created")}
                style={{backgroundColor: "#eee"}}>
                Date
            </div>
            <div id="order-usd_price" className="order w-28 my-3 px-5 border-gray-200 border-t-2 border-b-2 border-r-2 rounded-r-md text-center cursor-pointer"
                onClick={() => props.updateOrder("usd_price")}>
                Price
            </div>
        </div>
    )
}