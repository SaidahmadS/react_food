import { 
    HeartIcon,
    RestaurantIcon,
    ProductsIcon,
    NotificationIcon,
    SecureIcon,
    AboutUsIcon
} from '../../assets/icons/BaseIcons';

export const data = [
    {
      path: "/settings/appereance",
      text: "Appereance",
      subtext: "Dark and Light mode, Font size",
      icon: <HeartIcon />,
    },
    {
      path: "/settings/restaurant",
      text: "Your Restaurant",
      subtext: "Dark and Light mode, Font size",
      icon: <RestaurantIcon />,
    },
    {
      path: "/settings/managment",
      text: "Products Management",
      subtext: "Manage your product, pricing, etc",
      icon: <ProductsIcon />,
    },
    {
      path: "/settings/notification",
      text: "Notifications",
      subtext: "Customize your notifications",
      icon: <NotificationIcon />,
    },
    {
      path: "/settings/security",
      text: "Security",
      subtext: "Configure Password, PIN, etc",
      icon: <SecureIcon />,
    },
    {
      path: "/settings/aboutus",
      text: "About Us",
      subtext: "Find out more about Posly",
      icon: <AboutUsIcon />,
    },
];