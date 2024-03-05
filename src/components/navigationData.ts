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
        title: "Manage Team", icon: PeopleOutlinedIcon, href: "/Team"
    },
    {
        title: "Contacts Information", icon: ContactsOutlinedIcon, href: "/Contacts",
    },
    {
        title: "Invoices Balances", icon: ReceiptOutlinedIcon, href: "/Invoices",
    },
]

export const navigationItems2: NavigationItem[] = [
    {
        title: "Profile Form", icon: PersonOutlinedIcon, href: "/Form"
    },
    {
        title: "Calendar", icon: CalendarTodayOutlinedIcon, href: "/Calendar"
    },
    {
        title: "FAQ Page", icon: HelpOutlineOutlinedIcon, href: "/Faq",
    },
]

export const navigationItems3: NavigationItem[] = [
    {
        title: "Bar Chart", icon: BarChartOutlinedIcon, href: "/Bar"
    },
    {
        title: "Pie Chart", icon: PieChartOutlineOutlinedIcon, href: "/Pie"
    },
    {
        title: "Line Chart", icon: TimelineOutlinedIcon, href: "/Line"
    },
    { title: "Geography Chart", icon: MapOutlinedIcon, href: "/Geography" },
]