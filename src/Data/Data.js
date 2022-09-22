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
        heading: "Foods",
        path: '/addfood'
    },
    {
        icon: UilEye,
        heading: "View Foods",
        path: '/viewfood'
    },
    {
        icon: UilSearchAlt,
        heading: "Explore",
        path: '/explore'
    },
    {
        icon: UilClapperBoard,
        heading: "Posts",
        path: '/posts'
    },
    {
        icon: UilEye,
        heading: "View Posts",
        path: '/viewposts'
    },
    {
        icon: UilNewspaper,
        heading: "Stories",
        path: '/stories'
    },
    {
        icon: UilEye,
        heading: "View Stories",
        path: '/viewstories'
    },
    {
        icon: UilChannel,
        heading: "Channels",
        path: '/channels'
    },
    {
        icon: UilEye,
        heading: "View Channels",
        path: '/viewchannels'
    },
    {
        icon: UilFileCheck,
        heading: "Events",
        path: '/events'
    },
    {
        icon: UilEye,
        heading: "View Events",
        path: '/viewevents'
    },
    {
        icon: UilClipboardAlt,
        heading: "Orders",
        path: '/orders'
    },
    {
        icon: UilUsersAlt,
        heading: "Users",
        path: '/users'
    },
    {
        icon: UilBell,
        heading: "Add Notifications",
        path: '/notifications'
    },
    {
        icon: UilEye,
        heading: "Notifications",
        path: '/viewnotifications'
    },
    {
        icon: UilHipchat,
        heading: "Chat",
        path: '/chat'
    },
    {
        icon: UilUserCircle,
        heading: "Account",
        path: '/account'
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