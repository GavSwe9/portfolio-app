import React from 'react'

export function BreedType(props) {
    return (
        // Genesis, Legendary, Exclusive, Elite, Cross and Pacer.

            <div className="w-11/12 mx-auto my-3 overflow-auto flex lg:items-center lg:justify-center">
                <div id="filter-breedType-Genesis" className="filter-breedType w-28 px-5 border-gray-200 border-t-2 border-b-2 border-l-2 border-r-2 rounded-l-md text-center cursor-pointer flex-shrink-0"
                    onClick={() => props.updateFilter("breedType", "Genesis")}>
                    Genesis
                </div>
                <div id="filter-breedType-Legendary" className="filter-breedType w-28 px-5 border-gray-200 border-t-2 border-b-2 border-r-2 text-center cursor-pointer flex-shrink-0"
                    onClick={() => props.updateFilter("breedType", "Legendary")}>
                    Legendary
                </div>
                <div id="filter-breedType-Exclusive" className="filter-breedType w-28 px-5 border-gray-200 border-t-2 border-b-2 border-r-2 text-center cursor-pointer flex-shrink-0"
                    onClick={() => props.updateFilter("breedType", "Exclusive")}>
                    Exclusive
                </div>
                <div id="filter-breedType-Elite" className="filter-breedType w-28 px-5 border-gray-200 border-t-2 border-b-2 border-r-2 text-center cursor-pointer flex-shrink-0"
                    onClick={() => props.updateFilter("breedType", "Elite")}>
                    Elite
                </div>
                <div id="filter-breedType-Cross" className="filter-breedType w-28 px-5 border-gray-200 border-t-2 border-b-2 border-r-2 text-center cursor-pointer flex-shrink-0"
                    onClick={() => props.updateFilter("breedType", "Cross")}>
                    Cross
                </div>
                <div id="filter-breedType-Pacer" className="filter-breedType w-28 px-5 border-gray-200 border-t-2 border-b-2 border-r-2 rounded-r-md text-center cursor-pointer flex-shrink-0"
                    onClick={() => props.updateFilter("breedType", "Pacer")}>
                    Pacer
            </div>
        </div>
    )
}