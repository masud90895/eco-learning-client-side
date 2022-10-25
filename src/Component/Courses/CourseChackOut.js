import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseChackOut = () => {
    const chackoutData =useLoaderData()
    console.log(chackoutData);
    return (
        <div>
            <h1>I'm from chack out {chackoutData.project}</h1>
        </div>
    );
};

export default CourseChackOut;