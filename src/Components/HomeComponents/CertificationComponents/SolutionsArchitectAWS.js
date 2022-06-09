import React from 'react'
import SolutionsArchitectBadge from '../../../Images/awsSA.png'

export function SolutionsArchitectAWS() {
    return (
        <div className="w-5/6 md:w-7/12 lg:w-5/12 mb-5 text-gray-700 border-2 border-gray-200 rounded-md cursor-pointer hover:border-blue-500 hover:bg-blue-100" onClick={()=> window.open("https://www.credly.com/badges/e65ec887-9cc1-4630-8848-a06098212472", "_blank")}>
            <div className="h-24 py-2">
                <img className="h-20 mx-auto" src={SolutionsArchitectBadge} />
            </div>
            <div className="text-2xl mx-5 mb-2 border-b-2 border-blue-200">
                AWS Certified Solutions Architect - Associate
            </div>
            <div className="w-5/6 mx-auto">
                <div className="mb-2">
                    VN: 05EWW4NLH21EQXW3
                </div>
            </div>
        </div>
    )
}