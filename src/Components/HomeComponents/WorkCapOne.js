import React from 'react'
import capOneLogo from '../../Images/capital-one-logo.svg'

export function WorkCapOne() {
    return (
        <div className="w-full pt-4 lg:w-1/2 bg-white text-capOne select-none">
            <div className="w-40 mx-auto rounded-full text-lg font-semibold text-blue-50 bg-capOne">
                Work
            </div>
            <div className="w-full">
                <img className="h-24 w-48 mx-auto py-4" src={capOneLogo} alt="" />
            </div>
            <div className="text-xl font-semibold">
                Capital One
            </div>
            <div className="text-xl">
                Software Engineer
            </div>
            <div className="font-semibold mx-5 pb-2 border-b-2 border-capOne">
                March 2021 - December 2022
            </div>
            <div className="w-5/6 mx-auto py-2">
                <div className="mb-2">
                    Worked within Capital One's travel department
                </div>
                <div className="mb-2">
                    Developed APIs in Node to support the company's new airport lounge initiative
                </div>
                <div className="mb-2">
                    Designed and built infrastructure to distribute and update digital wallet passes for customer lounge entry
                </div>
                <div className="mb-2">
                    Built serverless architecture in AWS to support Apple and Android wallet passes initiatives across Capital One
                </div>                
            </div>
        </div>
    )
}