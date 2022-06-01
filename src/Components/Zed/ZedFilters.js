import React from 'react'
import { Bloodline } from './Filters/Bloodline'
import { BreedType } from './Filters/BreedType'
import { Genotype } from './Filters/Genotype'
import { Order } from './Filters/Order'
import { Races } from './Filters/Races'

export function ZedFilters(props) {
    return (
        <div className="flex-none w-screen overflow-auto">
            <Bloodline updateFilter={props.updateFilter} />
            <BreedType updateFilter={props.updateFilter} />
            <Genotype updateFilter={props.updateFilter} />
            <Order updateOrder={props.updateOrder} />
            <Races updateFilter={props.updateFilter} />
        </div>
        
    )
}