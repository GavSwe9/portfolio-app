import React from 'react'

export function Bloodline(props) {
    return (
        <div className="w-11/12 mx-auto overflow-auto flex lg:items-center lg:justify-center">
            <div id="filter-bloodline-Nakamoto" className="filter-bloodline w-28 my-3 px-5 border-gray-200 border-t-2 border-b-2 border-l-2 border-r-2 rounded-l-md text-center cursor-pointer"
                onClick={() => props.updateFilter("bloodline", "Nakamoto")}>
                Nakamoto
            </div>
            <div id="filter-bloodline-Szabo" className="filter-bloodline w-28 my-3 px-5 border-gray-200 border-t-2 border-b-2 border-r-2 text-center cursor-pointer"
                onClick={() => props.updateFilter("bloodline", "Szabo")}>
                Szabo
            </div>
            <div id="filter-bloodline-Finney" className="filter-bloodline w-28 my-3 px-5 border-gray-200 border-t-2 border-b-2 border-r-2 text-center cursor-pointer"
                onClick={() => props.updateFilter("bloodline", "Finney")}>
                Finney
            </div>
            <div id="filter-bloodline-Buterin" className="filter-bloodline w-28 my-3 px-5 border-gray-200 border-t-2 border-b-2 border-r-2 rounded-r-md text-center cursor-pointer"
                onClick={() => props.updateFilter("bloodline", "Buterin")}>
                Buterin
            </div>
        </div>
    )
}