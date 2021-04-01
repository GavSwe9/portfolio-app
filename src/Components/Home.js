import React from 'react'

import { Education } from './HomeComponents/Education';
import { WorkDbacks } from './HomeComponents/WorkDbacks';
import { Projects } from './HomeComponents/Projects';
import { Link } from 'react-router-dom';
import { WorkCapOne } from './HomeComponents/WorkCapOne';

export function Home() {
    return (
        <div className="text-center">

            <div className="lg:flex shadow-lg">
                <Education />
                <WorkDbacks />
                <WorkCapOne />
            </div>

            <div>
                <Projects />
            </div>

            <div className="w-64 mx-auto mb-12 text-md border-2 border-gray-700 text-gray-700 rounded-lg block md:hidden hover:bg-gray-100">
                <Link to="/Travels">Hey Gav, where have you been?</Link>
            </div>
        </div>
    )
}