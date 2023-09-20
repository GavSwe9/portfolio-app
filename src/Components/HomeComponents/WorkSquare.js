import React from 'react'
import squareLogo from '../../Images/square-logo.svg'

export function WorkSquare() {
    return (
        <div className="w-full pt-4 lg:w-1/2 bg-gray-900 text-gray-50 select-none">
            <div className="w-40 mx-auto rounded-full text-lg font-semibold text-gray-900 bg-gray-50">
                Work
            </div>
            <div className="w-full">
                <img className="h-24 w-48 mx-auto py-4" src={squareLogo} alt="" />
            </div>
            <div className="text-xl font-semibold">
                Square
            </div>
            <div className="text-xl">
                Software Engineer
            </div>
            <div className="font-semibold mx-5 pb-2 border-b-2 border-gray-200">
                January 2023 - Present
            </div>
            <div className="w-5/6 mx-auto py-2">
                <div className="mb-2">
                    Currently Working within Square's Payment Price & Cost Platform team
                </div>
            </div>
        </div>
    )
}