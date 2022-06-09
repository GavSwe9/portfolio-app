import React from 'react'
import { DeveloperAWS } from './CertificationComponents/DeveloperAWS'
import { SolutionsArchitectAWS } from './CertificationComponents/SolutionsArchitectAWS'
import { DraftPrince } from './ProjectComponents/DraftPrince'
import { Github } from './ProjectComponents/Github'
import { IndexNfl } from './ProjectComponents/IndexNfl'
import { MondayRankings } from './ProjectComponents/MondayRankings'
import { ZedExchange } from './ProjectComponents/ZedExchange'

export function Certifications() {
    return (
        <div>
            <div className="w-64 mx-auto mb-4 mt-3 rounded-full text-lg text-gray-700 font-semibold bg-gray-200 select-none">
                Certifications
            </div>
            <div className="flex justify-around flex-wrap">
                <SolutionsArchitectAWS />
                <DeveloperAWS />
            </div>
        </div>
    )
}
