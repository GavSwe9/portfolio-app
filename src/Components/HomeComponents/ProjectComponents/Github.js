import React from 'react'
import gitLogo from '../../../Images/Git.png'

export function Github() {
    return (
        <div className="w-5/6 md:w-7/12 lg:w-1/4 mb-5 text-gray-700 border-2 border-gray-200 rounded-md cursor-pointer hover:border-cyan-500 hover:bg-cyan-100" onClick={()=> window.open("https://github.com/GavSwe9", "_blank")}>
            <div className="h-24 py-2">
                <img className="h-20 mx-auto" src={gitLogo} />
            </div>
            <div className="text-2xl mx-5 mb-2 border-b-2 border-cyan-200">
                Github
            </div>
            <div className="w-5/6 mx-auto">
                <div className="mb-2">
                    I keep a few things on Github, including repositiories for projects such as Monday Rankings and Index NFL.
                </div>
            </div>
        </div>
    )
}