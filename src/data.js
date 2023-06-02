import linkedin from './assets/LinkedIN.svg'
import github from './assets/Github_white.svg'

export default {
    socials: [
        {
            "alt": "github icon",
            "icon": github,
            "link": "https://github.com/cossminuu"
        },
        {
            "alt": "linkedin icon",
            "icon": linkedin,
            "link": "https://www.linkedin.com/in/cosmin-dumitriu-b984161ba/"
        }
    ],

    ///////////////////////////// EXPERIENCE SECTION DETAILS ////////////////////////////
    education: [{
        id: 0,
        specialization: "Web, Apps & Digital Media",
        universityName: "Mohole School - Milano",
        url: "https://scuola.mohole.it",
        years: "2019-2020",
        descriptionList: [
            {
                id: 1,
                title: 'Modern JavaScript:',
                description: 'Comprehensive exploration of advanced JavaScript concepts, including ES6+ syntax, asynchronous programming, functional programming, and frameworks/libraries like React.js or Vue.js. Practical application of JavaScript in web development projects.'
            },
            {
                id: 2,
                title: 'Web Design:',
                description: 'In-depth study of web design principles, including user interface (UI) and user experience (UX) design. Focus on creating visually appealing, intuitive, and responsive web interfaces.'
            },
            {
                id: 3,
                title: 'Mobile App Development:',
                description: 'In-depth understanding of mobile app development principles, frameworks, and best practices.'
            },
            {
                id: 4,
                title: 'WordPress & PHP:',
                description: 'In-depth study of WordPress as a content management system (CMS) and PHP as a server-side scripting language.'
            },
            {
                id: 5,
                title: 'Workshops:',
                description: 'Engaging workshops focusing on industry trends, emerging technologies, and practical skills.'
            }
        ]
    },
    {
        id: 1,
        specialization: "Web, Apps & Digital Media",
        universityName: "Mohole School - Milano",
        url: "https://scuola.mohole.it",
        years: "2018-2019",
        descriptionList: [
            {
                id: 2,
                title: 'HTML & CSS:',
                description: 'Introduction to web development fundamentals, including HTML, CSS, and responsive design. Learn how to create visually appealing and user-friendly websites using industry-standard practices.'
            },
            {
                id: 3,
                title: 'JavaScript:',
                description: 'Introduction to JavaScript, the programming language of the web. Cover the fundamentals of JavaScript, including variables, data types, control flow, functions, and object-oriented programming concepts.'
            },
            {
                id: 4,
                title: 'Graphic Design (Illustrator, Photoshop):',
                description: 'Introduction to graphic design principles and industry-standard tools like Adobe Illustrator and Photoshop. Learn how to create digital graphics, logos, and images for web and print.'
            },
            {
                id: 6,
                title: 'Marketing:',
                description: 'Introduction to marketing principles and strategies for the web. Understand the basics of digital marketing, including SEO, social media marketing, content marketing, and analytics.'
            },
            {
                id: 7,
                title: 'Workshops:',
                description: 'Engaging workshops focusing on industry trends, emerging technologies, and practical skills. '
            }
        ]
    }
    ],
    ///////////////////////////// SKILLS LIST ////////////////////////////
    skills: [
        {
            title: 'Technical',
            list: [
                'HTML5',
                'CSS3',
                'JavaScript',
                'TypeScript',
                'React JS',
                'React Native',
                'Redux',
                'Vue JS',
                'Jest',
                'React Testing Library',
                'Bootstrap',
                'Core-UI',
                'Material-UI',
                'Git'
            ]
        },
        {
            title: 'Soft',
            list: [
                'Communication',
                'Collaboration and Teamwork',
                'Problem-Solving',
                'Adaptability',
                'Time Management',
                'Attention to Detail',
                'Creativity',
                'Critical Thinking',
                'Emotional Intelligence',
                'Continuous Learning'
            ]
        },
        {
            title: 'Design',
            list: [
                'Adobe Illustrator',
                'Figma',
                'UI/UX',
                'Wireframing',
                'Prototyping',
                'Responsive Design'
            ]

        },
        {
            title: 'Languages',
            list: [
                'Romanian',
                'English',
                'Italian'
            ]
        },

    ],

    work: [
        {
            id: 0,
            position: "Frontend Developer",
            jobType: "Full-Time",
            company: "L-Lynch Plant Hire & Haulage LTD / Hemel Hempstead, UK",
            url: "https://www.l-lynch.com/",
            years: "01/2022 - present",
            responsabilities: [
                "Develop and maintain robust frontend components and user interfaces for internal company projects, including a comprehensive business management dashboard with a job posting section, seamless machine location integration using Google Maps, efficient user management features, streamlined payroll management, intuitive scheduler for working shifts and more.",
                "Utilize JavaScript, React.js, and React Native frameworks to create interactive and responsive user interfaces.",
                "Collaborate with cross-functional teams, including designers and backend developers, to translate project requirements and design mockups into functional frontend solutions.",
                "Implement core-ui components and libraries to ensure consistency and efficiency in frontend development.",
                "Follow Scrum methodologies to plan and execute project sprints, participate in daily stand-ups, and contribute to sprint reviews and retrospectives.",
                "Test and debug frontend components across various devices and browsers to ensure cross-browser compatibility and a seamless user experience.",
            ]
        },
        {
            id: 1,
            position: "Junior Web Developer",
            jobType: "Full-Time",
            company: 'XRF Digital - Web Agency / Southam, UK',
            url: 'https://xrf.digital/',
            years: '05/2021 - 12/2021',
            responsabilities: []
        },
        {
            id: 2,
            position: "Junior Frontend Developer - React",
            jobType: "Full-Time",
            company: 'Netduma LTD / Cambridge, UK',
            url: 'https://netduma.com/',
            years: '03/2021 - 05/2021',
            responsabilities: []
        },
        {
            id: 3,
            position: "Coordinator on site / recruiter",
            jobType: "Full-Time",
            company: "Orbital Recruitment LTD / London, Uk",
            url: "https://www.orbital-recruitment.co.uk/",
            years: "04/2018-08/2018",
            responsabilities: [
                "Processing and organization of work shifts (Biopanel)",
                "Accounting",
                "Contract management and documentation relating to the hiring process"
            ]
        },
    ],
}