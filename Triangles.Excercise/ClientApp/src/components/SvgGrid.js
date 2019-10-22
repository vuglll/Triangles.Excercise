import React from 'react';

const SvgGrid =(props) => (
    <div>
        <svg width="601" height="601" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="gray" strokeWidth="0.5" />
                </pattern>
                <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                    <rect width="100" height="100" fill="url(#smallGrid)" />
                    <path d="M 100 0 L 0 0 0 100" fill="none" stroke="gray" strokeWidth="1" />
                </pattern>
            </defs>

            <g>
                <rect width="100%" height="100%" fill="url(#grid)" />
                <polygon points={props.points} fill="blue" stroke="blue" strokeWidth="0.5" />
            </g>
        </svg>
    </div>
);


export default SvgGrid;

/*
<div>
        <svg width="601" height="601" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="gray" stroke-width="0.5" />
                </pattern>
                <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                    <rect width="100" height="100" fill="url(#smallGrid)" />
                    <path d="M 100 0 L 0 0 0 100" fill="none" stroke="gray" stroke-width="1" />
                </pattern>
            </defs>

            <g>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </g>
        </svg>
    </div>

*/