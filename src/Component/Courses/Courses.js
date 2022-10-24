import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const courses = useLoaderData()

    return (
        <div className="md:flex flex-no-wrap">
            <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
                <div className="w-full h-full rounded border-dashed border-2 border-gray-300">{courses.length}</div>
            </div>
        </div>
    );
};

export default Courses;