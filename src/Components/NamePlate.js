import React from 'react'
import { Link } from 'react-router-dom'
import gavswe from '../Images/gavswe.png'

export function NamePlate() {
    return (
        <div className="pb-2 bg-gray-700 text-gray-100 select-none text-center">
            <div className="w-full">
                <img className="w-24 mx-auto" src={gavswe} />
            </div>
            <div className="text-3xl">
                Gavin Sweeney
            </div>
            <div className="text-md font-semibold">
                Software Engineer
            </div>
            <div className="flex justify-items-center">
                <div className="w-full md:w-1/3"></div>
                <div className="w-1/3">
                    <div className="w-28 mt-1 mx-auto text-md font-semibold bg-gray-100 text-gray-700 rounded-md cursor-pointer flex justify-center" onClick={() => window.open("https://gavswe-resume.s3.amazonaws.com/Gavin_Sweeney_Resume.pdf", "_blank")}>
                        <div>
                            Resume
                        </div>
                        <div className="ml-1">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3">
                    <div className="w-64 mr-2 text-md border-2 border-gray-100 rounded-lg float-right hidden md:block hover:bg-gray-600">
                        <Link to="/Travels">Hey Gav, where have you been?</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}