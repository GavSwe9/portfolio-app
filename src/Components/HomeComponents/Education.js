import React from 'react'
import uvaLogo from '../../Images/UVa-logo-blue.png'

export function Education(){
    return (
        <div className="w-5/6 md:w-2/3 mt-10 mb-10 rounded-md ml-auto mr-auto pt-4 bg-orange-600 text-orange-50 select-none shadow-lg">
            <div className="w-40 mx-auto rounded-full text-lg text-orange-600 font-semibold bg-orange-50">
                Education
            </div>
            <div className="w-full">
                <img className="h-24 mx-auto py-4" src={uvaLogo} />
            </div>
            <div className="text-xl font-semibold">
                University of Virginia
            </div>
            <div className="text-xl">
                Computer Science
            </div>
            <div className="font-semibold mx-5 pb-2 border-b-2 border-orange-200">
                August 2015 - May 2018
            </div>
            <div className="w-5/6 mx-auto py-2">
                <div className="mb-2">
                    Graduated in three years from the University of Virginia with a bachelor’s degree in Computer Science
                </div>
                <div className="mb-2">
                    Coursework includes Computer Programming, Data Structures, Web Development, and Data Analysis 
                </div>
            </div>
        </div>
    )
}