import { IProject } from "../../../models/thumbnail"

const projectArray: IProject[] = [
    {
        id: 1,
        img: './Screenshot (25).png',
        width: 280,
        title: 'Releaf',
        description: 'Improve mental health',
        photos: [
            {
                id: 1,
                title: 'releaf.png',
                width: 750
            },
            {
                id: 2,
                title: 'releaf(1).png',
                width: 750
            },
            {
                id: 3,
                title: 'releaf(2).png',
                width: 750
            }
        ],
        about: `A social platform meant for spreading positivity and healing the soul and mind. We all
            want it. We can share our deepest thoughts, spread positivity and ask the community for 
            advice if we are troubled. It provides real-time communication with other users.
            We tend to not talk about things that are most important. Some of us get really confused at what 
            is wrong with us and unable to bear it, we do something destructive and there is no coming back.
            We don't want to lose people that are close to us. To be very honest, the idea of this app came
            to me when a very young actor committed suicide, and this is the best I can do at this moment
            to try make a change. The platform has much room for improvements and it is still under 
            development. The technologies used are ASP .NET Core and React JS.`
    },
    {
        id: 2,
        img: './Screenshot (26).png',
        width: 510,
        title: 'Foodhall',
        description: 'A custom food ordering site',
        photos: [
            {
                id: 1,
                title: 'foodhall.png',
                width: 750
            },
            {
                id: 2,
                title: 'foodhall(1).png',
                width: 750
            },
            {
                id: 3,
                title: 'foodhall(2).png',
                width: 750
            }
        ],
        about: `An e-commerce web app to order food on the go. It has a colorful interface as a food
            ordering site should be. Interactive and easy to use. This app is built on ASP .NET Core
            and jQuery. I used this project for learning so it is not perfect and I didn't take the 
            trouble to perfect it. But it is, of course, good enough and provides all the basic 
            functionalities.`
    },
    {
        id: 3,
        img: './Screenshot (10).png',
        width: 280,
        title: 'Reactivities',
        description: 'Event managing social media',
        photos: [
            {
                id: 1,
                title: './reactivities.png',
                width: 750
            },
            {
                id: 2,
                title: './reactivities(1).png',
                width: 750
            },
            {
                id: 3,
                title: './reactivities(2).png',
                width: 750
            }
        ],
        about: `A social platform to create and manage activities. It is similar to events in facebook.
            Users can chat globally with other users, follow other users, upload pictures and much more.
            A complete, very secure site built with ASP .NET Core and React JS.`
    },
    {
        id: 4,
        img: './Screenshot (27).png',
        width: 550,
        title: 'Rafsan the Chotobhai',
        description: 'A youtuber blog',
        photos: [
            {
                id: 1,
                title: './rafsan.png',
                width: 750
            },
            {
                id: 2,
                title: './rafsan(1).png',
                width: 750
            }
        ],
        about: `Rafsan The Chotobhai is a youtuber and this site was a prototype of his blog built for 
            him. Although the company decided to use another design to reflect his personality, this blog
            site is perfect for any youtuber. HTML, CSS and jQuery does all the magic.`
    },
    {
        id: 5,
        img: './Screenshot (29).png',
        width: 540,
        title: 'Coast 2 Coast',
        description: 'Garments manufacturing factory',
        photos: [
            {
                id: 1,
                title: './c2c.png',
                width: 750
            },
            {
                id: 2,
                title: './c2c(1).png',
                width: 750
            }
        ],
        about: `A design concept for a garments factory website. It shows some basic information of the 
            company known as Coast 2 Coast. It was built merely for getting a concept. The company already
            has a site of their own.`
    }
]

export default projectArray