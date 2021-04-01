import React from 'react'
import dbacksLogo from '../../Images/DBacks-logo.svg'

export function WorkDbacks() {
    return (
        <div className="w-full pt-4 lg:w-1/2 text-dbacks select-none">
            <div className="w-40 mx-auto rounded-full text-lg font-semibold bg-red-200">
                Work
            </div>
            <div className="w-full">
                <img className="h-24 mx-auto py-4" src={dbacksLogo} alt="" />
            </div>
            <div className="text-xl font-semibold">
                Arizona Diamondbacks
            </div>
            <div className="text-xl">
                Software Developer, R&D, Baseball Systems
            </div>
            <div className="font-semibold mx-5 pb-2 border-b-2 border-dbacks">
                October 2017 - January 2021
            </div>
            <div className="w-5/6 mx-auto py-2">
                <div className="mb-2">
                    Worked on the Major League Baseball organization’s internal database, ETL processes, and applications used by front office personnel and player development staff
                </div>
                <div className="mb-2">
                    Daily responsibilities included improving and building new features within the D-Backs proprietary baseball system, along with building and managing ETL processes and backend systems
                </div>
            </div>


        </div>

    )
}