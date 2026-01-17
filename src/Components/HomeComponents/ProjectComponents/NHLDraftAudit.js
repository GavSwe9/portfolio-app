import React from 'react'

export function NHLDraftAudit() {
    return (
        <div className="w-5/6 md:w-7/12 lg:w-1/4 mb-5 text-gray-700 border-2 border-gray-200 rounded-md cursor-pointer hover:border-blue-500 hover:bg-blue-100" onClick={() => window.open("https://nhldraftaudit.com/", "_blank")}>
            <div className="h-24 py-2 text-7xl">
                <img className="h-20 mx-auto" src={"https://assets.nhle.com/logos/nhl/svg/NHL_light.svg"} alt="" />
            </div>
            <div className="text-2xl mx-5 mb-2 border-b-2 border-blue-200">
                NHL Draft Audit
            </div>
            <div className="w-5/6 mx-auto">
                <div className="mb-2">
                    A tool to look back at historical NHL drafts and compare the on-ice output of players to their draft class and position.
                </div>
                <div className="mb-2">
                    AWS RDS MySql database with data pipelines written in Go to pull data from the NHL API
                </div>
                <div className="mb-2">
                    Serverless API written in GO, deployed as AWS Lambdas
                </div>
                <div className="mb-2">
                    Website built with React and TypeScript
                </div>
            </div>
        </div>
    )
}
