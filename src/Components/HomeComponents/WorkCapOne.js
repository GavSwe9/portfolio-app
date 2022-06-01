import React from 'react'
import capOneLogo from '../../Images/capital-one-logo.svg'

export function WorkCapOne() {
    return (
        <div className="w-full pt-4 lg:w-1/2 bg-capOne text-blue-50 select-none">
            <div className="w-40 mx-auto rounded-full text-lg font-semibold text-capOne bg-blue-50">
                Work
            </div>
            <div className="w-full">
                <img className="h-24 mx-auto py-4" src={capOneLogo} alt="" />
            </div>
            <div className="text-xl font-semibold">
                Capital One
            </div>
            <div className="text-xl">
                Software Engineer
            </div>
            <div className="font-semibold mx-5 pb-2 border-b-2 border-blue-50">
                March 2021 - Present
            </div>
            <div className="w-5/6 mx-auto py-2">
                <div className="mb-2">
                    Currently Working within Capital One's travel department
                </div>
                <div className="mb-2">
                    Developing APIs in Node to support the company's new airport lounge initiative
                </div>
                <div className="mb-2">
                    Designing and building infrastructure to distribute and update digital wallet passes for customer lounge entry
                </div>
                <div className="mb-2">
                    Building serverless architecture in AWS to support Apple and Android wallet passes initiatives across Capital One
                </div>                
            </div>
        </div>
    )
}