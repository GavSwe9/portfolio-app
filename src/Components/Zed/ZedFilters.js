import React from 'react'
import { Bloodline } from './Filters/Bloodline'
import { BreedType } from './Filters/BreedType'
import { Order } from './Filters/Order'

export function ZedFilters(props) {
    return (
        <div className="flex-none w-screen overflow-scroll">
            <Bloodline updateFilter={props.updateFilter} />
            <BreedType updateFilter={props.updateFilter} />
            <Order updateOrder={props.updateOrder} />
        </div>
        
    )
}