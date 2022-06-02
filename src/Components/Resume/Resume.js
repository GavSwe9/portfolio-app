import React from 'react';

export function Resume() {
    return (
        <div className="w-screen h-screen">
            <object className="w-full h-full block" data="https://gavswe-resume-site.s3.amazonaws.com/GavinSweeneyResume.pdf" type="application/pdf"></object>
        </div>
    )
}