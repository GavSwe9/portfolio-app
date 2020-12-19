import React from 'react'
import gavswe from '../Images/gavswe.png'

export function NamePlate(){
    return (
        <div className="bg-gray-700 text-gray-100 select-none">
            <div className="w-full">
                <img className="w-24 mx-auto" src={gavswe} />
            </div>
            <div className="text-3xl">
                Gavin Sweeney
            </div>
            <div className="text-md font-semibold pb-5">
                Software Engineer
            </div>
        </div>
    )
}