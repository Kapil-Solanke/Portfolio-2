import sn from '../assets/svg/projects/sn.jpg'
import hz from '../assets/svg/projects/real_estate_pic.png'
import sy from '../assets/svg/projects/snappy_1.jpg'
import rz from '../assets/svg/projects/razorpay_pic.png'
import wr from '../assets/svg/projects/weather_pic.png'

export const projectsData = [
    {
        id: 1,
        projectName: 'Study Notion',
        projectDesc: 'Study Notion is an EdTech website.On these site students can purchase courses and learn, teachers can create courses and add video lectures. ',
        tags: ['React', 'MongoDB' ,'NodeJS', 'Express'],
        code: 'https://github.com/Kapil-Solanke/StudyNotion',
        demo: 'https://study-notion-tau.vercel.app/',
        image: sn
    },
    {
        id: 2,
        projectName: 'Homyz',
        projectDesc: 'This is complete frontend of a Real Estate company  created using React JS and some more libs and Hooks like -> framer-motion, react-accessible-accordion, react-countup, react-icons, react-outside-click-handler, swiper.',
        tags: ['React', 'Framer motion','Tailwind CSS'],
        code: 'https://github.com/Kapil-Solanke/Homyz',
        demo: 'https://amazing-twilight-a11d84.netlify.app/',
        image: hz
    },
    {
        id: 3,
        projectName: 'Snappy',
        projectDesc: 'Snappy is a simple chat application on which you can chat with your friends and also set your on avatar. It was built using React, SocketIo and MongoDB as database. ',
        tags: ['React', "MongoDB","SocketIo","NodeJS"],
        code: 'https://github.com/Kapil-Solanke/Chat_Application',
        demo: 'https://snappy-tech.netlify.app/',
        image: sy
    },
    {
        id: 4,
        projectName: 'Razorpay Clone',
        projectDesc: 'This is a complete Frontend of Razorpay.It was built using HTML5, TailwindCSS.',
        tags: ['HTML5', 'TailwindCSS'],
        code: 'https://github.com/Kapil-Solanke/RazorpayClone',
        demo: 'https://quiet-moonbeam-23ff88.netlify.app/',
        image: rz
    },
    {
        id: 5,
        projectName: 'Weather App',
        projectDesc: 'This is simple weather app which gives weather information of given city and country. You can also get weather information of your current location.',
        tags: ['HTML', 'CSS', 'Javascript','Fetch Api'],
        code: 'https://github.com/Kapil-Solanke/WeatherApp',
        demo: 'https://darling-pie-8080a6.netlify.app/',
        image: wr
    },
    
]

