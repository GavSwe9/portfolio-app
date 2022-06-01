import React from 'react'

export function Races(props) {
    return (
        <div className="w-11/12 mx-auto overflow-auto flex items-center justify-center">
            <div id="filter-numberOfRaces-0" className="filter-numberOfRaces w-28 px-5 border-gray-200 border-t-2 border-b-2 border-l-2 border-r-2 rounded-md text-center cursor-pointer flex-shrink-0"
                onClick={() => props.updateFilter("numberOfRaces", 0)}>
                Unraced
            </div>
        </div>
    )
}