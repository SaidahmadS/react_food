import {
    HomeIcon,
    OrderIcon,
    MessageIcon,
    NotificationIcon,
    SettingsIcon,
    LogoutIcon
} from '../assets/icons/icons'

export const dataUrl = [
    { text: 'home', path: '/homepage', icon: <HomeIcon/> },
    { text: 'order', path: '/orderpage', icon: <OrderIcon/> },
    { text: 'message', path: '/messagepage', icon: <MessageIcon/> },
    { text: 'notification', path: '/notificationpage', icon: <NotificationIcon/> },
    { text: 'settings', path: '/settings', icon: <SettingsIcon/> },
    { text: 'logout', path: '/logoutpage', icon: <LogoutIcon/> },
]

export const buttonUrl = [
    { text: 'Hot Dishes', path: '/homepage/hotdishes'},
    { text: 'Cold Dishes', path: '/homepage/colddishes'},
    { text: 'Soup', path: '/homepage/soup'},
    { text: 'Grill', path: '/homepage/grill'},
    { text: 'Appetizer', path: '/homepage/appetizer'},
    { text: 'Dessert', path: '/homepage/dessert'},
]


