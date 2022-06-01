import React from 'react'
import { DraftPrince } from './ProjectComponents/DraftPrince'
import { Github } from './ProjectComponents/Github'
import { IndexNfl } from './ProjectComponents/IndexNfl'
import { MondayRankings } from './ProjectComponents/MondayRankings'
import { ZedExchange } from './ProjectComponents/ZedExchange'

export function Projects() {
    return (
        <div>
            <div className="w-64 mx-auto mb-4 mt-8 rounded-full text-lg text-gray-700 font-semibold bg-gray-200 select-none">
                Links & Projects
            </div>
            <div className="flex justify-evenly flex-wrap">
                <Github />
                <MondayRankings />
                {/* <DraftPrince /> */}
                {/* <ZedExchange /> */}
                <IndexNfl />
            </div>
        </div>
    )
}