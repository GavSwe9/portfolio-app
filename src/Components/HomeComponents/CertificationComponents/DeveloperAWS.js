import React from 'react'
import DeveloperBadge from '../../../Images/awsDev.png'

export function DeveloperAWS() {
    return (
        <div className="w-5/6 md:w-7/12 lg:w-5/12 mb-5 text-gray-700 border-2 border-gray-200 rounded-md cursor-pointer hover:border-blue-500 hover:bg-blue-100" onClick={()=> window.open("https://www.credly.com/badges/df7e657a-2da0-4216-9082-d830c3ba696d", "_blank")}>
            <div className="h-24 py-2">
                <img className="h-20 mx-auto" src={DeveloperBadge} />
            </div>
            <div className="text-2xl mx-5 mb-2 border-b-2 border-blue-200">
                AWS Certified Developer - Associate
            </div>
            <div className="w-5/6 mx-auto">
                <div className="mb-2">
                    VN: DQ45XL8LPM14Q1C9
                </div>
            </div>
        </div>
    )
}
