// import { initializeApp } from "firebase/app";
// import {getFirestore, collection , doc, setDoc, getDocs} from "firebase/firestore";
// import {Client, Storage} from "appwrite";
// import { firebaseConfig, appwrite_pid } from "@/app/config";

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const client = new Client();
// client.setEndpoint('https://cloud.appwrite.io/v1').setProject(appwrite_pid);
// const storage = new Storage(client);

let events_data = [];
// async function loadAct(){
//     let counter = 1;
//     const snap = await getDocs(collection(db, "activities"));
//     snap.forEach((docs) => {
//         const data = docs.data();
//         const actimg =   storage.getFilePreview('679d7ffd002633f04d7b',`activity-${counter}`);
//         const title = data.title;
//         const desc = data.description;
//         const actobj = {
//             title:title,
//             desc:desc,
//             img:actimg
//         }
//         counter+=1;
//         console.log(actobj);
//         events_data.push(actobj);
//     });
// }
// console.log(events_data);
// loadAct();


events_data = [
    {
        "title": "Supernova",
        "desc": "Supernova is a culmination of all events encompassing astronomy in the Annual Technical Festival of IIT (BHU). The events under it are based on observational astronomy (Exploring The Interstellar), capturing them (Astrophotography), problem solving (Scientists Of Utopia), paper presentation and a quiz on astronomy facts (Astro-Quiz).",
        "img": "/supernova.png",
        "link": "https://unstop.com/college-fests/technex25-indian-institute-of-technology-banaras-hindu-university-300587"
    },
    {
        "title": "National Space Day",
        "desc": "Hosted in the second week of April, Yuri's Night is a commemoration of milestones in space exploration, summing up the academic year. It is a two-day event: On the first day we have workshops and theoretical lectures, and on the second day, we host an observational session, some competitions and debates followed by a movie night.",
        "img": "/nsd.png",
        "link": "https://www.youtube.com/watch?v=ftiiwx0kSp4"
    },
    {
        "title": "Yuri's Night",
        "desc": "Hosted in the second week of April, Yuri's Night is a commemoration of milestones in space exploration, summing up the academic year. It is a two-day event where we conduct four major competitions astro quiz, planet hunt, cosmic script and cosmic canvas. The competitions are held between students of different schools abd colleges according to divisions",
        "img": "/yuris.png",
        "link": "https://yurisnight.netlify.app/"
    },
    {
        "title": "Astropedia",
        "desc": "The Astronomy Club hosts an event called Astropedia where various workshops, lectures and debates are conducted to benefit the students. These lectures are hosted by both the club members and guest lecturers on astronomy basics, like formation of stars and galaxies, modern astronomy, mathematical and analytical modelling to name a few along with debates and competitions on Astrophysics.",
        "img": "/astropedia.png",
        "link": "https://www.instagram.com/p/DAY5ju3M2ro/"

    },
    {
        "title": "Observational Sessions",
        "desc": "Observations are what solidify any theory. Therefore, we organize observational sessions to help students get acquianted with observational astronomy and navigate the night sky. The club owns various equipments, enabling us to observe a wealth of detail on celestial bodies. We also have a planetarium as a part of our project and its  major application will be to conduct observational sessions.",
        "img": "/obs.png",
        "link": "https://www.instagram.com/p/DFNgTYmy_yM/"
    },
    {
        "title": "Telescon",
        "desc": "Telescon is our first event for freshers, a DIY telescope making competition, in which they learn about the basics by building telescopes from scratch. This event has two rounds, namely Presentation & Telescope Building. In the first round, the teams's ideas are judged on sustainability and feasibility, and in the latter, they build a working model of the telescope.",
        "img": "/telescon.png",
        "link": "https://www.instagram.com/p/C5gSUiYs4CY/"
    },

]

export default events_data