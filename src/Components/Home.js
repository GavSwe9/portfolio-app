import React from 'react'

import { Education } from './HomeComponents/Education';
import { Work } from './HomeComponents/Work';
import { Projects } from './HomeComponents/Projects';
import { Link } from 'react-router-dom';

export function Home() {
    return (
        <div className="text-center">

            <div className="md:flex shadow-lg">
                <Education />
                <Work />
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