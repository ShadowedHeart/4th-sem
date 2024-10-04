import defaultImage from "../resources/images/defaultImage.jpg"
import { CodeRounded, ContactPageRounded, FacebookRounded, HomeRounded, SchoolRounded } from "@mui/icons-material";

export const userProfileDefaultData = {
    "Name"      :"Pravesh Subba",
    "UserName"  :"_subba",
    "DOB"       :"27-04-2024",
    "Address"   :"Muddenahalli, Chickballapur",
    "EmailID"   :"praveshsubba81@gmail.com",
    "PhoneNo"   :"93482344",
    "Description":"I'm a computer science student",
    "University" : "SSSIHL",
    "Photo"     : defaultImage
}

export const IconTitleMap={
    "Home": <HomeRounded className="icon"/>,
    "Academics": <SchoolRounded className="icon"/>,
    "Projects": <CodeRounded className="icon"/>,
    "Social Profiles": <FacebookRounded className="icon"/>,
    "Resume": <ContactPageRounded className="icon"/>
}

export const DEFAULT_SIDE_MENU=[
    {
        "title": "Home",
        "icon":  IconTitleMap.Home,
        "link": "/home"
    },
    {
        "title": "Academics",
        "icon": IconTitleMap.Academics, 
        "link": "/academics"
    },
    {
        "title": "Projects",
        "icon": IconTitleMap.Projects,
        "link": "/projects"
    },
    {
        "title": "Social Profiles",
        "icon": IconTitleMap["Social Profiles"],
         "link": "/social-profile"
    },
    {
        "title": "Resume",
        "icon": IconTitleMap.Resume,
         "link": "/resume"
    }
]


export const DEFAULT_DRAWER_FLAG = true;
export const DEFAULT_ACTIVE_PAGE = DEFAULT_SIDE_MENU[0].title
export const drawerWidth = 300;


export const DarkTheme              = "dark"
export const LightTheme             = "light"
