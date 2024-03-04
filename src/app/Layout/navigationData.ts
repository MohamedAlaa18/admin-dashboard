import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

interface NavigationItem {
    title: string;
    icon: React.ElementType;
    href: string;
}

export const navigationItems1: NavigationItem[] = [
    {
        title: "Dashboard", icon: HomeOutlinedIcon, href: "/"
    },
    {
        title: "Manage Team", icon: PeopleOutlinedIcon, href: "/team"
    },
    {
        title: "Contacts Information", icon: ContactsOutlinedIcon, href: "/contacts",
    },
    {
        title: "Invoices Balances", icon: ReceiptOutlinedIcon, href: "/invoices",
    },
]

export const navigationItems2: NavigationItem[] = [
    {
        title: "Profile Form", icon: PersonOutlinedIcon, href: "/form"
    },
    {
        title: "Calendar", icon: CalendarTodayOutlinedIcon, href: "/calendar"
    },
    {
        title: "FAQ Page", icon: HelpOutlineOutlinedIcon, href: "/faq",
    },
]

export const navigationItems3: NavigationItem[] = [
    {
        title: "Bar Chart", icon: BarChartOutlinedIcon, href: "/bar"
    },
    {
        title: "Pie Chart", icon: PieChartOutlineOutlinedIcon, href: "/pie"
    },
    {
        title: "Line Chart", icon: TimelineOutlinedIcon, href: "/line"
    },
    { title: "Geography Chart", icon: MapOutlinedIcon, href: "/geography" },
]