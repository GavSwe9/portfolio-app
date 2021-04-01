import React from 'react'
import { ZedListHorse } from './ZedListHorse'

export function ZedList(props) {
    let qualifiedHorses = props.horses.filter(h => h.active);

    let horseDisplayList = qualifiedHorses.slice(0, props.limit).map((h) =>
        <ZedListHorse key={h._id} horse={h} />
    )

    return (
        <div className="h-100 flex-1 flex flex-col">
            <div className="mt-2 text-center text-sm uppercase font-semibold text-gray-600 shadow-md lg:shadow-none">
                {qualifiedHorses.length + " Horses Available"}
            </div>
            <div className="w-full lg:w-11/12 mx-auto lg:mb-5 lg:border-2 border-gray-200 rounded-lg overflow-scroll">
                {horseDisplayList}
                <div className="m-5">
                    <div className="w-40 mx-auto text-center rounded-md bg-gray-700 text-gray-50" onClick={props.increaseLimit}>
                        Load More
                    </div>
                </div>
            </div>
        </div>
    )
}