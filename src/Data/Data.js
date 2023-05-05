import{
    UilEstate,
    UilPizzaSlice,
    UilSearchAlt,
    UilClapperBoard,
    UilNewspaper,
    UilChannel,
    UilFileCheck,
    UilClipboardAlt,
    UilUsersAlt,
    UilBell,
    UilHipchat,
    UilUserCircle,
    // UilPackage,
    // UilChart,
    // UilSignOutAlt,
    UilMoneyWithdrawal,
    UilUsdSquare,
    UilEye
} from "@iconscout/react-unicons";

//Side Bar
export const SidebarData = [
    {
        icon: UilEstate,
        heading: "Dashboard",
        path: '/'
    },
    {
        icon: UilPizzaSlice,
        heading: "Courses",
        path: '/courses',
        subMenu: [
            {
                icon: UilPizzaSlice,
        heading: "Course",
        path: '/course',
            },
            {
                icon: UilEye,
        heading: "Add Course",
        path: '/addcourse'
            },
            {
                icon: UilEye,
        heading: "Edit Course",
        path: '/editcourse'
            },
        ]
    },
    {
        icon: UilEye,
        heading: "Students",
        path: '/students',
        subMenu: [
            {
                icon: UilPizzaSlice,
        heading: "Student",
        path: '/student',
            },
        ]
    },
    {
        icon: UilSearchAlt,
        heading: "Payments",
        path: '/explore'
    },
    {
        icon: UilClapperBoard,
        heading: "Profile",
        path: '/profile',
        subMenu: [
            {
                icon: UilPizzaSlice,
        heading: "Edit profile",
        path: '/editprofile',
            },
        ]
    },
];


export const CardsData =[
    {
        title: "Sales",
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value: "25,970",
        png: UilUsdSquare,
        series:[
            {
                name: "Sales",
                data: [31,40,28,51,42,109,100],
            },
        ],
    },

    {
        title: "Revenue",
        color:{
            backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
            boxShadow: "0px 10px 20px 0px #FDC0C7",
        },
        barValue: 80,
        value: "14,270",
        png: UilMoneyWithdrawal,
        series: [
            {
                name: "Revenue",
                data: [10,100,50,770,80,30,40],
            },
        ],
    },

    {
        title: "Expenses",
        color: {
            backGround: "linear-gradient(rgb(248,212,154) -146.42%, rgb(255 202 113) -46.42%)",
            boxShadow: "0px 10px 20px 0px #F9D59B",
        },
        barValue: 60,
        value: "4,270",
        png: UilClipboardAlt,
        series:[
            {
                name: "Expenses",
                data: [10,25,15,30,12,15,20],
            },
        ],
    },
];