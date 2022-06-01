import React from 'react'

export function Genotype(props) {
    return (
            <div className="w-11/12 mx-auto my-3 overflow-auto flex lg:items-center lg:justify-center">
                <div id="filter-genotype-Z1" className="filter-genotype w-28 px-5 border-gray-200 border-t-2 border-b-2 border-l-2 border-r-2 rounded-l-md text-center cursor-pointer flex-shrink-0"
                    onClick={() => props.updateFilter("genotype", "Z1")}>
                    Z1
                </div>
                <div id="filter-genotype-Z2" className="filter-genotype w-28 px-5 border-gray-200 border-t-2 border-b-2 border-r-2 text-center cursor-pointer flex-shrink-0"
                    onClick={() => props.updateFilter("genotype", "Z2")}>
                    Z2
                </div>
                <div id="filter-genotype-Z3" className="filter-genotype w-28 px-5 border-gray-200 border-t-2 border-b-2 border-r-2 text-center cursor-pointer flex-shrink-0"
                    onClick={() => props.updateFilter("genotype", "Z3")}>
                    Z3
                </div>
                <div id="filter-genotype-Z4" className="filter-genotype w-28 px-5 border-gray-200 border-t-2 border-b-2 border-r-2 text-center cursor-pointer flex-shrink-0"
                    onClick={() => props.updateFilter("genotype", "Z4")}>
                    Z4
                </div>
                <div id="filter-genotype-Z5" className="filter-genotype w-28 px-5 border-gray-200 border-t-2 border-b-2 border-r-2 text-center cursor-pointer flex-shrink-0"
                    onClick={() => props.updateFilter("genotype", "Z5")}>
                    Z5
                </div>
                <div id="filter-genotype-Z6" className="filter-genotype w-28 px-5 border-gray-200 border-t-2 border-b-2 border-r-2 text-center cursor-pointer flex-shrink-0"
                    onClick={() => props.updateFilter("genotype", "Z6")}>
                    Z6
                </div>
                <div id="filter-genotype-Z7" className="filter-genotype w-28 px-5 border-gray-200 border-t-2 border-b-2 border-r-2 text-center cursor-pointer flex-shrink-0"
                    onClick={() => props.updateFilter("genotype", "Z7")}>
                    Z7
                </div>
                <div id="filter-genotype-Z8" className="filter-genotype w-28 px-5 border-gray-200 border-t-2 border-b-2 border-r-2 text-center cursor-pointer flex-shrink-0"
                    onClick={() => props.updateFilter("genotype", "Z8")}>
                    Z8
                </div>
                <div id="filter-genotype-Z9" className="filter-genotype w-28 px-5 border-gray-200 border-t-2 border-b-2 border-r-2 text-center cursor-pointer flex-shrink-0"
                    onClick={() => props.updateFilter("genotype", "Z9")}>
                    Z9
                </div>
                <div id="filter-genotype-Z10" className="filter-genotype w-28 px-5 border-gray-200 border-t-2 border-b-2 border-r-2 rounded-r-md text-center cursor-pointer flex-shrink-0"
                    onClick={() => props.updateFilter("genotype", "Z10")}>
                    Z10
                </div>
        </div>
    )
}