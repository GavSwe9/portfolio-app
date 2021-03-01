import React from 'react';

export function Resume() {
    return (
        <div className="w-screen h-screen">
            <object className="w-full h-full block" data="https://gavswe-resume.s3.amazonaws.com/Gavin_Sweeney_Resume.pdf" type="application/pdf"></object>
        </div>
    )
}