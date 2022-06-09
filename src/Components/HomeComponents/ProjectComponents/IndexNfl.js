import React from 'react'

export function IndexNfl() {
    return (
        <div className="w-5/6 md:w-7/12 lg:w-1/4 mb-5 text-gray-700 border-2 border-gray-200 rounded-md cursor-pointer hover:border-blue-500 hover:bg-blue-100" onClick={()=> window.open("https://indexnfl.com/", "_blank")}>
            <div className="h-24 py-2 text-7xl">
                <img className="h-20 mx-auto" src={"https://static.www.nfl.com/image/upload/v1554321393/league/nvfr7ogywskqrfaiu38m.svg"} alt="" />
            </div>
            <div className="text-2xl mx-5 mb-2 border-b-2 border-blue-200">
                Index NFL
            </div>
            <div className="w-5/6 mx-auto">
                <div className="mb-2">
                    An NFL statistics website with interactive leaderboards and data visualizations.
                </div>
                <div className="mb-2">
                    AWS RDS MySql database with Python data pipelines to pull data from the NFL API
                </div>
                <div className="mb-2">
                    Serverless Python API deployed as AWS Lambdas
                </div>
                <div className="mb-2">
                    Website built with React showing stat leaders and team play type tendency visualizations based on situational information
                </div>
            </div>
        </div>
    )
}
