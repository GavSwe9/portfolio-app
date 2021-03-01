import React from 'react'
import MondayRankingsLogo from '../../../Images/MondayRankingsLogo.svg'

export function MondayRankings() {
    return (
        <div className="w-5/6 md:w-7/12 lg:w-1/4 mb-5 border-2 text-gray-700 border-gray-200 rounded-md cursor-pointer hover:border-orange-500 hover:bg-orange-100" onClick={()=> window.open("https://mondayrankings.com/", "_blank")}>
            <div className="py-2">
                <img className="h-20 mx-auto" src={MondayRankingsLogo} alt="" />
            </div>
            <div className="text-2xl mx-5 mb-2 border-b-2 border-orange-200">
                Monday Rankings
            </div>
            <div className="w-5/6 mx-auto">
                <div className="mb-2">
                    My favorite project thus far, MondayRankings allows my friends and I to submit college basketball rankings and aggreates a group poll.
                </div>
                <div className="mb-2">
                    I've opened this up so that anyone can sign up, log in, and submit their rankings, although they will not affect the main aggregate rankings.
                </div>
            </div>
        </div>
    )
}