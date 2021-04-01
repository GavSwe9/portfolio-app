import React from 'react';
import { Link } from 'react-router-dom';
import UnitedStates from './UnitedStates';

export default function Maps() {
    return (
        <div>
            {/* <div className="w-32 ml-5 my-5 text-md border-2 border-gray-700 text-gray-700 text-center rounded-lg hover:bg-gray-100">
                <Link to="/Home">Back to Home</Link>
            </div> */}
            <UnitedStates />
        </div>
    )
}