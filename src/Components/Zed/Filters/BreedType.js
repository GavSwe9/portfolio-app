import React from 'react'

export function BreedType(props) {
    return (
        // Genesis, Legendary, Exclusive, Elite, Cross and Pacer.

            <div className="w-11/12 mx-auto overflow-auto flex lg:items-center lg:justify-center">
                <div id="filter-breed_type-Genesis" className="filter-breed_type w-28 px-5 border-gray-200 border-t-2 border-b-2 border-l-2 border-r-2 rounded-l-md text-center cursor-pointer flex-shrink-0"
                    onClick={() => props.updateFilter("breed_type", "Genesis")}>
                    Genesis
                </div>
                <div id="filter-breed_type-Legendary" className="filter-breed_type w-28 px-5 border-gray-200 border-t-2 border-b-2 border-r-2 text-center cursor-pointer flex-shrink-0"
                    onClick={() => props.updateFilter("breed_type", "Legendary")}>
                    Legendary
                </div>
                <div id="filter-breed_type-Exclusive" className="filter-breed_type w-28 px-5 border-gray-200 border-t-2 border-b-2 border-r-2 text-center cursor-pointer flex-shrink-0"
                    onClick={() => props.updateFilter("breed_type", "Exclusive")}>
                    Exclusive
                </div>
                <div id="filter-breed_type-Elite" className="filter-breed_type w-28 px-5 border-gray-200 border-t-2 border-b-2 border-r-2 text-center cursor-pointer flex-shrink-0"
                    onClick={() => props.updateFilter("breed_type", "Elite")}>
                    Elite
                </div>
                <div id="filter-breed_type-Cross" className="filter-breed_type w-28 px-5 border-gray-200 border-t-2 border-b-2 border-r-2 text-center cursor-pointer flex-shrink-0"
                    onClick={() => props.updateFilter("breed_type", "Cross")}>
                    Cross
                </div>
                <div id="filter-breed_type-Pacer" className="filter-breed_type w-28 px-5 border-gray-200 border-t-2 border-b-2 border-r-2 rounded-r-md text-center cursor-pointer flex-shrink-0"
                    onClick={() => props.updateFilter("breed_type", "Pacer")}>
                    Pacer
            </div>
        </div>
    )
}