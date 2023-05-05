import MainDash from "../components/MainDash/MainDash"
import { AddCourse, Course, Courses, EditCourse, EditProfile, Profile, Student, Students } from "../screens"

const ROUTES = [
    {
        path:'/',
        element: <MainDash />
    },
    {
        path:'/courses',
        element: <Courses />
    },
    {
        path:'/course',
        element: <Course />
    },
    {
        path:'/editcourse',
        element: <EditCourse />
    },
    {
        path:'/addcourse',
        element: <AddCourse />
    },
    {
        path:'/students',
        element: <Students />
    },
    {
        path:'/student',
        element: <Student />
    },
    {
        path:'/profile',
        element: <Profile />
    },
    {
        path:'/editprofile',
        element: <EditProfile />
    },
]

export default ROUTES;