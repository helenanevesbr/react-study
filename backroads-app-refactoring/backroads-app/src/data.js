import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'

/* Instead of that static path which worked in HTML. Now we have dynamic input, like we did in Navbar.js */

export const pageLinks = [
    { id: 1, href: '#home', text: 'home' },
    { id: 2, href: '#about', text: 'about' },
    { id: 3, href: '#services', text: 'services' },
    { id: 4, href: '#tours', text: 'tours' },
]

export const socialLinks = [
    { id: 1, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
    { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
    { id: 3, href: '', icon: 'fab fa-squarespace' },
]

export const services = [
    {   id: 1,
        title: 'Saving Money',
        icon: "fas fa-wallet fa-fw",
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia'
    },
    {   id: 2,
        title: 'Endless Hiking',
        icon: 'fas fa-tree fa-fw',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia'
    },
    {   id: 3,
        title: 'Amazing Comfort',
        icon: 'fas fa-socks fa-fw',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia'
    },
]

export const tours = [
    {
        id: 1,
        title: "Tibet Adventure",
        location: "China",
        duration: 6,
        price: 2100,
        date: "August 26th, 2020",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        img: tour1,
    },
    {
        id: 2,
        title: "Best Of Java",
        location: "Indonesia",
        duration: 11,
        price: 1400,
        date: "October 1th, 2020",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        img: tour2,
    },
    {
        id: 3,
        title: "Explore Hong Kong",
        location: "Hong Kong",
        duration: 8,
        price: 5000,
        date: "September 15th, 2020",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        img: tour3,
    },
    {
        id: 4,
        title: "Kenya Highlights",
        location: "Kenya",
        duration: 20,
        price: 3300,
        date: "December 5th, 2019",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        img: tour4,
    }
]