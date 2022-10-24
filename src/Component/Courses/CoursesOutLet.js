import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import CoursesSiteBar from './CoursesSiteBar';

export const CoursesContext = createContext()
const CoursesOutLet = () => {
    const courses = useLoaderData()
    return (
        <CoursesContext.Provider value={courses}>
            <CoursesSiteBar/>
            <Outlet/>
        </CoursesContext.Provider>
    );
};

export default CoursesOutLet;